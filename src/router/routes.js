export const _ROUTES = [
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/home/Home.vue'),
        name: 'NotFound',
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/',
        component: () => import('../views/home/Home.vue'),
        name: 'Home',
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/ourteam',
        component: () => import('../views/ourteam/OurTeam.vue'),
        name: 'OurTeam',
        meta: {
            layout: 'default',
            title: 'About Us'
        }
    },
    {
        path: '/podcast',
        component: () => import('../views/podcast/Podcast.vue'),
        name: 'Podcast',
        meta: {
            layout: 'default',
            title: 'Podcast'
        }
    },
    {
        path: '/powercampus',
        component: () => import('../views/powercampus/PowerCampus.vue'),
        name: 'PowerCampus',
        meta: {
            layout: 'default',
            title: 'Power Campus'
        }
    },
    {
        path: '/admin',
        redirect: () => 'admin/bio',
        children: [
            {
                path: 'bio',
                component: () => import('../views/admin/Bio.vue'),
                name: 'AdminBio',
                meta: {
                    layout: 'admin',
                    title: 'Bio Management',
                    requiresAuth: true
                }
            },
            {
                path: 'login',
                component: () => import('../views/admin/Login.vue'),
                name: 'AdminLogin',
                meta: {
                    layout: 'admin',
                    title: 'Admin Login'
                }
            },
        ]
    },
]