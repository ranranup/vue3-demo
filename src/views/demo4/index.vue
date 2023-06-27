<template>
  <p>
    <span v-for="menu in menuList">
      <router-link :to="menu.value">{{ menu.name }}</router-link>
    </span>
  </p>
  <router-view></router-view>
</template>
<script setup lang="ts">
type TMenu = {
  name: string;
  value: string;
  code?: string;
};
import { reactive } from 'vue';
const menuList = reactive<TMenu[]>([
  { name: '主页', value: '/' },
  { name: '列表页', value: '/todo-list' },
  { name: '按钮组', value: '/button-group' },
  { name: '测试组', value: '/test' }
]);
</script>

<style scoped>
span {
  margin-right: 10px;
}
</style>
