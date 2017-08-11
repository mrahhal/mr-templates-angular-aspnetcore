using Microsoft.AspNetCore.Mvc;
using Server.Services;

namespace Server.Controllers
{
	[Route("")]
	public class RootController : Controller
	{
		private ConfigurationService _configurationService;

		public RootController(
			ConfigurationService configurationService)
		{
			_configurationService = configurationService;
		}

		[HttpGet("{*path}")]
		public IActionResult Get(string path)
		{
			var config = _configurationService.GetSerializedClientConfiguration();
			return View("~/index.cshtml", config);
		}
	}
}
