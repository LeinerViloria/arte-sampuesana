
using System.Linq.Dynamic.Core;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Logic
{
    public interface IEntityLogicBase<T> where T : class
    {
        T Save(T BaseObj);
        T Update(T BaseObj);
        bool Delete(int Rowid);
        T? Get(int Rowid);
        IList<T> Get();
    }

    public abstract class EntityLogicBase<T> : IEntityLogicBase<T> where T : class
    {
        protected IServiceProvider ServiceProvider {get; set;}
        protected ApiContext Context {get; set;}

        public EntityLogicBase(IServiceProvider provider)
        {
            ServiceProvider = provider;
            Context = (ApiContext) ServiceProvider.GetService(typeof(ApiContext));
        }

        public virtual T Save(T Obj)
        {
            Context.Add(Obj);
            Context.SaveChanges();
            return Obj;
        }

        public virtual T Update(T Obj)
        {
            var Info = Context.Set<T>()
                .Where("Rowid == @0", Obj.GetType().GetProperty("Rowid").GetValue(Obj))
                .First();

            Context.ResetValues(Info, Obj);

            Context.SaveChanges();
            return Info;
        }

        public virtual bool Delete(int Rowid)
        {
            var Info = Context.Set<T>()
                .Where("Rowid == @0", Rowid)
                .FirstOrDefault();

            if(Info is not null)
                Context.Remove(Info);

            var Result = Context.SaveChanges();
            return Result == 1;
        }

        IQueryable<T> SetInclude(IQueryable<T> Query)
        {
            var ForeignProperties = typeof(T).GetProperties()
                .Where(x => x.GetCustomAttributes(typeof(ForeignKeyAttribute), false).Length > 0)
                .Select(x => (ForeignKeyAttribute) x.GetCustomAttributes(typeof(ForeignKeyAttribute), false)[0]);

            foreach (var Property in ForeignProperties)
                Query = Query.Include(Property.Name);

            return Query;
        }

        public virtual T? Get(int Rowid)
        {
            var Query = Context.Set<T>()
                .Where("Rowid == @0", Rowid)
                .AsQueryable();

            Query = SetInclude(Query);
            
            var Info = Query.FirstOrDefault();

            return Info;
        }

        public virtual IList<T> Get()
        {
            var Query = Context.Set<T>().AsQueryable();
            var Data = Query.ToList(); 
            return Data;
        }
    }
}