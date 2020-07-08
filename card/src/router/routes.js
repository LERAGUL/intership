
const routes = [
  {
    path: '/', redirect: {name: 'myself'},
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'myself', path: '/myself', component: () => import('pages/Myself.vue') },
      { name: 'skills', path: '/skills', component: () => import('pages/Skills.vue') },
      { name: 'practice', path: '/practice', component: () => import('pages/Practice.vue') }
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
