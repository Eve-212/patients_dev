import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/views/Main'
import LoginPage from '@/views/Login'
import PTLists from '@/components/PTLists'
import EditNote from '@/components/note_components/EditNote'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'ptlists',
          component: PTLists
        },
        {
          path: '/edit',
          name: 'edit',
          component: EditNote
        }
      ]
    }
  ]
})
