using Api.Entities;

namespace Api.Logic;

public class ProductLogic : EntityLogicBase<Product>
{
    public ProductLogic(IServiceProvider provider) : base(provider)
    {
    }
}