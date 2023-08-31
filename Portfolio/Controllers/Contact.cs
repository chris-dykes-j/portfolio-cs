using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers;

[Route("contact")]
public class Contact : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}