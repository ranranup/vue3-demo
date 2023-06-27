<template>
  <AddTodo @add="handleAdd" />
  <ul>
    <TodoItem
      v-for="(el, $index) in arr"
      :key="el.name"
      :data="el"
      @complete="handleComplete(el)"
      @del="handleDel($index)"
    />
  </ul>
  <div class="memo">待完成事项数量：{{ count }}</div>
</template>
<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue';
import AddTodo from './add-todo.vue';
import TodoItem from './todo-item.vue';
import type { IItem } from '../../interface';
const sessionStorageArr = JSON.parse(sessionStorage.getItem('arr') as string) || [];
let arr: IItem[] = reactive(sessionStorageArr || []);

const handleAdd = (val: string) => {
  arr.push({ name: val, status: 0 });
};
const handleComplete = (el: IItem) => {
  el.status = 1;
};
const handleDel = (index: number) => {
  arr.splice(index, 1);
};
let count = ref(0);

// watch(arr, () => {
//   sessionStorage.setItem('arr', JSON.stringify(arr));
//   count.value = arr.filter((el) => el.status === 0).length;
// });
watchEffect(() => {
  sessionStorage.setItem('arr', JSON.stringify(arr));
  count.value = arr.filter((el) => el.status === 0).length;
});
</script>

<style scoped></style>
