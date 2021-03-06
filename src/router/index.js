import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Vuex from '@/components/Vuex'
import State from '@/components/VuexState'
import Counter from '@/components/Counter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/vuex',
      name: 'Vuex',
      component: Vuex
    }, {
      path: '/state',
      name: 'state',
      component: State
    }, {
      path: '/counter',
      name: 'counter',
      component: Counter
    }
  ]
})
