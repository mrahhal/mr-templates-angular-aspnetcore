import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { adminStates } from './admin.routing';

@NgModule({
	imports: [
		UIRouterModule.forChild({ states: adminStates }),
		SharedModule,
	],
	exports: [],
	declarations: [AdminComponent],
	providers: [],
})
export class AdminModule { }
