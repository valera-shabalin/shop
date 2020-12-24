const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
          layout: 'main',
          auth: false,
          admin: false
        },
        component: () => import('@/views/Home')
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            layout: 'auth',
            auth: false,
            admin: false
        },
        component: () => import('@/views/auth/Login')
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            layout: 'auth',
            auth: false,
            admin: false
        },
        component: () => import('@/views/auth/Register')
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: {
            layout: 'main',
            auth: true,
            admin: false
        },
        component: () => import('@/views/Profile')
    },
    {
        path: '/catalog',
        name: 'Catalog',
        meta: {
            layout: 'main',
            auth: false,
            admin: false
        },
        component: () => import('@/views/Catalog')
    },
    {
        path: '/admin',
        name: 'Admin',
        meta: {
            layout: 'main',
            auth: true,
            admin: true
        },
        component: () => import('@/views/Admin')
    },
]

export default routes