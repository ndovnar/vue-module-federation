import { createRouter, createWebHashHistory } from 'vue-router';
import containerPage from './pages/container-page.vue';

const routes= [
	{
		path: '/',
		name: 'home',
		component: containerPage,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
