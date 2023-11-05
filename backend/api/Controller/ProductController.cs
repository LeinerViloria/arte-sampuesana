using Api.Entities;
using Api.Logic;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controller;

[Route(nameof(Product))]
public class ProductController : ApiBaseController<ProductLogic, Product>
{
    public ProductController(IServiceProvider provider) : base(provider)
    {
    }
}