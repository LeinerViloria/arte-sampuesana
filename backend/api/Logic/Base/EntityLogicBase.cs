
using System.Linq.Dynamic.Core;
using Microsoft.EntityFrameworkCore;

namespace Api.Logic
{
    public interface IEntityLogicBase<T> where T : class
    {
        T Save(T BaseObj);
        T Update(T BaseObj);
        bool Delete(int Rowid);
        T? Get(int Rowid);
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
            var Info = Context.Set<T>()
                .Where("Rowid == @0", Obj.GetType().GetProperty("Rowid").GetValue(Obj))
                .First();

            Context.ResetValues(Info, Obj);

            Context.SaveChanges();
            return Obj;
        }

        public bool Delete(int Rowid)
        {
            var Info = Context.Set<T>()
                .Where("Rowid == @0", Rowid)
                .First();

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
    }
}