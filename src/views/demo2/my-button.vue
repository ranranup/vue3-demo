<template>
  <button :class="['my-button', btnClass]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import { type IType } from '@/interface';
import { myButtonGroupKey } from '@/config/injection-keys';
const props = defineProps<{ type?: IType }>();
const injectType = inject(myButtonGroupKey);
const type = computed(() => props.type || injectType?.type || 'primary');
const btnClass = computed(() => `my-button-${type.value}`);
</script>
<style scoped lang="scss">
.my-button {
  min-height: 28px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  &:not(:last-child) {
    margin-right: 5px;
  }
  &-primary {
    background-color: #377cff;
    color: #fff;
  }
  &-text {
    background-color: #fff;
    color: #444;
  }
  &-danger {
    background-color: #ff5353;
    color: #fff;
  }
}
</style>
