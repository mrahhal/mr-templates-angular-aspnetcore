import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular';

import { App } from './app.component';
import { appStates } from './app.routing';
import { HomeModule } from './home/home.module';
import { routerConfigFn } from './router.config';
import { SharedModule } from './shared/shared.module';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		UIRouterModule.forRoot({
			states: appStates,
			otherwise: { state: 'home' },
			config: routerConfigFn,
		}),
		SharedModule,
		HomeModule,
	],
	declarations: [App],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/' },
	],
	bootstrap: [App],
})
export class AppModule { }
