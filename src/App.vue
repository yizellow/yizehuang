<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Loading from "@/components/Loading.vue";
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";

// 定義 Loading 狀態
const isLoading = ref(false);

// 取得路由實例
const router = useRouter();

// 監聽路由切換事件
router.beforeEach(() => {
  isLoading.value = true; // 切換前啟用 Loading
});
router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false; // 結束後停用 Loading
  }, 500); // 可調整延遲時間
});
</script>

<template>
  <!-- Loading 組件 -->
  <div
    v-if="isLoading"
    class="loadingContainer fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center bg-white"
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
/* 可選：設置 Loading 樣式 */
</style>
