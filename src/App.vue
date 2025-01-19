<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Loading from "@/components/Loading.vue";
import Navbar from "@/components/Navbar.vue";
import NavbarMobile from "@/components/NavbarMobile.vue";

import { RouterView } from "vue-router";
import { useMediaQuery } from "@vueuse/core";
// 定義 Loading 狀態
const isLoading = ref(true);
const isComputer = useMediaQuery("(min-width: 481px)");
const isMobile = useMediaQuery("(max-width: 480px)");
onMounted(() => {
  window.addEventListener("load", () => {
    isLoading.value = false; // 當頁面加載完成時，關閉 Loading 畫面
  });
});
</script>

<template>
  <!-- Loading 組件 -->
  <div
    v-if="isLoading"
    class="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center bg-white opacity-100 transition-opacity duration-500"
    id="preloader"
  >
    <Loading />
  </div>
  <!--Login 組件 -->


  <!-- 主頁內容 -->

  <div v-if="isComputer">
    <Navbar />
  </div>
  <div v-if="isMobile"><NavbarMobile /></div>
  <main>
    <RouterView />
  </main>
</template>

<style>
p {
  user-select: text;
}
</style>
