/// <reference types="vite/client" />
declare module '*.vue' {

  import type { DefineComponent } from 'vue';

  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent;

} 作者：迷斯特航 https://www.bilibili.com/read/cv19000250?from=articleDetail 出处：bilibili