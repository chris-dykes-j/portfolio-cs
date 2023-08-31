using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers;

[Route("projects")]
public class Project : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}