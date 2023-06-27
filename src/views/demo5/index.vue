<script setup lang="ts">
import { useMouse } from '@/hooks/mouse';
import { useFetch } from '@/hooks/fetch';
const { x, y } = useMouse();
const { data, msg, success } = useFetch('/rs/WorkManage/getWorkFrom');
console.log(data, msg);
console.log(success);
</script>

<template>
  <div>Mouse position is at: {{ x }}, {{ y }}</div>
  <div></div>
</template>
