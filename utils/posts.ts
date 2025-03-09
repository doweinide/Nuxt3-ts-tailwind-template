export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    id: 1,
    title: '开始使用 Nuxt 3',
    excerpt: '了解如何使用 Nuxt 3 构建现代化的 Web 应用程序',
    content: `Nuxt 3 是一个强大的 Vue.js 框架，它提供了许多开箱即用的功能。

在这篇文章中，我们将探讨：
1. Nuxt 3 的核心概念
2. 项目结构和最佳实践
3. 服务端渲染和静态生成
4. 数据获取和状态管理
5. 部署和优化技巧

让我们开始学习吧！`,
    image: 'https://picsum.photos/800/400?random=1',
    date: '2024-03-09',
    tags: ['Nuxt', 'Vue', '教程']
  },
  {
    id: 2,
    title: 'Tailwind CSS 使用技巧',
    excerpt: '探索 Tailwind CSS 的高级用法和最佳实践',
    content: `Tailwind CSS 是一个实用优先的 CSS 框架，它可以帮助我们快速构建现代化的用户界面。

本文将介绍：
1. Tailwind CSS 的核心理念
2. 常用类名和组合
3. 响应式设计技巧
4. 自定义配置和扩展
5. 性能优化建议

掌握这些技巧，让你的开发更高效！`,
    image: 'https://picsum.photos/800/400?random=2',
    date: '2024-03-08',
    tags: ['CSS', 'Tailwind', '设计']
  },
  {
    id: 3,
    title: 'Vue 3 组合式 API',
    excerpt: '学习 Vue 3 组合式 API 的核心概念',
    content: `Vue 3 的组合式 API 是一个革命性的特性，它改变了我们组织和复用组件逻辑的方式。

主要内容包括：
1. 组合式 API 的基础
2. 响应式系统的工作原理
3. 生命周期钩子的使用
4. 逻辑复用和抽象
5. 实际应用案例

通过这篇文章，你将深入理解组合式 API！`,
    image: 'https://picsum.photos/800/400?random=3',
    date: '2024-03-07',
    tags: ['Vue', 'JavaScript', '前端']
  }
]; 