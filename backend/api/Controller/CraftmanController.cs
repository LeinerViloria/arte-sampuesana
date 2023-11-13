
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

        [HttpGet("Percentage/{Rowid}")]
        public IResult GetPercentage(int Rowid)
        {
            return Results.Ok(Logic.GetPercentage(Rowid));
        }

        [HttpGet("First")]
        public IResult GetFirst()
        {
            return Results.Ok(Logic.First());
        }
        
        [HttpGet("FirstWithProducts")]
        public IResult GetFirstWithProducts()
        {
            return Results.Ok(Logic.GetFirstWithProducts());
        }
    }
}