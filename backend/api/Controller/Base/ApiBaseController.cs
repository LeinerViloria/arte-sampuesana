
using System.Text.Json;
using Api.Entities;
using Api.Logic;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controller
{
    [ApiController]
    public abstract class ApiBaseController<T, K> : ControllerBase where T : class, IEntityLogicBase<K> where K : class
    {
        protected T Logic {get; set;}

        public ApiBaseController(IServiceProvider provider)
        {
            Logic = ActivatorUtilities.CreateInstance<T>(provider);
        }

        [HttpGet]
        public string Get()
        {
            var Obj = Logic.Get();

            return JsonSerializer.Serialize(Obj);
        }

        [HttpGet("/{Rowid}")]
        public string Get(int Rowid)
        {
            var Obj = Logic.Get(Rowid);

            if(Obj is null)
                return JsonSerializer.Serialize(new{Message="Not found"});

            return JsonSerializer.Serialize(Obj);
        }

        [HttpPost]
        public IResult Save(K BaseObj)
        {
            try
            {
                var Result = Logic.Save(BaseObj);
                return Results.Ok(Result);
            }
            catch (Exception e)
            {
                return Results.Problem(e.InnerException?.Message);
            }
        }

        [HttpPut]
        public IResult Update(K BaseObj)
        {
            try
            {
                var Result = Logic.Update(BaseObj);
                return Results.Ok(Result);
            }
            catch (Exception e)
            {
                return Results.Problem(e.Message);
            }
        }

        [HttpDelete]
        public IResult Delete(int Rowid)
        {
            try
            {
                var Result = Logic.Delete(Rowid);
                return Results.Ok(Result);
            }
            catch (Exception e)
            {
                return Results.Problem(e.InnerException?.Message);
            }
        }
    }
}