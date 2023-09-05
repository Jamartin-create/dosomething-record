<script setup lang="ts">
import { ref } from "vue";
import axios, { AxiosResponse } from "axios";

const data = ref<any[]>([]);
axios.get("/mock/test@method").then((res: AxiosResponse) => {
  data.value = res.data.data;
});
axios.get("/mock/test").then((res) => console.log(res));
</script>

<template>
  <div class="wrp">
    <template v-for="item in data" :key="item.id">
      <div class="module">
        <template
          v-for="attr in Object.keys(item).filter((k) => k != 'id')"
          :key="attr"
        >
          <div class="attr">
            {{ item[attr] }}
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped>
.wrp {
  display: flex;
  flex-direction: column;
}
.module {
  display: flex;
  gap: 20px;
}
</style>
