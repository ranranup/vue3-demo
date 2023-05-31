<template>
  <div>
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
  </div>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue';
import AddTodo from '@/views/add-todo.vue';
import TodoItem from '@/views/todo-item.vue';
import type { IItem } from './interface';

const arr: IItem[] = reactive([]);

const count = computed(() => arr.filter((el) => el.status === 0).length);

const handleAdd = (val: string) => {
  arr.push({ name: val, status: 0 });
};

const handleComplete = (el: IItem) => {
  el.status = 1;
};
const handleDel = (index: number) => {
  arr.splice(index, 1);
};
</script>

<style scoped></style>
