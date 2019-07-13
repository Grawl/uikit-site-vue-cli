import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Page from './page.vue'
import navigation from './navigation.json'
const routes = [
	{ path: '*', redirect: ({ path }) => `${path}introduction` },
	{ path: '*/:page', component: Page }
]
Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	mode: 'history',
	history: true,
	linkActiveClass: 'uk-active'
})
new Vue({
	router,
	provide: { router },
	el: '#app',
	extends: App,
	data: () => ({
		navigation,
		ids: {},
		page: false,
		component: false
	})
})
