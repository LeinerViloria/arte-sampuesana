using Api.Entities;
using System;
using System.Reflection;

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

            var Properties = typeof(Craftman).GetProperties()
                .Where(x => !x.PropertyType.IsClass);

            var Base = 100/Properties.Count();
            var Total = 0;

            foreach (var Property in Properties)
            {
                var CurrentValue = Property.GetValue(Data);
                var DefaultValue = Activator.CreateInstance(Property.PropertyType);

                if(CurrentValue == DefaultValue)
                    continue;

                Total += Base;
            }
            
            return Total;
        }
    }
}