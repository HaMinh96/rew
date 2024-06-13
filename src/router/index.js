import { createRouter, createWebHistory } from 'vue-router'
import { _ROUTES } from './routes'

const router = createRouter({
    history: createWebHistory('/rew/'),
    routes: _ROUTES,
    scrollBehavior() {
        return { top: 0 }
    },
})

router.beforeEach((to) => {
    const title = to.meta?.title

    document.title = `ReWorkflow${title ? ` - ${title}` : ''}`
})

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const token = sessionStorage.getItem('accessToken')

    if (requiresAuth && !token) {
        next({ name: 'AdminLogin' })
    } else {
        next()
    }
})

export default router