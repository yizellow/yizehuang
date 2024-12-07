<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue"; // 引入 ref

const image = [
  "https://cdna.artstation.com/p/assets/images/images/081/914/924/large/yize-huang-2024-11-11-8-47-48.jpg?1731558884",
  "https://cdnb.artstation.com/p/assets/images/images/081/759/583/large/yize-huang-1.jpg?1731143083",
  "https://cdnb.artstation.com/p/assets/images/images/081/756/461/large/yize-huang-1.jpg?1731128459",
  "https://cdnb.artstation.com/p/assets/images/images/081/756/469/large/yize-huang-.jpg?1731128470",
  "https://cdna.artstation.com/p/assets/images/images/081/756/438/large/yize-huang-.jpg?1731128376",
  "https://cdnb.artstation.com/p/assets/images/images/081/756/441/large/yize-huang-.jpg?1731128424",
  "https://cdna.artstation.com/p/assets/images/images/081/756/450/large/yize-huang-.jpg?1731128444",
  "https://cdnb.artstation.com/p/assets/images/images/081/759/565/large/yize-huang-maze.jpg?1731143047",
  "https://cdnb.artstation.com/p/assets/images/images/081/756/435/large/yize-huang-.jpg?1731128356",
  "https://cdnb.artstation.com/p/assets/images/images/082/660/331/large/yize-huang-ae-a-2024-11-26-a-a-6-09-53.jpg?1733574260",
];
let currentIndex = ref(0);

