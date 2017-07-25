import { Ng2StateDeclaration } from '@uirouter/angular';

import { AdminComponent } from './admin.component';

export const adminStates: Ng2StateDeclaration[] = [{
	name: 'admin',
	url: '/admin',
	component: AdminComponent,
}];
