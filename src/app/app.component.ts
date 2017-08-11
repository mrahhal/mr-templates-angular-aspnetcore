import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `<app-layout></app-layout>`,
	styleUrls: ['./sass/app.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class App {
	constructor() {
	}
}
