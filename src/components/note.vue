<template>
  <div
   
    class="w-[400px] h-[auto] bg-purple-400/80 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <Icon
      icon="material-symbols:close-rounded"
      color="gray"
      class="w-[40px] m-[1vh] h-auto justify-self-end flex-row items-self-start icon"
      @click="closeNote"
    />
    <p
      class="text-2xl text-gray-500 poppins-medium font-black justify-self-center items-self-start tracking-widest"
    >
      {{ title }}
    </p>
    <p
      class="text-center poppins-medium text-red-500 text-2xl mb-[40px] mt-[20px]"
    >
      {{ text }}
    </p>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useMediaQuery } from "@vueuse/core";

defineProps(["title", "text"]);
</script>
<style scoped>
.poppins-medium {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}
.markazi-text {
  font-family: "Markazi Text", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.icon {
  transition: transform 0.3s ease; /* 設定平滑過渡效果 */
  cursor: pointer;
}

.icon:hover {
  transform: scale(1.1); /* 當游標在上面時放大 */
}

.icon:active {
  transform: scale(1); /* 點擊時回到原始大小，視需求可調整 */
}
</style>
