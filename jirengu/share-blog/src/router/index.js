import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Login.vue'
import Index from '../views/Index/Index.vue'
import Detail from '../views/Detail/Detail.vue'
import Create from '../views/Create/Create.vue'
import Edit from '../views/Edit/Edit.vue'
import Register from '../views/Register/Register.vue'
import User from '../views/User/User.vue'
import My from '../views/My/My.vue'

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
