
namespace Api.Logic
{
    public interface IEntityLogicBase
    {
        int Save();
        bool Delete();
    }

    public abstract class EntityLogicBase<T> : IEntityLogicBase where T : class
    {
        public T BaseObj {get; set;}

        public EntityLogicBase(IServiceProvider provider)
        {
            BaseObj = ActivatorUtilities.CreateInstance<T>(provider);
        }

        public int Save()
        {
            throw new NotImplementedException();
        }

        public bool Delete()
        {
            throw new NotImplementedException();
        }
    }
}