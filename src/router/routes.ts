import type { RouteRecordRaw } from 'vue-router'

 const routes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: { 
			isTemplateVisible: true, 
			requiresAuth: false 
		}
	},
];

export default routes;