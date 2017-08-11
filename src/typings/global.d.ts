declare var ENV: string;

declare interface AppConfig {
	url: string;
}

interface Window {
	initialData: {
		environment: string;
		config: AppConfig;
	};
}
