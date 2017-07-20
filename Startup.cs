using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Server
{
	public class Startup
	{
		public Startup(ILoggerFactory loggerFactory)
		{
			loggerFactory.AddConsole(LogLevel.Warning);
		}

		public void ConfigureServices(IServiceCollection services)
		{
			services.AddResponseCompression();
			services.AddMvc();
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
