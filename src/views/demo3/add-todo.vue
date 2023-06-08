<template>
  <div class="add-todo">
    <input v-model="inputVal" type="text" class="add-todo--input" />
    <button @click="add">add</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const inputVal = ref('');

const emits = defineEmits(['add']);
const add = () => {
  inputVal.value && emits('add', inputVal.value);
};
</script>

<style lang="scss" scoped>
.add-todo {
  padding-left: 20px;
  &--input {
    margin-right: 10px;
  }
  button {
    cursor: pointer;
  }
}
</style>
