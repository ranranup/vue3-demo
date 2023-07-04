import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/user';

const routes = [
  {
    path: '/',
    component: () => import('@/views/other/home.vue'),
    meta: { title: '主页', access: '' }
  },
  {
    path: '/todo-list',
    component: () => import('@/views/demo1/index.vue'),
    meta: { title: '列表页', access: 'DATA' }
  },
  {
    path: '/error/:title',
    component: () => import('@/views/other/error.vue'),
    meta: { title: 'error', access: '' },
    props: true
  },
  {
    path: '/button-group',
    component: () => import('@/views/demo2/index.vue'),
    meta: { title: '按钮组', access: 'FLOW' }
  },
  {
    path: '/test',
    component: () => import('@/views/demo3/index.vue'),
    meta: { title: '测试组', access: 'TEST' }
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});
router.beforeEach((to) => {
  const authorities = useUserStore().authorities;
  const hasAccess = !to.meta.access || authorities.includes(to.meta.access as string);
  if (!hasAccess) {
    router.push({ path: `/error/${to.meta.title}` });
  }
  return hasAccess;
});

export default router;
