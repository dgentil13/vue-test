import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import Book from './components/Book';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/book/:id',
      name: 'book',
      component: Book,
    },
  ],
});