const lastImg = () => {
  currentIndex.value = (currentIndex.value - 1 + image.length) % image.length;
  console.log(currentIndex);
};
const nextImg = () => {
  currentIndex.value = (currentIndex.value + 1) % image.length;
  console.log(currentIndex);
};
</script>
<template>
  <section
    class="relative w-full h-[100vh] flex justify-center items-center z-0"
  >
    <video
      class="w-full h-full object-cover z-1 inset-0"
      src="@/assets/img/ChipsImg/chipHero.mp4"
      autoplay
      loop
      muted
    ></video>
    <div class="w-full h-full absolute z-2 flex items-start justify-center">
      <p
        class="relative text-[13rem] font-bold tracking-[3rem] mix-blend-screen text-red-500 top-[170px]"
      >
        CHIPS
      </p>
    </div>
  </section>
  <section class="w-full h-[100vh] bg-neutral-900 flex z-0 relative">
    <img
      class="absolute z-2 object-cover left-0 right-0 w-1/2 h-full"
      src="https://cdna.artstation.com/p/assets/images/images/082/633/124/large/yize-huang-2024-12-06-9-01-23.jpg?1733490357"
    />
    <img
      class="absolute z-2 object-cover top-0 right-0 w-1/2 h-full object-center"
      src="https://cdna.artstation.com/p/assets/images/images/082/633/132/large/yize-huang-2024-12-06-9-03-18.jpg?1733490373"
    />
  </section>

  <section class="w-full h-[692px] bg-neutral-300 flex">
    <div
      class="px-20 py-40 right-0 w-2/3 h-full col-span-1 bg-neutral-900 flex flex-col items-start justify-center"
    >
      <p class="text-white text-2xl ml-10 mb-5 poppins-medium">About Chips</p>
      <div
        class="w-full h-full bg-[#3f4f9a]/50 p-10 flex items-start justify-center"
      >
        <p class="text-white text-2xl markazi-text">
          "Chips" is a game centered on dance, combining animation, drama, and
          music, inspired by Greek tragedy. The protagonist is in his mental
          world, searching for an imaginary figure while dealing with inner
          trauma. The game starts with animations and psychological tests to
          select a character, then shifts to an RPG mode. In a Möbius-strip-like
          playground, players advance the story through character dialogues,
          exploring memories, navigating mazes, and playing various mini-games.
          Every choice leads to a different ending.
        </p>
      </div>
    </div>
    <div
      class="p-10 left-0 w-1/3 h-full col-span-1 flex flex-col bg-neutral-900"
    >
      <img
        class="w-full h-1/3 object-cover object-center"
        src="https://cdna.artstation.com/p/assets/images/images/082/656/926/large/yize-huang-ae-a-2024-11-26-a-a-6-09-01.jpg?1733561492"
      />
      <img
        class="w-full h-1/3 object-cover object-center"
        src="https://cdnb.artstation.com/p/assets/images/images/082/656/925/large/yize-huang-ae-a-2024-11-26-a-a-6-09-22.jpg?1733561481"
      />
      <img
        class="w-full h-1/3 object-fill object-right"
        src="https://cdnb.artstation.com/p/assets/images/images/082/657/009/large/yize-huang-2024-12-07-4-58-21.jpg?1733561974"
      />
    </div>
  </section>

  <section
    class="w-full h-[calc(100vh-56px)] p-20 flex items-start justify-start"
  >
    <div class="h-full w-full grid grid-cols-3 grid-rows-3">
      <div class="col-span-2 row-span-3">
        <img
          class="w-full h-full object-contain"
          v-bind:src="image[currentIndex]"
        />
      </div>
      <div
        class="ml-20 col-span-1 row-span-2 px-10 flex items-center justify-center flex-col"
      >
        <p class="my-5 text-gray-900 text-2xl poppins-medium">My Role</p>

        <p class="markazi-text text-gray-900 text-2xl">
          Main producer, responsible for scriptwriting, animation, visual
          design, game design, and administration.
        </p>
      </div>
      <div
        class="col-span-1 row-span-1 flex flex-row justify-center items-start pl-20"
      >
        <Icon
          icon="material-symbols:arrow-back-2"
          width="55"
          class="cursor-pointer justify-self-end m-10 hover:scale-150 transition-transform duration-300"
          @click="lastImg"
          color="blue"
        ></Icon>
        <Icon
          icon="material-symbols:arrow-back-2"
          width="55"
          class="cursor-pointer justify-self-end rotate-180 m-10 hover:scale-150 transition-transform duration-300"
          @click="nextImg"
          color="blue"
        ></Icon>
      </div>
    </div>
  </section>
  <section class="w-full h-[692px] bg-neutral-900 flex">
    <div
      class="ml-20 p-10 left-0 w-1/3 h-full flex items-center justify-center bg-neutral-900"
    >
      <img
        src="@/assets/img/ChipsImg/mmm.png"
        class="object-cover w-full h-full"
      />
    </div>

    <div
      class="p-40 right-0 w-2/3 h-full bg-neutral-900 flex flex-col items-start justify-center"
    >
      <p class="text-blue-700 text-2xl mr-10 mb-5 poppins-medium">Process</p>

      <p class="text-white text-2xl markazi-text">
        During university, I was eager to collaborate with students from other
        departments, believing that interdisciplinary projects with the Dance
        Department would be the most challenging. At the same time, I wanted to
        fulfill my dream of creating a game, which led to the creation of Chips.
        This project took a year and a half to complete and was successfully
        selected for the 2021 GenieLab Hybrid Cup.
        <br />
        <br />
        Originally, the game was planned to go beyond online activities. We
        envisioned transforming campus vending machines into game-themed
        installations and setting up a stage around them to reinterpret the work
        through dance and performance art while promoting the game. However, due
        to the pandemic, it was ultimately showcased through an online curation
        format, where it received analysis and feedback from many players and
        art critics.
      </p>
      <div
        class="w-full p-2 h-auto mt-5 poppins-medium bg-[blue]/40 flex items-start justify-start"
      >
        <a href="https://reurl.cc/qn5ZLg"
          ><p class="ml-2 text-xl text-red-500 cursor-pointer hover:text-white">
            ＊ Online GenieLab Hybrid Cup Curation Introduction => click
          </p></a
        >
      </div>
      <div
        class="w-full p-2 h-auto poppins-medium bg-[blue]/40 flex items-start justify-start"
      >
        <a href="https://reurl.cc/d12eDM">
          <p class="ml-2 text-xl text-red-500 cursor-pointer hover:text-white">
            ＊ Art criticism (Chinese Only) => click
          </p>
        </a>
      </div>
    </div>
  </section>
  <section
    class="relative w-full h-[692px] bg-neutral-200 flex items-center"
  ></section>

  <section class="relative w-full h-auto bg-neutral-900 flex items-center">
    <div
      class="w-full h-full neutral-900 m-5 flex items-start justify-start flex-wrap"
    >
      <div class="w-1/3 h-full p-3">
        <iframe
          class="w-full aspect-video"
          src="https://www.youtube.com/embed/sQpa6tkxzg8"
          title="Psychological Test V"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          loading="lazy"
        ></iframe>
        <p class="text-neutral-400 mt-5 text-2xl text-center poppins-medium">
          Psychological Test V
        </p>
      </div>

      <div class="w-1/3 h-full p-3">
        <iframe
          class="w-full aspect-video"
          src="https://www.youtube.com/embed/Ze51L77-feU"
          frameborder="0"
          title="Psychological Test IV"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          loading="lazy"
        ></iframe>
        <p class="text-neutral-400 mt-5 text-2xl text-center poppins-medium">
          Psychological Test IV
        </p>
      </div>
      <div class="w-1/3 h-full p-3">
        <iframe
          class="w-full aspect-video"
          src="https://www.youtube.com/embed/gmkw-ZdAMAQ"
          frameborder="0"
          title="Psychological Test III"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          loading="lazy"
        ></iframe>
        <p class="text-neutral-400 mt-5 text-2xl text-center poppins-medium">
          Psychological Test III
        </p>
      </div>
      <div class="w-1/3 h-full p-3 mt-10">
        <iframe
          class="w-full aspect-video"
          src="https://www.youtube.com/embed/gmkw-ZdAMAQ"
          frameborder="0"
          title="Psychological Test III"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          loading="lazy"
        ></iframe>
        <p class="text-neutral-400 mt-5 text-2xl text-center poppins-medium">
          Psychological Test III
        </p>
      </div>
    </div>
  </section>

  <!-- ------------------------------- -->

  <section class="w-full h-[692px] bg-neutral-900 z-0 relative">
    <div
      class="right-0 w-1/2 h-full absolute flex justify-center items-center z-2"
    >
      <div
        class="w-[calc(100%/1.414)] h-[calc(100%/1.414)] flex justify-center flex-col p-10"
      >
        <p class="text-2xl text-white poppins-medium">團隊名單 Credit</p>
        <p class="text-2xl mt-10 text-white markazi-text">
          美術系 黃亦澤 HUANG Yi-Ze<br />
          美術系 張瑜晴 CHANG Yu-Ching<br />
          新媒系 劉張妙齊 LIU CHANG Miao-Chi<br />
          舞蹈系 黃孝傑 HUANG Hsiao-Chieh<br />
          舞蹈系 梁保昇 LEONG Pou-Seng <br />
          舞蹈系 許雅昕 HSU Ya-Hsin<br />
          舞蹈系 段予誠 TUAN Yu-Cheng <br />
          劇設系 林子璇 LIN Tzu-Hsuan <br />
          音樂系 余辰曜 YU Chen-Yao
        </p>
      </div>
    </div>
    <div
      class="left-0 w-1/2 h-full absolute flex justify-center items-center z-2"
    >
      <div class="w-[calc(100%/1.414)] h-[calc(100%/1.414)]">
        <img
          class="w-full h-full object-contain"
          src="https://cdnb.artstation.com/p/assets/images/images/081/756/471/large/yize-huang-2-3chips2.jpg?1731128477"
        />
      </div>
    </div>
  </section>
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

.golden {
  display: grid;
  grid-template-columns: 1.618fr 1;
}

/* .tagg {
  opacity: 0.2;
  color: white;
  background-color: blue;
  border-radius: 5px;
}
.tagg:hover {
  opacity: 0.9;
  color: white;
  background-color: rgb(18, 18, 18);
} */
</style>
