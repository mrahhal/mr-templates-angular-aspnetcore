import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular';

import { App } from './app.component';
import { APP_STATES } from './app.routing';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { routerConfigFn } from './router.config';
import { SharedModule } from './shared/shared.module';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		UIRouterModule.forRoot({
			states: APP_STATES,
			otherwise: { state: 'home' },
			config: routerConfigFn,
		}),
		SharedModule,
		LayoutModule,
		HomeModule,
	],
	declarations: [
		App,
	],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/' },
	],
	bootstrap: [App],
})
export class AppModule { }
