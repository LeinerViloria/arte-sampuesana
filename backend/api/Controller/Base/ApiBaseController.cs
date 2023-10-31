
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
        public string Get(int Rowid)
        {
            var Obj = Logic.Get(Rowid);

            if(Obj is null)
                return JsonSerializer.Serialize(new{Message="Not found"});

            return JsonSerializer.Serialize(Obj);
        }

        [HttpPost]
        public string Save(K BaseObj)
        {
            var Result = Logic.Save(BaseObj);
            return JsonSerializer.Serialize(Result);
        }

        [HttpPut]
        public string Update(K BaseObj)
        {
            var Result = Logic.Update(BaseObj);
            return JsonSerializer.Serialize(Result);
        }

        [HttpDelete]
        public string Delete(int Rowid)
        {
            var Result = Logic.Delete(Rowid);

            return JsonSerializer.Serialize(new{Deleted=Result});
        }
    }
}