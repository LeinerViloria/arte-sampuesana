
using Microsoft.EntityFrameworkCore;

namespace Api.Logic
{
    public interface IEntityLogicBase<T> where T : class
    {
        T Save(T BaseObj);
        bool Delete(int Rowid);
        string Get(int Rowid);
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

        public bool Delete(int Rowid)
        {
            throw new NotImplementedException();
        }

        public string Get(int Rowid)
        {
            return $"Hola desde la base {typeof(T)}";
        }
    }
}