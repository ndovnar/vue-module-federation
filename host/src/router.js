import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './pages/home';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/container',
		name: 'container',
		component: () => import('container/container-page.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
