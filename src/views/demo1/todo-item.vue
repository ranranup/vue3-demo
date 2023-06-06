<template>
  <li>
    <span :style="{ textDecoration: isComplete ? 'line-through' : '' }">{{ props.data.name }}</span>
    <span class="complete" @click="complete">完成</span>
    <span class="del" @click="del">删除</span>
  </li>
</template>
<script setup lang="ts">
import type { IItem } from '@/interface';
import { computed } from 'vue';
// const props = defineProps<{ name: String; status: number }>();
const props = defineProps<{ data: IItem }>();

const isComplete = computed(() => props.data.status === 1);

const emits = defineEmits(['complete', 'del']);
const complete = () => {
  emits('complete');
};
const del = () => {
  emits('del');
};
</script>

<style scoped>
.complete {
  color: green;
  cursor: pointer;
  margin: 0 5px;
}
.del {
  color: red;
  cursor: pointer;
}
</style>
