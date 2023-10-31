
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
            return Logic.Get(Rowid);
        }

        [HttpPost]
        public string Save(K BaseObj)
        {
            var a = Logic.Save(BaseObj);
            return "";
        }
    }
}