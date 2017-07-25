import { Ng2StateDeclaration } from '@uirouter/angular';

// Lazily loaded routes
export const appStates: Ng2StateDeclaration[] = [{
	name: 'admin.**',
	url: '/admin',
	loadChildren: './admin/admin.module#AdminModule',
}];
