# 🎬 GTAVI Landing Page / GTAVI 落地页

[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green?style=flat-square&logo=gsap)](https://greensock.com/gsap/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📖 项目简介 / Project Description

**English**: A modern, interactive landing page for GTAVI built with Next.js 15 and GSAP animations. Features smooth scroll-triggered animations, video sections, and responsive design with cutting-edge web technologies.

**中文**: 基于 Next.js 15 和 GSAP 动画构建的现代化 GTAVI 交互式落地页。具有流畅的滚动触发动画、视频展示区域和响应式设计，采用前沿的 Web 技术栈。

---

## ✨ 主要特性 / Key Features

### 🎯 核心功能 / Core Features

- **🎬 视频展示 / Video Showcase**: 多个视频展示区域，支持自动播放和交互
- **🎨 高级动画 / Advanced Animations**: 使用 GSAP 实现流畅的滚动触发动画
- **📱 响应式设计 / Responsive Design**: 完美适配桌面端和移动端
- **⚡ 性能优化 / Performance Optimized**: 基于 Next.js 15 的 Turbopack 快速构建

### 🛠️ 技术特性 / Technical Features

- **🎭 滚动动画 / Scroll Animations**: 基于 ScrollTrigger 的视差滚动效果
- **🎪 遮罩动画 / Mask Animations**: 使用 CSS 遮罩实现独特的视觉过渡
- **📐 视口单位 / Viewport Units**: 使用 `h-dvh` 等现代 CSS 单位
- **🎨 现代 UI**: 采用 Tailwind CSS 4.0 构建美观界面

---

## 🚀 技术栈 / Tech Stack

| 技术 / Technology | 版本 / Version | 用途 / Purpose      |
| ----------------- | -------------- | ------------------- |
| **Next.js**       | 15.4.6         | React 全栈框架      |
| **React**         | 19.1.0         | 前端 UI 库          |
| **GSAP**          | 3.13.0         | 高级动画库          |
| **TypeScript**    | 5.0            | 类型安全            |
| **Tailwind CSS**  | 4.0            | 实用优先的 CSS 框架 |

---

## 📁 项目结构 / Project Structure

```
next-gtAVI-landing/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # 根布局组件
│   │   ├── page.tsx           # 主页面
│   │   └── globals.css        # 全局样式
│   ├── components/            # React 组件
│   │   ├── Hero.tsx          # 英雄区域
│   │   ├── Nav.tsx           # 导航栏
│   │   ├── FirstVideo.tsx    # 第一个视频区域
│   │   ├── Jason.tsx         # Jason 展示区域
│   │   ├── SecondVideo.tsx   # 第二个视频区域
│   │   ├── Lucia.tsx         # Lucia 展示区域
│   │   ├── PostCard.tsx      # 明信片区域
│   │   ├── Final.tsx         # 最终展示区域
│   │   ├── Outro.tsx         # 结尾区域
│   │   └── ComingSoon.tsx    # 即将推出组件
│   └── constants/            # 常量配置
├── public/                   # 静态资源
│   ├── images/              # 图片资源
│   ├── videos/              # 视频资源
│   └── fonts/               # 字体文件
└── package.json             # 项目配置
```

---

## 🛠️ 安装与运行 / Installation & Setup

### 前置要求 / Prerequisites

- Node.js 18+
- pnpm (推荐) / npm / yarn

### 安装依赖 / Install Dependencies

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 开发环境 / Development

```bash
# 启动开发服务器
pnpm dev

# 或使用 npm
npm run dev

# 或使用 yarn
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看项目

### 生产构建 / Production Build

```bash
# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

---

## 🎨 组件说明 / Components Overview

### 🎭 主要组件 / Main Components

- **Hero**: 英雄区域，包含品牌展示和主要动画效果
- **Nav**: 导航栏组件
- **FirstVideo/SecondVideo**: 视频展示区域
- **Jason/Lucia**: 人物展示区域
- **PostCard**: 明信片样式的信息展示
- **Final/Outro**: 结尾和总结区域

### 🎪 动画特性 / Animation Features

- **滚动触发动画**: 使用 GSAP ScrollTrigger 实现
- **遮罩动画**: CSS 遮罩实现独特的视觉过渡
- **视差效果**: 多层次的滚动视差动画
- **响应式动画**: 适配不同屏幕尺寸的动画效果

---

## 🔧 开发指南 / Development Guide

### 添加新组件 / Adding New Components

1. 在 `src/components/` 目录下创建新的 `.tsx` 文件
2. 使用 TypeScript 和 JSDoc 注释
3. 在 `src/app/page.tsx` 中导入并使用

### 动画开发 / Animation Development

```typescript
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

// 注册插件
gsap.registerPlugin(ScrollTrigger)

// 创建动画
const tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.element',
		start: 'top center',
		end: 'bottom center',
		scrub: true
	}
})
```

---

## 📱 浏览器支持 / Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 🤝 贡献指南 / Contributing

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📄 许可证 / License

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

---

## 📞 联系方式 / Contact

如有问题或建议，请通过以下方式联系：

- 📧 Email: [luotongzhou1996@gmail.com]
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/next-gtAVI-landing/issues)

---

<div align="center">

**Made with ❤️ using Next.js & GSAP**

**使用 Next.js & GSAP 精心制作**

</div>
