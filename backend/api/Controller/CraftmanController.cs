
using Api.Entities;
using Api.Logic;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controller
{
    [Route(nameof(Craftman))]
    public class CraftmanController : ApiBaseController<CraftmanLogic>
    {
        public CraftmanController(IServiceProvider provider) : base(provider)
        {
        }
    }
}