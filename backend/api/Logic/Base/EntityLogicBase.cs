
using Microsoft.EntityFrameworkCore;

namespace Api.Logic
{
    public interface IEntityLogicBase
    {
        dynamic Save();
        bool Delete();
        string Get();
    }

    public abstract class EntityLogicBase<T> : IEntityLogicBase where T : class
    {
        public T BaseObj {get; set;}
        protected IServiceProvider ServiceProvider {get; set;}
        protected ApiContext Context {get; set;}

        public EntityLogicBase(IServiceProvider provider)
        {
            BaseObj = ActivatorUtilities.CreateInstance<T>(provider);
            ServiceProvider = provider;
            Context = (ApiContext) ServiceProvider.GetService(typeof(ApiContext));
        }

        public ApiContext CreateContext()
        {
            return null;
        }

        public dynamic Save()
        {
            return 1;
        }

        public bool Delete()
        {
            throw new NotImplementedException();
        }

        public string Get()
        {
            return $"Hola desde la base {typeof(T)}";
        }
    }
}