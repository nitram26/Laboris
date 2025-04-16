import { createRouter, createWebHistory } from 'vue-router';  
import Home from '../views/HomeView.vue'; // Asegúrate de tener este componente  
import HomeFront from '../views/front/HomeFront.vue';
import HtmlView from '../views/front/HtmlView.vue';
import VueView from '../views/front/VueView.vue';
import IndexOffice from '../views/Office/IndexOffice.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/homeFront',
    name: 'HomeFront',
    component: HomeFront
  },
  {
    path: '/htmlView',
    name: 'HtmlView',
    component: HtmlView
  },
  {
    path: '/vueView',
    name: 'VueView',
    component: VueView
  },
  {
    path: '/indexOffice',
    name: 'IndexOffice',
    component: IndexOffice
  },
  // {
  //   path: '/',
  //   name: '',
  //   component: 
  // },
  // {
  //   path: '/',
  //   name: '',
  //   component: 
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;