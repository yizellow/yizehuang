<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useMediaQuery } from "@vueuse/core";

const isComputer = useMediaQuery("(min-width: 481px)");
const isMobile = useMediaQuery("(max-width: 480px)");

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
  <div v-if="isComputer">
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
            select a character, then shifts to an RPG mode. In a
            Möbius-strip-like playground, players advance the story through
            character dialogues, exploring memories, navigating labyrinths, and
            playing various mini-games. Every choice leads to a different
            ending.
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

        <p class="text-white text-[clamp(1rem,1.25rem,1.5rem)] markazi-text">
          During university, I was eager to collaborate with students from other
          departments, believing that interdisciplinary projects would challenge
          me. Collaborating with the dance department did just that. At the same
          time, I wanted to fulfill my dream of creating a game, which led to
          the creation of Chips. This project took a year and a half to complete
          and was successfully selected for the 2021 GenieLab Hybrid Cup.
          <br />
          <br />
          Originally, the game was planned to go beyond online activities. We
          envisioned transforming campus vending machines into game-themed
          installations and setting up a stage around them to reinterpret the
          work through dance and performance art while promoting the game.
          However, due to the pandemic, it was ultimately showcased through an
          online curation format, where it received analysis and feedback from
          many players as well as art critics from professionals.
        </p>
        <div
          class="w-full p-2 h-auto mt-5 poppins-medium bg-[blue]/40 flex items-start justify-start"
        >
          <a href="https://reurl.cc/qn5ZLg"
            ><p
              class="ml-2 text-xl text-red-500 cursor-pointer hover:text-white"
            >
              ＊ Online GenieLab Hybrid Cup Curation Introduction => click
            </p></a
          >
        </div>
        <div
          class="w-full p-2 h-auto poppins-medium bg-[blue]/40 flex items-start justify-start"
        >
          <a href="https://reurl.cc/d12eDM">
            <p
              class="ml-2 text-xl text-red-500 cursor-pointer hover:text-white"
            >
              ＊ Art criticism (Chinese Only) => click
            </p>
          </a>
        </div>
      </div>
    </section>
    <section
      class="w-full h-[65dvh] bg-white flex items-start justify-start relative"
    >
      <p class="mt-10 ml-10  text-blue-500 text-2xl poppins-medium">
        Game Walkthrough
      </p>
      <div class="wrapper absolute bottom-[3dvh] bg-white">
        <div class="item text-2xl bg-white">
          <div
            class="w-1/2 h-full flex flex-col items-start justify-center p-20 bg-neutral-900"
          >
            <p class="poppins-medium">1. Psychological Test</p>
            <br />
            <p class="markazi-text text-2xl text-left">
              There are five surreal questions with animations to match the
              player to the right character.
            </p>
          </div>
          <div
            class="w-1/2 h-full bg-neutral-900 flex items-center justify-center pr-5"
          >
            <img class="w-4/5 h-auto" src="@/assets/img/ChipsImg/1.gif" />
          </div>
        </div>
        <div class="item text-2xl bg-white">
          <div
            class="w-1/2 h-full flex flex-col items-start justify-center pl-10 bg-neutral-900"
          >
            <p class="poppins-medium">2. Character Selection Result</p>
            <br />
            <p class="markazi-text text-2xl text-left">
              Based on the results of the psychological test, a role that suits
              you will be assigned, which will also influence the progression of
              the story.
            </p>
          </div>
          <div
            class="w-1/2 h-full bg-neutral-900 flex items-center justify-center pr-5"
          >
            <img class="w-4/5 h-auto" src="@/assets/img/ChipsImg/2.gif" />
          </div>
        </div>

        <div class="item text-2xl bg-white">
          <div
            class="w-1/2 h-full flex flex-col items-start justify-center p-20 bg-neutral-900"
          >
            <p class="poppins-medium">3. In the Mobius Strip playground</p>
            <br />
            <p class="markazi-text text-2xl text-left">
              This playground is the main place of the game, with two versions
              that change based on the player's choices. Here, players will talk
              to other characters and trigger various games.
            </p>
          </div>
          <div
            class="w-1/2 h-full bg-neutral-900 flex items-center justify-center pr-5"
          >
            <img class="w-4/5 h-auto" src="@/assets/img/ChipsImg/3.gif" />
          </div>
        </div>

        <div class="item text-2xl bg-white">
          <div
            class="w-1/2 h-full flex flex-col items-start justify-center p-20 bg-neutral-900"
          >
            <p class="poppins-medium">4. Labyrinth</p>
            <br />
            <p class="markazi-text text-2xl text-left">
              The player will control two very similar Labyrinths at the same
              time, with the directions switched. Pressing the "right" key might
              move the character up. The story is told through music, and there
              are fewer traps in the labyrinth, allowing players to enjoy the
              music that describes the story.
            </p>
          </div>
          <div
            class="w-1/2 h-full bg-neutral-900 flex items-center justify-center pr-5"
          >
            <img
              class="w-4/5 h-auto"
              src="https://cdnb.artstation.com/p/assets/images/images/081/759/565/large/yize-huang-maze.jpg?1731143047"
            />
          </div>
        </div>

        <div class="item text-2xl bg-white">
          <div
            class="w-1/2 h-full flex flex-col items-start justify-center p-20 bg-neutral-900"
          >
            <p class="poppins-medium">5. Endings</p>
            <br />
            <p class="markazi-text text-2xl text-left">
              a. Do not face the reality .
              <br />
              b. reconciliation with yourself.
              <br />
              c. New possibilities.
            </p>
          </div>
          <div
            class="w-1/2 h-full bg-neutral-900 flex items-center justify-center pr-5"
          >
            <img class="w-4/5 h-auto" src="@/assets/img/ChipsImg/4.gif" />
          </div>
        </div>
      </div>
    </section>

    <section class="relative w-full h-auto bg-neutral-900 flex flex-col">
      <p
        class="text-3xl mt-10 ml-20 mb-2 items-self-start poppins-medium text-white"
      >
        Videos
      </p>

      <div
        class="w-full h-full neutral-900 mb-40 mt-5 flex items-start justify-start flex-wrap"
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
            src="https://www.youtube.com/embed/QYmHc7AvEUE"
            title="Happy Story"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            loading="lazy"
          ></iframe>
          <p class="text-neutral-400 mt-5 text-2xl text-center poppins-medium">
            Happy Story
          </p>
        </div>

        <div class="w-1/3 h-full p-3 mt-10">
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/PgUw_T_wPaw"
            title="Vintage Dance"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            loading="lazy"
          ></iframe>
          <p class="text-neutral-400 mt-5 text-2xl text-center poppins-medium">
            Vintage Dance
          </p>
        </div>

        <div class="w-1/3 h-full p-3 mt-10">
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/F-uBIMrh78g"
            title="Her Phone"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            loading="lazy"
          ></iframe>
          <p class="text-neutral-400 mt-5 text-2xl text-center poppins-medium">
            Her Phone
          </p>
        </div>

        <div class="w-1/3 h-full p-3 mt-10">
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/zM7SZZLGifM"
            title="His Phone"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            loading="lazy"
          ></iframe>
          <p class="text-neutral-400 mt-5 text-2xl text-center poppins-medium">
            Her Phone
          </p>
        </div>

        <div class="w-1/3 h-full p-3 mt-10">
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/HiRsTjugXlk"
            title="Imagined Daily Life"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            loading="lazy"
          ></iframe>
          <p class="text-neutral-400 mt-5 text-2xl text-center poppins-medium">
            Imagined Daily Life
          </p>
        </div>

        <div class="w-1/3 h-full p-3 mt-10">
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/N0B_bga1va8"
            title="Version of Sadness"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            loading="lazy"
          ></iframe>
          <p class="text-neutral-400 mt-5 text-2xl text-center poppins-medium">
            Version of Sadness
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
          <p class="text-xl text-white poppins-medium">團隊名單 Credit</p>
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
  </div>

  <div v-if="isMobile">
    <main>
      <section
        class="relative w-full h-auto flex flex-col justify-center items-center bg-[#f7d803] z-0"
      >
        <p
          class="text-[4rem] font-bold tracking-[1rem] text-red-500 top-[10vh]"
        >
          CHIPS
        </p>
        <div
          class="w-full h-full absolute z-2 flex items-start justify-center"
        ></div>
      </section>

      <section class="w-full h-[35vh] bg-neutral-900 flex z-0 relative">
        <img
          class="absolute z-2 object-cover left-0 right-0 w-1/2 h-full"
          src="https://cdna.artstation.com/p/assets/images/images/082/633/124/large/yize-huang-2024-12-06-9-01-23.jpg?1733490357"
        />
        <img
          class="absolute z-2 object-cover top-0 right-0 w-1/2 h-full object-center"
          src="https://cdna.artstation.com/p/assets/images/images/082/633/132/large/yize-huang-2024-12-06-9-03-18.jpg?1733490373"
        />
      </section>

      <section class="w-full h-auto bg-blue-300 flex flex-col">
        <div class="w-full bg-neutral-900 flex flex-col">
          <p class="text-red-500 text-2xl text-center p-[3vh] poppins-medium">
            #About Chips
          </p>
          <div class="w-full h-auto bg-[#3f4f9a]/50 p-[3vh]">
            <p class="text-white text-xl markazi-text">
              &nbsp; &nbsp;"Chips" is a game centered on dance, combining
              animation, drama, and music, inspired by Greek tragedy. The
              protagonist is in his mental world, searching for an imaginary
              figure while dealing with inner trauma. The game starts with
              animations and psychological tests to select a character, then
              shifts to an RPG mode. In a Möbius-strip-like playground, players
              advance the story through character dialogues, exploring memories,
              navigating labyrinths, and playing various mini-games. Every
              choice leads to a different ending.
            </p>
          </div>
        </div>
        <div class="w-full h-auto flex flex-row bg-neutral-900">
          <img
            class="w-1/3 h-auto object-cover object-center"
            src="https://cdna.artstation.com/p/assets/images/images/082/656/926/large/yize-huang-ae-a-2024-11-26-a-a-6-09-01.jpg?1733561492"
          />
          <img
            class="w-1/3 h-auto object-cover object-center"
            src="https://cdnb.artstation.com/p/assets/images/images/082/656/925/large/yize-huang-ae-a-2024-11-26-a-a-6-09-22.jpg?1733561481"
          />
          <img
            class="w-1/3 h-auto object-fill object-right"
            src="https://cdnb.artstation.com/p/assets/images/images/082/657/009/large/yize-huang-2024-12-07-4-58-21.jpg?1733561974"
          />
        </div>
      </section>

      <section
        class="w-full h-[38vh] flex relative flex-col items-start justify-start"
      >
        <div class="w-full h-auto absolute z-1">
          <img
            class="w-full h-full object-contain p-[3vh]"
            v-bind:src="image[currentIndex]"
          />
        </div>
        <div class="w-full top-1/2 flex flex-row justify-between absolute z-2">
          <Icon
            icon="material-symbols:arrow-back-2"
            width="45"
            class="cursor-pointer justify-self-end hover:scale-150 transition-transform duration-300"
            @click="lastImg"
            color="blue"
          ></Icon>
          <Icon
            icon="material-symbols:arrow-back-2"
            width="45"
            class="cursor-pointer justify-self-end rotate-180 hover:scale-150 transition-transform duration-300"
            @click="nextImg"
            color="blue"
          ></Icon>
        </div>
      </section>

      <section>
        <div
          class="flex items-center justify-center flex-col m-[3vh] p-[1vh] border border-black"
        >
          <p class="my-[1vh] text-gray-900 text-2xl poppins-medium">#My Role</p>

          <p class="markazi-text text-gray-900 text-xl text-center">
            Main producer, responsible for scriptwriting, animation, visual
            design, game design, and administration.
          </p>
        </div>
      </section>

      <section class="w-full h-auto bg-neutral-900 flex flex-col">
        <div
          class="w-full h-full flex items-center justify-center bg-neutral-900 p-[3vh]"
        >
          <img
            src="@/assets/img/ChipsImg/mmm.png"
            class="object-cover w-full h-full"
          />
        </div>
        <div
          class="w-full h-full bg-neutral-900 flex flex-col items-start justify-center p-[3vh]"
        >
          <p class="text-blue-700 text-2xl mb-[3vh] poppins-medium">#Process</p>

          <p class="text-white text-xl markazi-text">
            &nbsp; &nbsp; During university, I was eager to collaborate with
            students from other departments, believing that interdisciplinary
            projects would challenge me. Collaborating with the dance department
            did just that. At the same time, I wanted to fulfill my dream of
            creating a game, which led to the creation of Chips. This project
            took a year and a half to complete and was successfully selected for
            the 2021 GenieLab Hybrid Cup.
            <br />
            <br />
            &nbsp; &nbsp; Originally, the game was planned to go beyond online
            activities. We envisioned transforming campus vending machines into
            game-themed installations and setting up a stage around them to
            reinterpret the work through dance and performance art while
            promoting the game. However, due to the pandemic, it was ultimately
            showcased through an online curation format, where it received
            analysis and feedback from many players as well as art critics from
            professionals.
          </p>
          <div
            class="w-full p-[1vh] h-auto mt-[3vh] poppins-medium bg-[blue]/40 flex items-start justify-start"
          >
            <a href="https://reurl.cc/qn5ZLg"
              ><p class="text-l text-red-500 cursor-pointer hover:text-white">
                ＊ Online GenieLab Hybrid Cup Curation Introduction => click
              </p></a
            >
          </div>
          <div
            class="w-full p-2 h-auto poppins-medium bg-[blue]/40 flex items-start justify-start"
          >
            <a href="https://reurl.cc/d12eDM">
              <p class="text-l text-red-500 cursor-pointer hover:text-white">
                ＊ Art criticism (Chinese Only) => click
              </p>
            </a>
          </div>
        </div>
      </section>

      <section
        class="w-full h-auto flex flex-col items-center justify-around bg-white"
      >
        <p
          class="text-blue-500 margin-[0px auto] w-full h-[6vh] text-2xl justify-self-start-center poppins-medium bg-white"
        >
          #Game Walkthrough
        </p>
        <div
          class="w-[100vw] h-[88vh] bg-neutral-900 flex flex-row justify-start items-center overflow-x-scroll overflow-y-hidden"
        >
          <div
            class="w-[calc(100vw-10vh)] h-full ml-[3vh] flex-shrink-0 flex justify-start items-center flex-col"
          >
            <div
              class="w-full h-[50px] flex items-center justify-center overflow-hidden"
            >
              <p class="text-white m-[3vh] text-m">1. Psychological Test</p>
            </div>

            <img class="w-full h-1/3" src="@/assets/img/ChipsImg/1.gif" />
            <div
              class="w-full h-1/2 border-white border-b-2 flex items-center justify-center"
            >
              <p class="markazi-text text-l m-[3vh] text-white text-left">
                There are five surreal questions with animations to match the
                player to the right character.
              </p>
            </div>
          </div>

          <div
            class="w-[calc(100vw-10vh)] h-full ml-[3vh] flex-shrink-0 border-white border-b-2 flex justify-start items-center flex-col"
          >
            <div
              class="w-full h-[50px] flex items-center justify-center overflow-hidden"
            >
              <p class="text-white m-[3vh] text-s">
                2. Character Selection Result
              </p>
            </div>

            <img class="w-full h-1/3" src="@/assets/img/ChipsImg/2.gif" />
            <div
              class="w-full h-1/2 border-white border-b-2 flex items-center justify-center"
            >
              <p class="markazi-text text-l m-[3vh] text-white text-left">
                Based on the results of the psychological test, a role that
                suits you will be assigned, which will also influence the
                progression of the story.
              </p>
            </div>
          </div>

          <div
            class="w-[calc(100vw-10vh)] h-full ml-[3vh] flex-shrink-0 border-white border-b-2 flex justify-start items-center flex-col"
          >
            <div
              class="w-full h-[50px] overflow-hidden flex items-center justify-center"
            >
              <p class="text-white m-[3vh] text-s">
                3. In the Mobius Strip playground
              </p>
            </div>

            <img class="w-full h-1/3" src="@/assets/img/ChipsImg/3.gif" />

            <div
              class="w-full h-1/2 border-white border-b-2 flex items-center justify-center"
            >
              <p class="markazi-text text-l m-[3vh] text-white text-left">
                This playground is the main place of the game, with two versions
                that change based on the player's choices. Here, players will
                talk to other characters and trigger various games.
              </p>
            </div>
          </div>

          <div
            class="w-[calc(100vw-10vh)] h-full ml-[3vh] flex-shrink-0 border-white border-b-2 flex justify-start items-center flex-col"
          >
            <div
              class="w-full h-[50px] overflow-hidden flex items-center justify-center"
            >
              <p class="text-white m-[3vh] text-m">4. Labyrinth</p>
            </div>

            <img
              class="w-full h-1/3"
              src="https://cdnb.artstation.com/p/assets/images/images/081/759/565/large/yize-huang-maze.jpg?1731143047"
            />
            <div
              class="w-full h-1/2 border-white border-b-2 flex items-center justify-center"
            >
              <p class="markazi-text text-l text-left text-white">
                a. Do not face the reality .
                <br />
                b. reconciliation with yourself.
                <br />
                c. New possibilities.
              </p>
            </div>
          </div>

          <div
            class="w-[calc(100vw-10vh)] h-full ml-[3vh] flex-shrink-0 border-white border-b-2 flex justify-start items-center flex-col"
          >
            <div
              class="w-full h-[50px] overflow-hidden flex items-center justify-center"
            >
              <p class="text-white m-[3vh] text-m">5. Endings</p>
            </div>

            <img class="w-full h-1/3" src="@/assets/img/ChipsImg/4.gif" />
            <div
              class="w-full h-1/2 border-white border-b-2 flex items-center justify-center"
            >
              <p class="markazi-text text-l m-[3vh] text-white text-left">
                The player will control two very similar Labyrinths at the same
                time, with the directions switched. Pressing the "right" key
                might move the character up. The story is told through music,
                and there are fewer traps in the labyrinth, allowing players to
                enjoy the music that describes the story.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        class="w-full h-auto bg-slate-900 flex flex-col items-ceter justify-start"
      >
        <p class="text-2xl m-[2vh] items-self-start poppins-medium text-white">
          #Videos
        </p>
        <div class="bg-neutral-900">
          <div class="w-full h-full p-3">
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
            <p
              class="text-neutral-400 mt-5 text-2xl text-center poppins-medium"
            >
              Psychological Test V
            </p>
          </div>
          <div class="w-full h-full p-3">
            <iframe
              class="w-full aspect-video"
              src="https://www.youtube.com/embed/PgUw_T_wPaw"
              title="Vintage Dance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              loading="lazy"
            ></iframe>
            <p
              class="text-neutral-400 mt-5 text-2xl text-center poppins-medium"
            >
              Vintage Dance
            </p>
          </div>

          <div class="w-full h-full p-3">
            <iframe
              class="w-full aspect-video"
              src="https://www.youtube.com/embed/QYmHc7AvEUE"
              title="Happy Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              loading="lazy"
            ></iframe>
            <p
              class="text-neutral-400 mt-5 text-2xl text-center poppins-medium"
            >
              Happy Story
            </p>
          </div>
        </div>
      </section>
      <section class="w-full h-auto bg-neutral-900">
        <div class="w-full h-full flex flex-col justify-center items-center">
          <div class="w-full h-auto flex justify-center flex-col p-[3vh]">
            <p class="text-xl text-white poppins-medium">#團隊名單 Credit</p>
            <br />
            <p class="text-xl text-white markazi-text">
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
        <div class="w-full h-auto p-[3vh]">
          <img
            class="w-full h-full object-contain"
            src="https://cdnb.artstation.com/p/assets/images/images/081/756/471/large/yize-huang-2-3chips2.jpg?1731128477"
          />
        </div>
      </section>
    </main>
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

@media (min-width: 481px) {
  .wrapper {
    max-height: 80%;
    display: flex;
    overflow-x: auto;
    background-color: black;
  }

  .wrapper::-webkit-scrollbar {
    width: auto;
    background-color: rgb(18, 18, 18);
  }

  .wrapper::-webkit-scrollbar {
    height: auto;
  }

  .wrapper::-webkit-scrollbar-track {
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.572);
  }

  .wrapper::-webkit-scrollbar-thumb {
    background-color: red;
    cursor: pointer;
  }

  .wrapper .item {
    min-width: calc(100vw * 2 / 3);
    height: 100%;
    text-align: center;
    background-color: rgb(27, 69, 106);
    margin-right: 56px;
    color: aliceblue;
    font-size: text-2xl;
    display: flex;
    justify-content: start;
  }
}
@media (max-width: 480px) {
  main {
    width: 100%;
    margin-top: 6vh;
    display: flex;
    flex-direction: column;
  }

  ::-webkit-scrollbar {
    height: 8px; /* 水平滾動條的高度 */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  video {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 10;
  }
}
</style>
