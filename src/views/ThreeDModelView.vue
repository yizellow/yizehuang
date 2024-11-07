<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import infoTag from "@/components/infoTag.vue";

const showIntro = ref(true);
const canceledIntro = () => {
  showIntro.value = false;
  showIntroTag.value = true;
};
const showIntroTag = ref(false);
const openIntro = () => {
  showIntroTag.value = false;
  showIntro.value = true;
};
</script>

<template>
  <div class="-mt-14">
    <section id="1" class="relative">
      <img
        class="w-full h-full object-cover cursor-pointer"
        src="https://cdnb.artstation.com/p/assets/images/images/052/116/789/large/yize-huang-plastic-wrap-protection-laocoon-and-his-sons.jpg?1658985491"
      />

      <infoTag />
    </section>
    <section
      id="2"
      class="pr-[100px] relative w-full h-[600px] overflow-hidden flex items-center justify-start bg-right bg-[#e5e4e1]"
      style="
        background-image: url('https://cdna.artstation.com/p/assets/images/images/052/282/404/large/yize-huang-sde.jpg?1659416576');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 80%;
      "
    >
      <img
        src="https://cdnb.artstation.com/p/assets/images/images/052/282/401/large/yize-huang-ft.jpg?1659416553"
        class="cursor-pointer w-1/4 m-10 drop-shadow-md opacity-90 hover:opacity-50"
      />
      <img
        src="https://cdna.artstation.com/p/assets/images/images/052/282/402/large/yize-huang-new-whole.jpg?1659416565"
        class="cursor-pointer w-1/4 drop-shadow-md opacity-90 hover:opacity-50 hover:scale-110 transition-transform duration-300"
      />
      <infoTag />
    </section>
    <section
      id="3"
      class="relative w-full h-screen"
      style="background-color: #010e68"
    >
      <video
        class="w-full h-auto"
        src="@/assets/img/how-to-face-my-shadows.mp4"
        controls
        autoplay
        loop
        muted
      ></video>
    </section>

    <section
      id="4"
      class="flex justify-center items-center w-full h-screen bg-gradient-to-b from-[#010e68] to-[#4b14ff]"
    >
      <img
        src="@/assets/img/3Droom.png"
        class="cursor-pointer h-4/5 drop-shadow-2xl"
      />
    </section>
  </div>

  <!--         tags              -->
  <!--         tags              -->
  <!--         tags              -->
  <!--         tags              -->
  <div
    v-if="showIntro"
    class="backdrop-blur-sm fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/4 h-auto bg-white/60 p-8 z-10"
  >
    <Icon
      icon="material-symbols:close-rounded"
      width="23"
      class="cursor-pointer justify-self-end m-0 hover:scale-150 transition-transform duration-300"
      id="canceled"
      @click="canceledIntro"
    />

    <h1 class="poppins-medium text-gray-800 text-center text-2xl">
      3D Modeling, Experiment, Material and Light
    </h1>
    <p class="markazi-text text-gray-900 my-5 text-2xl">
      Russia has steadily been making gains in the eastern Donbas region, which
      Russia’s President Vladimir Putin aims to capture in full. Reuters, citing
      open source data, reported that Russia has been advancing at its fastest
      pace in at least a year. Ukraine’s Commander-in-Chief Oleksandr Syrskyi
      said the situation on the front line “remains difficult” and certain areas
      “require constant renewal of resources of Ukrainian units” in a statement
      on Telegram Saturday morning.
    </p>
  </div>
  <div
    v-if="showIntroTag"
    id="introTag"
    class="p-3 flex row items-center fixed top-1/4 right-5 -translate-y-1/2 z-10 hover:animate-bounce cursor-pointer"
    @click="openIntro"
  >
    <Icon
      icon="bitcoin-icons:plus-outline"
      width="13"
      color="white"
      class="mr-2 backdrop-invert opacity-70 cursor-pointer"
    />
    <div class="text-white opacity-70 text-xl">INTRO</div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Geo:ital@0;1&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&display=swap");

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
</style>
