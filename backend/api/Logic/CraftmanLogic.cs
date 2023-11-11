
using Api.Entities;

namespace Api.Logic
{
    public class CraftmanLogic : EntityLogicBase<Craftman>
    {
        public CraftmanLogic(IServiceProvider provider) : base(provider)
        {
        }

        public Craftman First()
        {
            return Context.Set<Craftman>().First();
        }

        public int GetPercentage(int Rowid)
        {
            var Data = Get(Rowid);
            return 80;
        }
    }
}