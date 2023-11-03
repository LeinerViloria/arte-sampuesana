
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

        public T Save(T Obj)
        {
            Context.Add(Obj);
            Context.SaveChanges();
            return Obj;
        }

        public T Update(T Obj)
        {
            try
            {
                var Info = Context.Set<T>()
                    .Where("Rowid == @0", Obj.GetType().GetProperty("Rowid").GetValue(Obj))
                    .First();

                Context.ResetValues(Info, Obj);

                Context.SaveChanges();
                return Info;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public bool Delete(int Rowid)
        {
            var Info = Context.Set<T>()
                .Where("Rowid == @0", Rowid)
                .FirstOrDefault();

            if(Info is not null)
                Context.Remove(Info);

            var Result = Context.SaveChanges();
            return Result == 1;
        }

        public T? Get(int Rowid)
        {
            var Info = Context.Set<T>()
                .Where("Rowid == @0", Rowid)
                .FirstOrDefault();

            return Info;
        }

        public IList<T> Get()
        {
            var Query = Context.Set<T>().AsQueryable();

            var ForeignProperties = typeof(T).GetProperties()
                .Where(x => x.GetCustomAttributes(typeof(ForeignKeyAttribute), false).Length > 0)
                .Select(x => (ForeignKeyAttribute) x.GetCustomAttributes(typeof(ForeignKeyAttribute), false)[0]);

            foreach (var Property in ForeignProperties)
                Query = Query.Include(Property.Name);

            var Data = Query.ToList(); 
            return Data;
        }
    }
}