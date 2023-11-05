using Api.Entities;
using Api.Logic;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controller;

[Route(nameof(ProductBusiness))]
public class ProductBusinessController : ApiBaseController<ProductBusinessLogic, ProductBusiness>
{
    public ProductBusinessController(IServiceProvider provider) : base(provider)
    {
    }
}