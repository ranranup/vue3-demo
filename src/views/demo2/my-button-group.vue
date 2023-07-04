<template>
  <div class="my-button-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, computed } from 'vue';
import { type IType } from '@/interface';
import { myButtonGroupKey } from '@/config/injection-keys';

const props = defineProps<{ type?: IType }>();
const type = computed(() => props.type || 'primary');
provide(myButtonGroupKey, { type: type.value });
</script>
<style scoped lang="scss">
.my-button-group {
  width: fit-content;
  margin: 10px;
  padding: 10px;
  border: 1px solid #e5e5e5;
  background: #f2f4f7;
}
</style>
