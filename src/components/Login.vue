<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";

const image = [
  "https://cdnb.artstation.com/p/assets/images/images/082/332/429/large/yize-huang-img-0912.jpg?1732700966",
  "https://cdna.artstation.com/p/assets/images/images/082/332/328/large/yize-huang-img-0937.jpg?1732700755",
  "https://cdna.artstation.com/p/assets/images/images/082/332/470/large/yize-huang-2024-11-27-5-48-00.jpg?1732701058",
  "https://cdnb.artstation.com/p/assets/images/images/082/332/475/large/yize-huang-2024-11-27-5-47-42.jpg?1732701073",
  "https://cdna.artstation.com/p/assets/images/images/082/332/324/large/yize-huang-img-0911.jpg?1732700747",
];
let currentIndex = ref(0);

let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % image.length;
  }, 6000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <main
    class="w-[100vw] h-full bg-green-400/90 fixed z-50 flex items-center justify-center"
  >
    <div class="w-1/2 h-3/5 flex flex-row bg-white relative">
      <section class="w-1/2 h-full absolute left-0 overflow-hidden">
        <transition name="blur-fade" mode="default">
          <img
            :key="currentIndex"
            :src="image[currentIndex]"
            class="w-full h-full object-cover object-center"
          />
        </transition>
      </section>
      <section class="w-1/2 h-full absolute right-0 bg-white flex-col block">
        <div class="max-h-1/4 grid">
          <Icon
            icon="material-symbols:close-rounded"
            class="w-[2vw] h-auto justify-self-end flex-row items-self-start"
            @click="canceledInfo"
          />
          <p
            class="text-2xl font-black justify-self-center items-self-start tracking-widest"
          >
            Log In
          </p>
        </div>
        <div
          class="flex flex-col w-full h-auto items-center justify-center my-[3vh]"
        >
          <input
            placeholder="Email"
            class="border-2 w-3/4 h-[4vh] border-gray-200 m-[1vh] p-1 outline-[#8A2BE2] text-green-500 tracking-widest"
          />
          <input
            placeholder="******"
            class="border-2 w-3/4 h-[4vh] border-gray-200 m-[1vh] p-1 outline-[#8A2BE2] text-green-500 tracking-widest"
          />
        </div>
        <div
          class="flex flex-col w-full h-1/5 items-center justify-center mx-auto"
        >
          <span class="w-full h-1/2 flex justify-center items-start text-xs">
            <p class="">The account is already registered. Please log in.</p>
          </span>
          <span class="w-full h-1/2 flex flex-row items-center justify-center">
            <button
              class="w-4/12 h-full rounded-lg bg-violet-500 text-white tracking-widest mx-1 text-m poppins-medium mr-[3vh]"
            >
              Sign up
            </button>
            <button
              class="w-4/12 h-full rounded-lg bg-red-500 text-white tracking-widest mx-1 text-m poppins-medium"
            >
              Log In
            </button>
          </span>
        </div>
        <!-- <div
          class="w-9/12 mx-auto my-[3vh] flex justify-center border-t-[1px] border-gray-400 bg-blue-400"
        >
          <p
            class="text-xs relative block w-auto text-center bottom-4 my-[3vh] mx-[3vh] bg-white"
          >
            ssssss
          </p>
        </div> -->

        <div class="w-3/4 h-1/5 bg-white p-[3vh] flex justify-between mx-auto">
          <Icon
            icon="logos:google-icon"
            class="w-[2.5vw] h-auto"
            @click="canceledInfo"
          />
          <Icon
            icon="logos:apple"
            class="w-[2.5vw] h-auto opacity-75"
            @click="canceledInfo"
            op
          />
          <Icon
            icon="logos:facebook"
            class="w-[2.5vw] h-auto"
            @click="canceledInfo"
          />
        </div>
      </section>
    </div>
  </main>
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
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform-origin: center;
  transform: scale(1); /* 縮小回原本尺寸 */
  position: absolute; /* 疊層定位，避免切換空白 */
  top: 0;
  left: 0;
}

/* 父容器，確保圖片區域沒有空白 */
section {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden; /* 防止圖片溢出 */
}
</style>
