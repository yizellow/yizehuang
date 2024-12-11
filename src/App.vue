<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Loading from "@/components/Loading.vue";
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";

// 定義 Loading 狀態
const isLoading = ref(true);

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

  <!-- 主頁內容 -->
  <div v-else>
    <Navbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* 可選：設置 Loading 的額外樣式 */
</style>
