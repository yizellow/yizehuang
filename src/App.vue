<script setup>
import { ref, onMounted } from "vue";
import Loading from "@/components/Loading.vue";
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";

// 定義 Loading 狀態
const isLoading = ref(true);

// 等待圖片與影片加載完成
const waitForResourcesToLoad = async () => {
  const images = Array.from(document.querySelectorAll("img"));
  const videos = Array.from(document.querySelectorAll("video"));

  // 創建圖片與影片的 Promise 陣列
  const loadPromises = [
    ...images.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) resolve(); // 已經加載的圖片直接解決
          else img.onload = resolve; // 加載完成後解決
        })
    ),
    ...videos.map(
      (video) =>
        new Promise((resolve) => {
          if (video.readyState >= 3) resolve(); // 已經準備好的影片直接解決
          else video.onloadeddata = resolve; // 加載完成後解決
        })
    ),
  ];

  // 等待所有資源 Promise 完成
  await Promise.all(loadPromises);
};

// 在組件掛載後觸發資源加載檢查
onMounted(async () => {
  await waitForResourcesToLoad(); // 等待資源加載
  isLoading.value = false; // 加載完成後隱藏 Loading
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
