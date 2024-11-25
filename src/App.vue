<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
const isMaintainWebsite = ref(false)
</script>

<template>
  <div class="w-screen h-screen">
    <!-- site en maintenance -->
    <div class="w-full h-full bg-[rgb(25,25,25)] text-white flex flex-col justify-center items-center" v-if="isMaintainWebsite">
      <img class="max-h-[90%] max-w-[90%]" src="/image/maintenance-r.png" alt="">
      <p class="font-xl text-xl mt-3 p-3">Site en maintenance</p>
    </div>

    <RouterView v-else />
  </div>
</template>

<style></style>
