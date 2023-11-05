using Api.Entities;

namespace Api.Logic;

public class ProductBusinessLogic : EntityLogicBase<ProductBusiness>
{
    public ProductBusinessLogic(IServiceProvider provider) : base(provider)
    {
    }
}