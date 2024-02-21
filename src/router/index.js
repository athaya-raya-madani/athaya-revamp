import { createRouter, createWebHistory } from 'vue-router';

// const requiresAuth = true; // Example, replace with your actual logic for authentication

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('../pages/dashboard.vue'),
          name: 'dashboard',
          props: (route) => ({ userid: route.params.userid, token: route.params.token }),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: 'account-settings',
          component: () => import('../pages/account-settings.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        // ... other routes
        // analisa kredit
        {
          path: 'analisa-kredit',
          name: 'analisa-kredit',
          component: () => import('../pages/analisa-kredit.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: 'analisa-kredit/:id/view',
          name: 'analisa.edit',
          component: () => import('../pages/analisaEdit.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        // antrian Slik
        {
          path: 'antrian-slik',
          name: 'antrian-slik',
          component: () => import('../pages/antrian-slik.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: 'antrian-slik/:id/view',
          name: 'antrianslik.edit',
          component: () => import('../pages/antrianSlik.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: 'antrian-hasil-slik',
          name: 'antrian-hasil-slik',
          component: () => import('../pages/antrian-hasil-slik.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: 'antrian-hasil-slik/:id/view',
          name: 'hasilslik.edit',
          component: () => import('../pages/antrianEditSlik.vue'),
          meta: {
            requiresAuth: true,
          },
        },

        //tutup antrian slik 


        // antrian bank bpr
        {
          path: 'antrian-slik-bprtas',
          name: 'antrian-slik-bprtas',
          component: () => import('../pages/antrian-slik-bprtas.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: 'antrian-slik-bprtas/:id/view',
          name: 'antrianbprtas.edit',
          component: () => import('../pages/antrianBprtasEdit.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: 'permohonans',
          name: 'permohonans',
          component: () => import('../pages/permohonan.vue'),
          meta: {
            requiresAuth: true,
            requiresOtorizaion: true,
          },
        },
        {
          path: 'permohonans/:id/edit',
          name: 'permohonans.edit',
          component: () => import('../pages/permohonanEdit.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: 'permohonans/create',
          name: 'permohonans.create',
          component: () => import('../pages/permohonanCreate.vue'),
          meta: {
            requiresAuth: true,
          },
        },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: 'login',
          component: () => import('../views/auth/login.vue'),
        },
        {
          path: 'register',
          component: () => import('../pages/register.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../pages/[...all].vue'),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresOtorizaion = to.matched.some((record) => record.meta.requiresOtorizaion);


  if (requiresAuth) {
    const token = localStorage.getItem('token');
    if (!token) {
      // User is not authenticated, redirect to login
      next('/login');
    } else {
      // User is authenticated
      if (requiresOtorizaion) {
        const idklppengguna = localStorage.getItem('idklppengguna');
        if (idklppengguna == 2) {
          // User has the required authorization, proceed to the route
          next();
        } else {
          // User does not have the required authorization, redirect to a default route
          next('/');
        }
      } else {
        // Route doesn't require specific authorization, proceed to the route
        next();
      }
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});


export default router;
