const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
          layout: 'main',
          auth: false
        },
        component: () => import('@/views/Home')
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            layout: 'auth',
            auth: false
        },
        component: () => import('@/views/auth/Login')
    },
    {
        path: '/login',
        name: 'Register',
        meta: {
            layout: 'auth',
            auth: false
        },
        component: () => import('@/views/auth/Register')
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: {
            layout: 'main',
            auth: true
        },
        component: () => import('@/views/Profile')
    },
    {
        path: '/catalog',
        name: 'Catalog',
        meta: {
            layout: 'main',
            auth: false
        },
        component: () => import('@/views/Catalog')
    },
]

export default routes