using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers;

[Route("about")]
public class About : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}