import { Ng2StateDeclaration } from '@uirouter/angular';

import { Admin } from './admin.component';

export const ADMIN_STATES: Ng2StateDeclaration[] = [{
	name: 'admin',
	url: '/admin',
	component: Admin,
}];
