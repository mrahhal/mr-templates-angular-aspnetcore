using Microsoft.AspNetCore.Html;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Server.Services
{
	public class ConfigurationService
	{
		private IConfigurationRoot _configuration;

		private object _config;
		private HtmlString _serializedConfig;

		public ConfigurationService(
			IConfigurationRoot configuration)
		{
			_configuration = configuration;
		}

		public object GetClientConfiguration()
		{
			return _config ?? (_config = CreateClientConfiguration());
		}

		public HtmlString GetSerializedClientConfiguration()
		{
			return _serializedConfig ?? (_serializedConfig = GetSerializedClientConfigurationUncached());
		}

		private HtmlString GetSerializedClientConfigurationUncached()
		{
			var config = GetClientConfiguration();

			var settings = new JsonSerializerSettings
			{
				ContractResolver = new CamelCasePropertyNamesContractResolver()
			};
			var serialized = JsonConvert.SerializeObject(config, Formatting.None, settings);

			return new HtmlString(serialized);
		}

		private object CreateClientConfiguration()
		{
			return new
			{
				url = _configuration["url"]
			};
		}
	}
}
