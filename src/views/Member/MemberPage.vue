<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
import { useMediaQuery } from "@vueuse/core";

const title = "";
const note = ref("");
const noteTag = ref(false);
const message = ref("");

const closeNote = () => {
  noteTag.value = false;
};
const submitMsg = () => {
  if (message.value.trim() === "") {
    note.value = "Please enter a message before submitting!";
    noteTag.value = true;
  } else {
    note.value = "Successfully submitted!";

    message.value = "";
    noteTag.value = true;
  }
};
const isComputer = useMediaQuery("(min-width: 481px)");
const isMobile = useMediaQuery("(max-width: 480px)");
</script>
<template>
  <div v-if="isComputer">
    <main class="w-[100vw] h-[93vh] mt-[7vh]">
      <div
        v-if="noteTag"
        class="w-[25vw] h-[30vh] bg-green-400/80 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fon"
      >
        <Icon
          icon="material-symbols:close-rounded"
          color="gray"
          class="w-[2.5vw] m-[2vh] h-auto justify-self-end flex-row items-self-start icon"
          @click="closeNote"
        />
        <p
          class="text-2xl text-gray-500 poppins-medium font-black justify-self-center items-self-start tracking-widest"
        >
          {{ title }}
        </p>
        <p class="text-center poppins-medium text-purple-500 text-2xl mt-[6vh]">
          {{ note }}
        </p>
      </div>
      <div class="w-full h-full relative">
        <img
          src="https://cdna.artstation.com/p/assets/images/images/082/332/470/large/yize-huang-2024-11-27-5-48-00.jpg?1732701058"
          class="w-full h-full object-cover object-top absolute z-1"
        />
        <div
          class="w-[30vw] h-[60vh] backdrop-blur-sm bg-white/70 border-green-300 border-2 flex flex-col justify-center items-center absolute z-2 top-[15vh] p-[3vh] left-[18vh] shadow-lg rounded-sm"
        >
          <p
            class="text-3xl m-[3vh] navtext text-center text-gray-500 underline underline-offset-4 decoration-purple-300"
          >
            Leave me a message!
          </p>
          <textarea
            v-model="message"
            rows="4"
            class="w-full h-1/2 bg-gray-100/60 border-gray-400 border-2 tracking-widest text-purple-400 outline-0 p-[2vh] text-xl resize-none"
            placeholder="Write your message here..."
          ></textarea>
          <button
            @click="submitMsg"
            class="icon w-3/12 h-4/12 text-lg mt-[6vh] border-2 border-purple-300 cursor-pointer navtext text-center text-gray-600 boder-2"
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  </div>
  <div v-if="isMobile">
    <main class="w-[100vw] h-[94vh] mt-[6vh]">
      <div
        v-if="noteTag"
        class="w-[60vw] h-auto bg-green-400/80 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Icon
          icon="material-symbols:close-rounded"
          color="gray"
          class="w-[6vw] m-[1vh] h-auto justify-self-end flex-row items-self-start icon"
          @click="closeNote"
        />
        <p
          class="text-xl text-gray-500 poppins-medium font-black justify-self-center items-self-start tracking-widest"
        >
          {{ title }}
        </p>
        <p
          class="text-center poppins-medium text-purple-500 text-md mb-[3vh] mx-[1vh]"
        >
          {{ note }}
        </p>
      </div>
      <div
        class="w-full h-full relative flex flex-col items-center justify-center"
      >
        <img
          src="https://cdna.artstation.com/p/assets/images/images/082/332/470/large/yize-huang-2024-11-27-5-48-00.jpg?1732701058"
          class="w-full h-full object-cover object-top absolute z-1"
        />
        <div
          class="w-[82vw] h-[60vh] backdrop-blur-sm bg-white/70 border-green-300 border-2 flex flex-col justify-center items-center absolute z-2 shadow-lg rounded-sm p-[3vh]"
        >
          <p
            class="text-xl m-[3vh] navtext text-center text-gray-500 underline underline-offset-4 decoration-purple-300"
          >
            Leave me a message!
          </p>
          <textarea
            v-model="message"
            rows="4"
            class="w-full h-1/2 bg-gray-100/60 border-gray-400 border-2 tracking-widest text-purple-400 outline-0 p-[2vh] text-sm resize-none"
            placeholder="Write your message here..."
          ></textarea>
          <button
            @click="submitMsg"
            class="icon w-3/12 h-4/12 text-base mt-[6vh] border-2 border-purple-300 cursor-pointer navtext text-center text-gray-600 boder-2"
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Geo:ital@0;1&family=Roboto&display=swap");

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
