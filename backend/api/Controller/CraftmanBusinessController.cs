using Api.Entities;
using Api.Logic;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controller;

[Route(nameof(CraftmanBusiness))]
public class CraftmanBusinessController : ApiBaseController<CraftmanBusinessLogic, CraftmanBusiness>
{
    public CraftmanBusinessController(IServiceProvider provider) : base(provider)
    {
    }
}