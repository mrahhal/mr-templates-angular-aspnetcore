import { Ng2StateDeclaration } from '@uirouter/angular';

import { AdminComponent } from './admin.component';

export const ADMIN_STATES: Ng2StateDeclaration[] = [{
	name: 'admin',
	url: '/admin',
	component: AdminComponent,
}];
