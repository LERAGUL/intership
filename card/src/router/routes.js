
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/myself', component: () => import('pages/Myself.vue') },
      { path: '/skills', component: () => import('pages/Skills.vue') },
      { path: '/practice', component: () => import('pages/Practice.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
