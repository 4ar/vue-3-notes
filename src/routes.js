import { createWebHistory, createRouter } from 'vue-router';

import HomeView from './pages/HomeView';
import AboutView from './pages/AboutView';

const routes = [
	{ path: '/', component: HomeView },
	{ path: '/about', component: AboutView },
	{ path: '/:pathMatch(.*)*', component: <h1>404</h1> },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
