
using Api.Entities;
using Api.Logic;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controller
{
    [Route(nameof(Craftman))]
    public class CraftmanController : ApiBaseController<CraftmanLogic, Craftman>
    {
        public CraftmanController(IServiceProvider provider) : base(provider)
        {
        }

        [HttpGet("Percentage")]
        public IResult GetPercentage(int Rowid)
        {
            return Results.Ok(95);
        }

        [HttpGet("First")]
        public IResult GetFirst()
        {
            return Results.Ok(Logic.First());
        }
    }
}