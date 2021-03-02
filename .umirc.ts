import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/welcome/index' },
    { path: '/home', component: '@/pages/home/index' },
    { path: '/pages', component: '@/pages/index' },
    { path: '/search', component: '@/pages/search/index' },
    { path: '/mylist', component: '@/pages/mylist/index' },
    { path: '/plan', component: '@/pages/plan/index' },
    { path: '/automatic', component: '@/pages/automatic/index' },




  ],
  fastRefresh: {},
});
