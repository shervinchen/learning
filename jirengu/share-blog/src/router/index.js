import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/Index/template.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/template.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register/template.vue')
  },
  {
    path: '/detail/:blogId',
    name: 'Detail',
    component: () => import('@/views/Detail/template.vue')
  },
  {
    path: '/edit/:blogId',
    name: 'Edit',
    component: () => import('@/views/Edit/template.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('@/views/Create/template.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: () => import('@/views/User/template.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('@/views/My/template.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})

export default router
