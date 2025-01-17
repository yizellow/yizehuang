<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import infoTag from "@/components/infoTag.vue";
import { useMediaQuery } from "@vueuse/core";

const isComputer = useMediaQuery("(min-width: 481px)");
const isMobile = useMediaQuery("(max-width: 480px)");
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
  <div v-if="isComputer">
    <main>
      <div>
        <section id="1" class="relative snap-center">
          <img
            class="w-full h-full object-cover cursor-pointer"
            src="https://cdnb.artstation.com/p/assets/images/images/052/116/789/large/yize-huang-plastic-wrap-protection-laocoon-and-his-sons.jpg?1658985491"
          />
          <infoTag
            title="Plastic wrap protection"
            subtle="Laocoon and his sons"
          />
        </section>
        <section
          id="2"
          class="snap-center pr-[100px] relative w-full h-[600px] overflow-hidden flex items-center justify-start bg-right bg-[#e5e4e1]"
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
          <infoTag title="Republic China and Its Dick_David" />
        </section>
        <section
          id="3"
          class="snap-center relative w-full h-screen bg-[#010e68]"
        >
          <video
            class="w-full h-auto"
            src="@/assets/img/how-to-face-my-shadows.mp4"
            controls
            autoplay
            loop
            muted
          ></video>
          <infoTag title="How to face my shadows?" subtle="The Crouching Boy" />
        </section>

        <section
          id="4"
          class="snap-center relative flex justify-center items-center w-full h-screen bg-gradient-to-b from-[#010e68] to-[#4b14ff]"
        >
          <div
            class="bg-#2c2726 cursor-pointer w-3/5 h-4/5 overflow-auto touch-auto drop-shadow-2xl"
          >
            <img
              src="@/assets/img/3Droom.png"
              class="w-[100%] max-w-none h-auto"
            />
          </div>

          <infoTag title="How to face my shadows?" />
        </section>
      </div>

      <!--         tags              -->
      <!--         tags              -->
      <!--         tags              -->
      <div
        v-if="showIntro"
        class="st backdrop-blur-sm fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/4 h-auto bg-white/60 p-8 z-10"
      >
        <Icon
          icon="material-symbols:close-rounded"
          width="23"
          class="xx cursor-pointer justify-self-end m-0 hover:scale-150 transition-transform duration-300"
          id="canceled"
          @click="canceledIntro"
        />

        <h1 class="tt poppins-medium text-gray-800 text-center text-2xl">
          3D Modeling, Experiment, Material and Light
        </h1>
        <p class="ct markazi-text text-gray-900 my-5 text-2xl">
          &nbsp; &nbsp; This is an experimental project created with Blender,
          aimed at exploring the interplay between materials, light, and shadow
          in 3D modeling. I am particularly captivated by the subtle
          interactions between light transmission, refraction, and material
          textures. These subtle changes show the unique charm of digital media.
          <br />
          <br />
          &nbsp; &nbsp; During the creation process, I observed that objects
          made through 3D modeling often display a quality of "excessive
          perfection." This is evident in their highly precise details, flawless
          surfaces, and meticulously calculated lighting effects. While these
          features appear realistic, they simultaneously surpass the
          imperfections and randomness present in naturally occurring objects.
          <br />
          <br />
          &nbsp; &nbsp;This not only gives the works a refined and surreal
          quality but also reminds me of the idealized characteristics found in
          classical realist sculptures. Combining this quality with classical
          aesthetics introduces a playful dimension to modern digital creations,
          further opening up new possibilities for artistic exploration.
        </p>
      </div>
      <div
        v-if="showIntroTag"
        id="introTag"
        class="showIntro p-3 flex row items-center fixed top-1/4 right-5 -translate-y-1/2 z-10 hover:animate-bounce cursor-pointer"
        @click="openIntro"
      >
        <Icon
          icon="bitcoin-icons:plus-outline"
          width="13"
          color="white"
          class="icon mr-2 backdrop-invert opacity-70 cursor-pointer"
        />
        <div class="intro text-white opacity-70 text-xl">INTRO</div>
      </div>
    </main>
  </div>
  <div v-if="isMobile">
    <main>
      <div>
        <section id="1" class="relative snap-center">
          <img
            class="w-[100vw] h-full object-cover cursor-pointer"
            src="https://cdnb.artstation.com/p/assets/images/images/052/116/789/large/yize-huang-plastic-wrap-protection-laocoon-and-his-sons.jpg?1658985491"
          />
          <infoTag
            title="Plastic wrap protection"
            subtle="Laocoon and his sons"
          />
        </section>
        <section class="w-full h-[40vh] relative bg-[#e8e7e6] z-0">
          <img
            src="https://cdna.artstation.com/p/assets/images/images/052/282/404/large/yize-huang-sde.jpg?1659416576"
            class="w-auto h-full opacity-90 right-0 absolute z-1"
          />
          <div
            class="h-full w-2/3 z-10 absolute flex flex-col items-start justify-center"
          >
            <img
              src="https://cdnb.artstation.com/p/assets/images/images/052/282/401/large/yize-huang-ft.jpg?1659416553"
              class="h-1/2 drop-shadow-md opacity-90 p-[1.5vh]"
            />
            <img
              src="https://cdna.artstation.com/p/assets/images/images/052/282/402/large/yize-huang-new-whole.jpg?1659416565"
              class="h-1/2 drop-shadow-md opacity-90 p-[1.5vh]"
            />
          </div>

          <infoTag
            title="Republic China and Its Dick_David"
            class="absolute z-30"
          />
        </section>
        <section
          id="3"
          class="section3 section2snap-center relative w-full h-[35vh] bg-[#010f68] z-0"
        >
          <video
            class="w-full h-auto max-w-full max-h-full object-cover absolute z-10 bg-[#010e68]"
            src="@/assets/img/how-to-face-my-shadows.mp4"
            controls
            autoplay
            loop
            muted
            playsinline
          ></video>
          <infoTag title="How to face my shadows?" subtle="The Crouching Boy" />
        </section>

        <section
          id="4"
          class="section4 snap-center relative flex justify-center items-center w-full h-screen bg-gradient-to-b from-[#010e68] to-[#4b14ff]"
        >
          <div
            class="bg-#2c2726 cursor-pointer w-3/5 h-4/5 overflow-auto touch-auto drop-shadow-2xl"
          >
            <img
              src="@/assets/img/3Droom.png"
              class="w-[100%] max-w-none h-auto"
            />
          </div>

          <infoTag title="Design my room" />
        </section>
      </div>

      <!--         tags              -->
      <!--         tags              -->
      <!--         tags              -->
      <div
        v-if="showIntro"
        class="backdrop-blur-sm fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94vw] max-h-[60vh] bg-white/60 z-10 overflow-scroll"
      >
        <Icon
          icon="material-symbols:close-rounded"
          width="23"
          class="xx cursor-pointer justify-self-end m-0 hover:scale-150 transition-transform duration-300"
          id="canceled"
          @click="canceledIntro"
        />

        <p class="poppins-medium text-gray-800 text-center m-[1.5vh] text-m">
          3D Modeling, Experiment, Material and Light
        </p>
        <p class="markazi-text text-gray-900 text-m m-[1vh]">
          &nbsp; &nbsp; This is an experimental project created with Blender,
          aimed at exploring the interplay between materials, light, and shadow
          in 3D modeling. I am particularly captivated by the subtle
          interactions between light transmission, refraction, and material
          textures. These subtle changes show the unique charm of digital media.
          <br />
          &nbsp; &nbsp; During the creation process, I observed that objects
          made through 3D modeling often display a quality of "excessive
          perfection." This is evident in their highly precise details, flawless
          surfaces, and meticulously calculated lighting effects. While these
          features appear realistic, they simultaneously surpass the
          imperfections and randomness present in naturally occurring objects.
          <br />

          &nbsp; &nbsp;This not only gives the works a refined and surreal
          quality but also reminds me of the idealized characteristics found in
          classical realist sculptures. Combining this quality with classical
          aesthetics introduces a playful dimension to modern digital creations,
          further opening up new possibilities for artistic exploration.
        </p>
      </div>
      <div
        v-if="showIntroTag"
        id="introTag"
        class="showIntro p-3 flex row items-center fixed top-1/4 right-5 -translate-y-1/2 z-10 hover:animate-bounce cursor-pointer"
        @click="openIntro"
      >
        <Icon
          icon="bitcoin-icons:plus-outline"
          width="13"
          color="white"
          class="icon mr-2 backdrop-invert opacity-70 cursor-pointer"
        />
        <div class="intro text-white opacity-70 text-xl">INTRO</div>
      </div>
    </main>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Geo:ital@0;1&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&display=swap");

p {
  user-select: text;
}
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
@media (min-width: 481px) {
}
@media (max-width: 480px) {
  html {
    height: -webkit-fill-available;
  }

  main {
    height: -webkit-fill-available;
  }
  .st {
    width: 98%;
    margin: auto;
    padding: 0.4rem;
  }
  .ct {
    font-size: 1rem;
    line-height: 1.1rem;
    margin: auto 3px;
  }
  .intro {
    font-size: 1rem;
  }
  .showIntro {
    top: 90%;
  }

  .section4 {
    height: 50vh;
  }
}
</style>
