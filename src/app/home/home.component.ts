import { Component } from '@angular/core';
import * as moment from 'moment';

import config from '../config';
import environment from '../environment';
import { HomeService } from './home.service';

@Component({
	templateUrl: './home.html',
	styleUrls: ['./home.scss'],
})
export class Home {
	name: string;
	time: string;
	environment: string;
	config: AppConfig;

	constructor(private home: HomeService) {
		this.name = home.message;
		this.time = moment().subtract(325, 'minutes').fromNow();
		this.environment = environment;
		this.config = config;
	}
}
