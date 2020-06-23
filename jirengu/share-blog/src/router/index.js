import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/template.vue'
import Index from '../views/Index/template.vue'
import Detail from '../views/Detail/template.vue'
import Create from '../views/Create/template.vue'
import Edit from '../views/Edit/template.vue'
import Register from '../views/Register/template.vue'
import User from '../views/User/template.vue'
import My from '../views/My/template.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  routes
})

export default router
