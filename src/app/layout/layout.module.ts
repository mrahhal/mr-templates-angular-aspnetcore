import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { Layout } from './layout.component';

const exportedDeclarations = [
	Layout,
];

@NgModule({
	imports: [
		SharedModule,
	],
	exports: [
		...exportedDeclarations,
	],
	declarations: [
		...exportedDeclarations,
	],
	providers: [],
})
export class LayoutModule { }
