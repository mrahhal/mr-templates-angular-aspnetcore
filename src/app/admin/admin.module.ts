import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { SharedModule } from '../shared/shared.module';
import { Admin } from './admin.component';
import { ADMIN_STATES } from './admin.routing';

@NgModule({
	imports: [
		UIRouterModule.forChild({ states: ADMIN_STATES }),
		SharedModule,
	],
	declarations: [
		Admin,
	],
})
export class AdminModule { }
