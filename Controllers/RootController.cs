using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
	[Route("")]
	public class RootController : Controller
	{
		[HttpGet("{*path}")]
		public IActionResult Get(string path) => View("~/index.cshtml");
	}
}
