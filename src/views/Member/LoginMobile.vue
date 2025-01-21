<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import { useConfirmDialog } from "@vueuse/core";

const emit = defineEmits(["close"]);
const closeLog = () => {
  emit("close");
};
</script>

<template>
  <div class="w-full h-full flex flex-col bg-purple-500/80 p-[3vh]">
    <section class="w-full h-4/6 bg-white flex-col block overflow-hidden">
      <div class="max-h-1/4 grid">
        <Icon
          icon="material-symbols:close-rounded"
          color="gray"
          class="w-[7vw] h-auto m-[0.8vh] justify-self-end flex-row items-self-start icon"
          @click="closeLog"
        />
        <p
          class="text-2xl text-gray-500 font-black justify-self-center items-self-start tracking-widest"
        >
          Log In
        </p>
      </div>
      <div
        class="flex flex-col w-full h-auto items-center justify-center my-[3vh]"
      >
        <input
          placeholder="Email"
          class="border-2 w-3/4 h-[4vh] border-gray-200 m-[1vh] p-1 outline-violet-500 text-green-500 tracking-widest"
        />
        <input
          placeholder="******"
          type="password"
          class="border-2 w-3/4 h-[4vh] border-gray-200 m-[1vh] p-1 outline-violet-500 text-green-500 tracking-widest"
        />
      </div>
      <div
        class="flex flex-col w-full h-1/6 items-center justify-center mx-auto"
      >
        <span class="w-full h-1/2 flex justify-center items-start text-xs">
          <p
            class="text-green-500 underline underline-offset-2 decoration-red-500"
          >
            The account is already registered. Please log in.
          </p>
        </span>
        <span class="w-full h-1/2 flex flex-row items-center justify-center">
          <button
            class="w-4/12 h-4/5 rounded-lg bg-violet-500 text-white tracking-widest mx-1 text-m poppins-medium mr-[3vh] icon"
          >
            Sign up
          </button>
          <button
            class="w-4/12 h-4/5 rounded-lg bg-red-500 text-white tracking-widest mx-1 text-m poppins-medium icon"
          >
            Log In
          </button>
        </span>
      </div>

      <div
        class="w-9/12 h-[6vh] mt-[3vh] mx-auto flex items-center justify-center border-gray-00 relative"
      >
        <div class="w-full border-t-[1px] border-gray-300 absolute"></div>
        <p
          class="text-xs block w-auto text-center px-[1vh] text-gray-400 bg-white absolute"
        >
          or sign up with
        </p>
      </div>

      <div
        class="w-3/4 h-auto p-[1vh] flex items-start justify-between mx-auto"
      >
        <Icon
          icon="logos:google-icon"
          class="w-[10vw] h-auto translate-y-[1vh] icon"
        />
        <Icon icon="logos:apple" class="w-[10vw] h-auto opacity-75 icon" />
        <Icon
          icon="logos:facebook"
          class="w-[10vw] h-auto translate-y-[1vh] icon"
        />
      </div>
    </section>
  </div>
</template>
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
/* 過渡效果，控制模糊與縮放 */
.blur-fade-enter-active,
.blur-fade-leave-active {
  transition: filter 1s ease, transform 1s ease;
}

/* 下一張圖片進入時的初始狀態（模糊 + 放大） */
.blur-fade-enter-from {
  filter: blur(8px);
  transform: scale(1.1); /* 微微放大 */
}

/* 上一張圖片離開時的最終狀態（模糊 + 放大） */
.blur-fade-leave-to {
  filter: blur(8px);
  transform: scale(1.1); /* 微微放大 */
}

/* 確保圖片進入後的狀態 */

/* 父容器，確保圖片區域沒有空白 */

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
