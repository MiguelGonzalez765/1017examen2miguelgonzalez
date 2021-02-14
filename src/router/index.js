import Vue from 'vue';
import VueRouter from 'vue-router';

import Accueil from '../views/Accueil.vue';
import Contact from '../views/Contact.vue';
import Projet from '../views/Projet.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Accueil',
    component: Accueil
  },
  
  {
    path: '/Projet',
    name: 'Projet',
    component: Projet
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router