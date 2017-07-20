import { Ng2StateDeclaration } from '@uirouter/angular';

import { Home } from './home.component';

export const homeState: Ng2StateDeclaration = {
	name: 'home',
	url: '/',
	component: Home
};

export const homeStates = [
	homeState
];
