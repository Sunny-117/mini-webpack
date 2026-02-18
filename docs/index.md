---
layout: home
hero:
  name: rsdown
  text: 基于 Rust 和 SWC 的高性能代码转换器
  tagline: 将 JavaScript/TypeScript 代码中的 const 和 let 声明转换为 var
  image:
    src: /logo.svg
    alt: rsdown logo
  actions:
    - theme: brand
      text: 开始使用
      link: /#安装
    - theme: alt
      text: GitHub
      link: https://github.com/sunny-117/rsdown

features:
  - icon: 🚀
    title: 高性能
    details: 基于 Rust 和 SWC 构建，提供极致的性能体验
  - icon: 🔄
    title: 简单易用
    details: 将 const 和 let 声明转换为 var，API 简洁明了
  - icon: 📦
    title: 开箱即用
    details: 支持 TypeScript，零配置即可使用
---

# rsdown

一个高性能的 JavaScript/TypeScript 代码转换器，基于 Rust 和 SWC。

## 安装

```bash
npm install rsdown
# 或
pnpm add rsdown
# 或
yarn add rsdown
```

## 用法

```js
import { transformToVar } from 'rsdown'

const code = `
const x = 1;
let y = 2;
`

const result = transformToVar(code)
console.log(result)
// 输出:
// var x = 1;
// var y = 2;
```
