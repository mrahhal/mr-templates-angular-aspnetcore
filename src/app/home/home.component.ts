import { Component } from '@angular/core';
import * as moment from 'moment';

import environment from '../environment';
import { HomeService } from './home.service';

@Component({
	selector: 'home-component',
	templateUrl: './home.html',
	styleUrls: ['./home.scss']
})
export class Home {
	name: string;
	environment: string;
	time: string;

	constructor(private home: HomeService) {
		this.name = home.message;
		this.environment = environment;
		this.time = moment().subtract(325, 'minutes').fromNow();
	}
}
