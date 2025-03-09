import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';

export default defineNuxtRouteMiddleware((to) => {
  const token = localStorage.getItem('token');
  
  // 需要认证的路由
  const authRoutes = ['/admin'];
  
  if (authRoutes.some(route => to.path.startsWith(route)) && !token) {
    return navigateTo('/login');
  }
}); 