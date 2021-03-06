import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { SharedModule } from '../shared/shared.module';
import { Home } from './home.component';
import { HOME_STATES } from './home.routing';
import { HomeService } from './home.service';

@NgModule({
	imports: [
		SharedModule,
		UIRouterModule.forChild({ states: HOME_STATES }),
	],
	exports: [],
	declarations: [Home],
	providers: [HomeService],
})
export class HomeModule { }
