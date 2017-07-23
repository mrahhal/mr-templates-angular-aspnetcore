import { Ng2StateDeclaration } from '@uirouter/angular';

import { Home } from './home.component';

export const homeStates: Ng2StateDeclaration[] = [{
	name: 'home',
	url: '/',
	component: Home
}];
