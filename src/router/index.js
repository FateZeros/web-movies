import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Movie from '@/views/Movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Movie
    }
  ]
})
