using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers;

[Route("error")]
public class ErrorController : Controller
{
    [Route("{statusCode:int}")]
    public IActionResult Index(int statusCode)
    {
        return statusCode switch
        {
            404 => RedirectToAction("NotFoundError", "Error"),
            >= 500 and < 600 => RedirectToAction("InternalServerError", "Error"),
            _ => View()
        };
    }
    
    [Route("404")]
    public IActionResult NotFoundError()
    {
        return View();
    }

    [Route("500")]
    public IActionResult InternalServerError()
    {
        return View();
    }
}