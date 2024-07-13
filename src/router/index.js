// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import ForgetPassword from '../views/ForgetPassword.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/forget', component: ForgetPassword },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
