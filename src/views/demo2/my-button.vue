<template>
  <button :class="['my-button', btnClass]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import { myButtonGroupKey } from '@/config/keys';
const props = defineProps<{ type?: 'primary' | 'text' | 'danger' }>();
const injectType = inject(myButtonGroupKey);
const type = computed(() => props.type || injectType?.type || 'primary');
const btnClass = computed(() => {
  return { primary: 'my-button-primary', text: 'my-button-text', danger: 'my-button-danger' }[
    type.value
  ];
});
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
