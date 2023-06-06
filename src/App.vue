<template>
  <div>
    <my-button-group type="text">
      <my-button>测试1</my-button>
      <my-button>测试2</my-button>
      <my-button>测试3</my-button>
    </my-button-group>
    <my-button-group type="primary">
      <my-button>测试1</my-button>
      <my-button>测试2</my-button>
      <my-button type="danger">测试3</my-button>
    </my-button-group>
    <my-button-group>
      <my-button>测试1</my-button>
      <my-button>测试2</my-button>
      <my-button>测试3</my-button>
    </my-button-group>
  </div>
</template>
<script setup lang="ts">
import MyButtonGroup from '@/views/demo2/my-button-group.vue';
import MyButton from '@/views/demo2/my-button.vue';
</script>

<style scoped></style>
