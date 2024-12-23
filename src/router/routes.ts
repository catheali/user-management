import  Login  from '@/views/Login.vue';
import  NotFound  from '@/views/NotFound.vue';
import  Dashboard  from '@/views/Dashboard.vue';

import type { RouteRecordRaw } from 'vue-router'

 const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard,
		meta: { 
			isTemplateVisible:true, 
			requiresAuth: true 
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: { 
			isTemplateVisible: true, 
			requiresAuth: false 
		}
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound,
		meta: { 
			isTemplateVisible: false, 
			requiresAuth: false 
		}
	},
];

export default routes;