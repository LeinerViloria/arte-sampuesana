using Api.Entities;
using Api.Logic;

namespace Api.Controller;

public class ProductBusinessController : ApiBaseController<ProductBusinessLogic, ProductBusiness>
{
    public ProductBusinessController(IServiceProvider provider) : base(provider)
    {
    }
}