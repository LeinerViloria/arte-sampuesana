
using Microsoft.AspNetCore.Mvc;

namespace Api.Controller
{
    [ApiController]
    public abstract class ApiBaseController<T> : ControllerBase where T : class
    {
        [HttpGet]
        public string Get()
        {
            return "Hola desde la base";
        }
    }
}