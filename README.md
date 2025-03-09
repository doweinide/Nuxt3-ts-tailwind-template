# 🚀 Modern Blog Template

一个现代化的个人博客模板，基于 Nuxt 3 + Element Plus + Tailwind CSS 构建。完美结合了 Nuxt 3 的强大功能、Element Plus 的优雅组件和 Tailwind CSS 的灵活样式。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Nuxt](https://img.shields.io/badge/Nuxt-3.x-00DC82.svg)
![Element Plus](https://img.shields.io/badge/Element%20Plus-latest-409EFF.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC.svg)

## ✨ 特性
- 🎯 **Nuxt 3**：基于 Vue 3 的强大框架，支持 SSR/SSG
- 🎨 **Element Plus**：优雅的 UI 组件库，可自定义主题
- 🌈 **Tailwind CSS**：原子化 CSS 框架，快速构建界面
- 🚥 **TypeScript**：提供完整的类型支持
- 📦 **自动导入**：组件和工具函数自动导入
- 🔥 **HMR**：开发时的模块热重载
- 🔒 **安全性**：内置安全最佳实践

## 🛠️ 技术栈
| 类别         | 技术                 |
| ------------ | -------------------- |
| 框架         | Nuxt 3               |
| UI 组件      | Element Plus         |
| 样式方案     | Tailwind CSS         |
| 状态管理     | Pinia                |
| HTTP 客户端  | Axios                |
| 开发语言     | TypeScript           |
| 包管理器     | npm                  |

## 🚀 快速开始

### 环境要求
- Node.js 16.x 或更高版本
- npm 7.x 或更高版本

### 安装
```bash
# 克隆项目
git clone https://github.com/yourusername/modern-blog-template.git

# 进入项目目录
cd modern-blog-template

# 安装依赖
npm install
```

### 开发
```bash
# 启动开发服务器
npm run dev

# 生产环境构建
npm run build

# 预览生产构建
npm run preview
```

## 📂 项目结构
```
modern-blog-template/
├── assets/                # 静态资源
│   ├── css/               # 全局样式
│   └── styles/            # Element Plus 主题配置
├── components/            # Vue 组件
├── layouts/               # 布局组件
├── pages/                 # 页面
├── public/                # 公共文件
├── stores/                # Pinia 状态管理
├── utils/                 # 工具函数
├── .env                   # 环境变量
├── nuxt.config.ts         # Nuxt 配置
├── tailwind.config.js     # Tailwind 配置
└── package.json           # 项目配置
```

## 🎨 自定义主题

### Element Plus 主题定制
在 `assets/styles/element/index.scss` 中配置 Element Plus 主题变量：
```scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': #4491df,
    ),
    // 其他颜色配置...
  )
);
```

### Tailwind CSS 配置
在 `tailwind.config.js` 中扩展主题配置：
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4491df',
        // 其他颜色...
      }
    }
  }
}
```

## 📝 开发指南

### 创建新页面
1. 在 `pages` 目录下创建 Vue 文件。
2. 使用 `definePageMeta` 配置页面元数据。
3. 选择合适的布局组件。

示例：
```vue
<template>
  <div>
    <h1>新页面</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
```

### 使用自定义布局
1. 在 `layouts` 目录下创建布局文件。
2. 在页面中通过 `definePageMeta` 使用布局。

### 状态管理
使用 Pinia 进行状态管理：
```ts
// stores/blog.ts
export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: []
  }),
  actions: {
    async fetchPosts() {
      // 获取博客文章
    }
  }
})
```

## 🤝 贡献
欢迎提交 Issue 和 Pull Request！

## 📄 许可证
[MIT License](LICENSE)

## 🙏 鸣谢
- [Nuxt](https://nuxt.com/)
- [Element Plus](https://element-plus.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

如果这个项目对您有帮助，请给个 Star ⭐️！ 