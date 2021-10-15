import Vue from 'vue'
import Router from 'vue-router'
import Register from '../view/Register.vue'
import Profile from '../view/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'register',
      component: Register
    },
    {
      path:'/profile/',
      name:'profile',
      component: Profile
    }
  ]
}
) 

