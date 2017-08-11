import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		UIRouterModule,
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		UIRouterModule,
	],
	declarations: [],
	providers: [],
})
export class SharedModule { }
