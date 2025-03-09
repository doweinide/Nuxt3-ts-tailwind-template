// 全局日志中间件
export default defineNuxtRouteMiddleware((to, from) => {
  const event = useRequestEvent();
  const isServer = !!event;

  if (!isServer) {
    console.log('【客户端路由】', {
      时间: new Date().toLocaleString(),
      目标路径: to.path,
      来源路径: from.path,
      参数: to.params,
      查询: to.query
    });
  } else {
    console.log('【服务器端路由】', {
      时间: new Date().toLocaleString(),
      目标路径: to.path,
      来源路径: from.path,
      参数: to.params,
      查询: to.query
    });
  }
}); 