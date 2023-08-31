using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers;

public class ErrorController : Controller
{
    [Route("Error/{statusCode:int}")]
    public IActionResult Index()
    {
        return View();
    }
}