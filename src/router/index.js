import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAsyncState } from '@vueuse/core';
import { currentUser } from '@/services/auth';
import { useUserStore } from '@/stores/user';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component:import('../views/Auth/Login.vue'),
      meta: { alreadyAuth: true },
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Auth/Signup.vue'),
      meta: { alreadyAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: true },
    },

    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { requiresAuth: true },
    },
  ],
})


router.beforeEach(async (to, from) => {

  if (to.meta.requiresAuth){
    const auth = await currentUser();
    useUserStore().initUser(auth.data);
    if(!auth.data) {
      return {
        path: '/login',
        // save the location we were at to come back later
        query: { redirect: to.fullPath },
      }
    }
  }

  if (to.meta.alreadyAuth ){
    const auth = await currentUser();
    if(auth.data) {
      return {
        path: '/about',
        // save the location we were at to come back later
        query: { redirect: to.fullPath },
      }
    }
  }
})

export default router
