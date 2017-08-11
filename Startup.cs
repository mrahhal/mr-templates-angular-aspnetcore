using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Server.Services;

namespace Server
{
	public class Startup
	{
		private readonly IHostingEnvironment _env;

		public Startup(IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			_env = env;

			Configuration = new ConfigurationBuilder()
				.SetBasePath(env.ContentRootPath)
				.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
				.AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true)
				.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
				.AddEnvironmentVariables()
				.Build();

			loggerFactory.AddConsole(LogLevel.Warning);
		}

		public IConfigurationRoot Configuration { get; set; }

		public void ConfigureServices(IServiceCollection services)
		{
			services.AddResponseCompression();
			services.AddMvc();

			services.AddSingleton(Configuration);
			services.AddSingleton<ConfigurationService>();
		}

		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseStaticFiles();

			app.UseResponseCompression();

			app.UseMvc();
		}
	}
}
