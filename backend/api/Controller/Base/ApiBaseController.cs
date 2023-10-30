
using Api.Logic;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controller
{
    [ApiController]
    public abstract class ApiBaseController<T, K> : ControllerBase where T : class, IEntityLogicBase
    {
        protected T Logic {get; set;}

        public ApiBaseController(IServiceProvider provider)
        {
            Logic = ActivatorUtilities.CreateInstance<T>(provider);
        }

        [HttpGet]
        public string Get()
        {
            return Logic.Get();
        }

        [HttpPost]
        public string Save()
        {
            var a = Logic.Save();
            return "";
        }
    }
}