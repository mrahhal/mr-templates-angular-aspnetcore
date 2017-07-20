import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular';

import { App } from './app.component';
import { appStates } from './app.routing';
import { Home } from './home/home.component';
import { HomeService } from './home/home.service';
import { routerConfigFn } from './router.config';

@NgModule({
	imports: [
		UIRouterModule.forRoot({
			states: appStates,
			otherwise: { state: 'home' },
			config: routerConfigFn,
		}),
		BrowserModule,
		FormsModule,
		HttpModule,
	],
	declarations: [App, Home],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/' },
		HomeService
	],
	bootstrap: [App]
})
export class AppModule { }
