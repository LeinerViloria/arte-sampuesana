using Api.Entities;
using System;
using System.Reflection;
using api.DTOS;

namespace Api.Logic
{
    public class CraftmanLogic : EntityLogicBase<Craftman>
    {
        public CraftmanLogic(IServiceProvider provider) : base(provider)
        {
        }

        public Craftman First()
        {
            var BaseObj = Context.Set<Craftman>().First();
            BaseObj.Business = Context.Set<CraftmanBusiness>()
                .Where(x => x.RowidCraftman == BaseObj.Rowid)
                .Select(x => new BusinessDTO
                {
                    Rowid = x.Rowid,
                    Name = x.Name,
                    QRUrl = x.QRUrl
                }).FirstOrDefault();
            
            return BaseObj;
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