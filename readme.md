# Mika Quick Navigation

一个快速导航工具页面，集成了各种AI工具、开发工具、测试工具等资源。

## 项目技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (图标库)

## 项目结构

```
mika-quick-navpage/
├── index.html           # HTML入口文件
├── src/
│   ├── index.tsx        # React应用入口
│   ├── App.tsx          # 应用主组件
│   ├── index.css        # 全局样式
│   └── App.css          # App组件样式
├── mika-nav-collection.tsx  # 导航组件
├── package.json         # 项目依赖和脚本
├── tsconfig.json        # TypeScript配置
├── tsconfig.node.json   # Vite相关TypeScript配置
├── vite.config.ts       # Vite配置
├── tailwind.config.js   # Tailwind CSS配置
└── postcss.config.cjs   # PostCSS配置
```

## 安装依赖

```bash
npm install
```

## 开发模式

```bash
npm run dev
```

## 构建生产版本

```bash
npm run build
```

## 预览生产版本

```bash
npm run preview
```
