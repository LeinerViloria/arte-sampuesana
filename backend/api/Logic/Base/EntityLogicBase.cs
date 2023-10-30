
namespace Api.Logic
{
    public abstract class EntityLogicBase<T> where T : class
    {
        public T BaseObj {get; set;}

        public EntityLogicBase(IServiceProvider provider)
        {
            BaseObj = ActivatorUtilities.CreateInstance<T>(provider);
        }
    }
}