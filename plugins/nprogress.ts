import NProgress from 'nprogress';
import '../assets/css/nprogress.css';

export default defineNuxtPlugin((nuxtApp) => {
  // 配置 NProgress
  NProgress.configure({ 
    easing: 'ease',
    speed: 500,
    showSpinner: false,
    trickleSpeed: 200,
    minimum: 0.3
  });

  nuxtApp.hook('page:start', () => {
    NProgress.start();
  });

  nuxtApp.hook('page:finish', () => {
    NProgress.done();
  });
}); 