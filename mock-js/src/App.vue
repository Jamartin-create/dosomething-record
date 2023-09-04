<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const data = ref<any>()
axios.get('/mock/test').then((res) => console.log(res))
</script>

<template>
  <div>
    <div>测试 Mock</div>
    <div>{{ data }}</div>
  </div>
</template>

<style scoped></style>
