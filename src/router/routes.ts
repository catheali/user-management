import  Login  from '@/views/Login.vue';
import  NotFound  from '@/views/NotFound.vue';
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