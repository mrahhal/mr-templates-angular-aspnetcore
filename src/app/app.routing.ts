import { Ng2StateDeclaration } from '@uirouter/angular';

// Lazily loaded routes
export const APP_STATES: Ng2StateDeclaration[] = [{
	name: 'admin.**',
	url: '/admin',
	loadChildren: './admin/admin.module#AdminModule',
}];
