import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '@/stores/authStore'; 
import routes from '@/router/routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next) => {
	const authStore = useAuthStore();
	const isValidToken = !!authStore.loginData;
	if (to.name === 'Login' && isValidToken) {
	  if (to.path !== from.path) {
		return next({ path: '/' });
	  } else {
		next();
	  }
	} else if (to.meta.requiresAuth && !isValidToken) {
	 return  next({
		path: '/login',
		query: { redirect: to.fullPath },
	  });
	} else {
	  next();
	}
  });
  
export default router;