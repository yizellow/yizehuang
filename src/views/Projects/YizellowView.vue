<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue"; // 引入 ref
import { useMediaQuery } from "@vueuse/core";

const isComputer = useMediaQuery("(min-width: 481px)");
const isMobile = useMediaQuery("(max-width: 480px)");

const image = [
  "https://cdna.artstation.com/p/assets/images/images/082/626/586/large/yize-huang-pp3.jpg?1733473101",
  "https://cdnb.artstation.com/p/assets/images/images/082/626/611/large/yize-huang-j4.jpg?1733473161",
  "https://cdna.artstation.com/p/assets/images/images/082/626/602/large/yize-huang-pp2.jpg?1733473140",
  "https://cdna.artstation.com/p/assets/images/images/082/626/570/large/yize-huang-jj88.jpg?1733473076",
  "https://cdna.artstation.com/p/assets/images/images/082/626/582/large/yize-huang-jj55.jpg?1733473096",
  "https://cdna.artstation.com/p/assets/images/images/082/626/590/large/yize-huang-jj1.jpg?1733473110",
  "https://cdna.artstation.com/p/assets/images/images/082/626/608/large/yize-huang-jjj3.jpg?1733473156",
  "https://cdnb.artstation.com/p/assets/images/images/082/626/599/large/yize-huang-jj2.jpg?1733473124",
  "https://cdna.artstation.com/p/assets/images/images/082/626/578/large/yize-huang-jj6.jpg?1733473089",
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
    <main class="mt-[56px]">
      <section
        id="intro"
        class="w-full h-[calc(100vh-56px)] flex flex-row relative"
      >
        <div class="w-full h-full bg-black relative">
          <img
            class="w-full h-full object-cover"
            src="https://cdnb.artstation.com/p/assets/images/images/082/626/599/large/yize-huang-jj2.jpg?1733473124"
          />
        </div>

        <div
          class="group absolute top-0 left-0 w-1/2 h-full z-10 flex items-center justify-center p-20 hover:bg-white/70"
        >
          <p
            class="markazi-text text-white my-5 text-2xl group-hover:text-black"
          >
            Yizellow is a project based on the theme of “The Basics of Styling”.
            Every artist has their own style, and the process of finding that
            style requires deep exploration. During my studies at art school, I
            realized that my motivation to create was often too purposeful,
            which made me feel constrained and unable to express myself freely.
            So I decided to take a more relaxed approach, experimenting with
            random doodles and sketches, including some oil paintings.
            Eventually, these works were assembled into my first solo
            exhibition: 《Yizellow》 (《Myself》)in 2019.
          </p>
        </div>
        <div
          class="absolute top-0 right-0 w-1/2 h-full z-10 flex items-center justify-center"
        >
          <p class="text-[6rem] text-white">YIZELLOW</p>
        </div>
      </section>
      <!-- -------------------------------------- -->

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
            class="col-span-1 row-span-2 p-20 flex items-center justify-center flex-col"
          >
            <p class="my-5 text-gray-900 text-2xl poppins-medium">A FEEDBACK</p>

            <p class="markazi-text text-gray-900 text-2xl">
              After the exhibition, an elder man told me that many artists
              create what they lack, but he saw “pure happiness, childishness
              and innocence” in my work. Indeed, what he said was exactly what I
              was looking for in my work, and this has become my rethinking of
              my creation.
            </p>
          </div>
          <div
            class="col-span-1 row-span-1 flex flex-row justify-center items-center"
          >
            <Icon
              icon="material-symbols:arrow-back-2"
              width="45"
              class="cursor-pointer justify-self-end m-5 hover:scale-150 transition-transform duration-300"
              @click="lastImg"
              color="black"
            ></Icon>
            <Icon
              icon="material-symbols:arrow-back-2"
              width="45"
              class="cursor-pointer justify-self-end rotate-180 m-5 hover:scale-150 transition-transform duration-300"
              @click="nextImg"
              color="black"
            ></Icon>
          </div>
        </div>
      </section>

      <!-- -------------------------------------- -->

      <section
        id="Doodle"
        class="bg-white w-full h-auto flex items-center justify-center flex-col pr-20 pb-20 pl-20"
      >
        <div
          class="drop-shadow-xl py-10 items-center justify-center flex-col bg-white"
        >
          <div class="w-full h-auto pr-20 pb-10 pl-20">
            <div class="flex flex-row items-center">
              <p class="my-5 self-start text-2xl poppins-medium">HOW TO SHOW</p>

              <a href="https://www.instagram.com/yizellow/">
                <img
                  class="w-10 ml-10 icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                />
              </a>
            </div>

            <p class="markazi-text text-2xl">
              During the process of creating many doodles, I began to think
              about how artists can show their work and share it with more
              people. So, I created an Instagram account for Yizellow to share
              my pieces. Interestingly, this account became the only way to save
              some of my works after my hard drive broke, even though some of
              the images were damaged.
            </p>
          </div>
          <div
            class="flex-wrap w-full h-full bg-lightgray-100 flex items-centers justify-center flex-row"
          >
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/860/708/large/yize-huang-2024-11-13-12-21-14.jpg?1731428504"
            /></a>

            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/726/large/yize-huang-2024-11-12-11-53-41.jpg?1731427170"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/885/large/yize-huang-2024-11-12-11-56-52.jpg?1731427388"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/881/large/yize-huang-2024-11-12-11-56-42.jpg?1731427382"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/877/large/yize-huang-2024-11-12-11-56-20.jpg?1731427372"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/869/large/yize-huang-2024-11-12-11-57-39.jpg?1731427360"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/838/large/yize-huang-2024-11-12-11-56-29.jpg?1731427313"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/833/large/yize-huang-2024-11-12-11-55-38.jpg?1731427307"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/824/large/yize-huang-2024-11-12-11-55-31.jpg?1731427298"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/817/large/yize-huang-2024-11-12-11-55-55.jpg?1731427285"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/804/large/yize-huang-2024-11-12-11-56-03.jpg?1731427275"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/730/large/yize-huang-2024-11-12-11-53-52.jpg?1731427178"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/738/large/yize-huang-2024-11-12-11-54-01.jpg?1731427187"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/742/large/yize-huang-2024-11-12-11-54-14.jpg?1731427197"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/748/large/yize-huang-2024-11-12-11-54-25.jpg?1731427204"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/764/large/yize-huang-2024-11-12-11-55-19.jpg?1731427221"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/773/large/yize-huang-2024-11-12-11-55-05.jpg?1731427234"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/778/large/yize-huang-2024-11-12-11-54-57.jpg?1731427242"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/781/large/yize-huang-2024-11-12-11-54-43.jpg?1731427250"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/792/large/yize-huang-2024-11-12-11-55-45.jpg?1731427264"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/785/large/yize-huang-2024-11-12-11-54-33.jpg?1731427255"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/860/593/large/yize-huang-2024-11-13-12-18-39.jpg?1731428338"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/860/596/large/yize-huang-2024-11-13-12-18-22.jpg?1731428344"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/860/602/large/yize-huang-2024-11-13-12-18-08.jpg?1731428351"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/860/607/large/yize-huang-2024-11-13-12-17-50.jpg?1731428358"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/860/614/large/yize-huang-2024-11-12-11-57-39.jpg?1731428368"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/860/622/large/yize-huang-2024-11-12-11-57-21.jpg?1731428376"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="doodleImg drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/860/625/large/yize-huang-2024-11-12-11-57-11.jpg?1731428384"
            /></a>
          </div>
        </div>
      </section>

      <!-- -------------------------------------- -->

      <section
        class="w-full h-[692px] p-20 flex items-center justify-starts flex-row"
      >
        <img
          class="w-[33%] h-full object-cover object-center"
          src="@/assets/img/ChipsImg/tattoo.gif"
        />

        <div
          class="w-[66%] h-full p-20 text-2xl border-2 flex flex-col items-center justify-center"
        >
          <p class="my-5 self-start poppins-medium">About Tattoos</p>
          <p class="markazi-text">
            The doodles of this project were favored by many people, and they
            even wanted to make these pictures into tattoos, so I started
            working as a tattooist. But as more and more people liked it, I
            gradually professionalized the technique and even apprenticed at a
            studio in Sydney, Australia. However, with a lot of practice, I came
            to realize that tattooing was not the right direction for me, and I
            felt a lack of freedom in it, so I decided to give it up, even
            though being a tattooist could be very lucrative.
          </p>
        </div>
      </section>
    </main>
  </div>
  <div v-if="isMobile">
    <main class="w-full h-auto bg-slate-400 mt-[6vh]">
      <section id="intro" class="w-full h-auto flex flex-row relative">
        <div class="w-full h-full bg-black relative">
          <img
            class="w-full h-full object-cover"
            src="https://cdnb.artstation.com/p/assets/images/images/082/626/599/large/yize-huang-jj2.jpg?1733473124"
          />
        </div>

        <div
          class="absolute w-full h-full z-10 flex items-center justify-center"
        >
          <p class="text-[3rem] text-white">YIZELLOW</p>
        </div>
      </section>
      <section class="p-[3vh] bg-white">
        <p class="markazi-text text-l border-b-2 pb-[1vh] border-gray-600">
          &nbsp; &nbsp; &nbsp; &nbsp;Yizellow is a project based on the theme of
          “The Basics of Styling”. Every artist has their own style, and the
          process of finding that style requires deep exploration. During my
          studies at art school, I realized that my motivation to create was
          often too purposeful, which made me feel constrained and unable to
          express myself freely. So I decided to take a more relaxed approach,
          experimenting with random doodles and sketches, including some oil
          paintings. Eventually, these works were assembled into my first solo
          exhibition: 《Yizellow》 (《Myself》)in 2019.
        </p>
      </section>
      <section
        class="w-full h-auto flex flex-row items-center justify-center bg-white p-[3vh] relative"
      >
        <div class="w-full h-[40vh]">
          <img
            class="w-full h-full object-contain"
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
      <section
        class="w-full h-auto flex flex-col items-center justify-center bg-[#6456ff] p-[3vh]"
      >
        <p class="my-[1vh] text-white text-xl poppins-medium">#A FEEDBACK</p>

        <p
          class="markazi-text text-white text-l text-start border-b-2 pb-[1vh] border-gray-600"
        >
          &nbsp; &nbsp; &nbsp; &nbsp; After the exhibition, an elder man told me
          that many artists create what they lack, but he saw “pure happiness,
          childishness and innocence” in my work. Indeed, what he said was
          exactly what I was looking for in my work, and this has become my
          rethinking of my creation.
        </p>
      </section>
      <section
        class="bg-white w-full h-auto flex items-center justify-start flex-col p-[3vh]"
      >
        <div
          class="drop-shadow-xl py-[3vh] items-center justify-start flex-col bg-white"
        >
          <div class="flex flex-row items-center justify-center">
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="w-[4vh] mr-[3vh]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
              />
            </a>
            <p class="my-5 self-start text-xl poppins-medium">HOW TO SHOW</p>
          </div>
          <p class="markazi-text text-l pr-[3vh] pl-[3vh]">
            &nbsp; &nbsp; &nbsp; &nbsp;During the process of creating many
            doodles, I began to think about how artists can show their work and
            share it with more people. So, I created an Instagram account for
            Yizellow to share my pieces. Interestingly, this account became the
            only way to save some of my works after my hard drive broke, even
            though some of the images were damaged.
          </p>
          <div class="w-full h-auto grid grid-cols-3 gap-[1vh] p-[1vh]">
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/726/large/yize-huang-2024-11-12-11-53-41.jpg?1731427170"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/885/large/yize-huang-2024-11-12-11-56-52.jpg?1731427388"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/881/large/yize-huang-2024-11-12-11-56-42.jpg?1731427382"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/877/large/yize-huang-2024-11-12-11-56-20.jpg?1731427372"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/869/large/yize-huang-2024-11-12-11-57-39.jpg?1731427360"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/838/large/yize-huang-2024-11-12-11-56-29.jpg?1731427313"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/833/large/yize-huang-2024-11-12-11-55-38.jpg?1731427307"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/824/large/yize-huang-2024-11-12-11-55-31.jpg?1731427298"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/817/large/yize-huang-2024-11-12-11-55-55.jpg?1731427285"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/804/large/yize-huang-2024-11-12-11-56-03.jpg?1731427275"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/730/large/yize-huang-2024-11-12-11-53-52.jpg?1731427178"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/738/large/yize-huang-2024-11-12-11-54-01.jpg?1731427187"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/742/large/yize-huang-2024-11-12-11-54-14.jpg?1731427197"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/748/large/yize-huang-2024-11-12-11-54-25.jpg?1731427204"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/764/large/yize-huang-2024-11-12-11-55-19.jpg?1731427221"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="drop-shadow object-cover aspect-square"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/773/large/yize-huang-2024-11-12-11-55-05.jpg?1731427234"
              />
            </a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="object-cover aspect-square drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/781/large/yize-huang-2024-11-12-11-54-43.jpg?1731427250"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="object-cover aspect-square drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/792/large/yize-huang-2024-11-12-11-55-45.jpg?1731427264"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="object-cover aspect-square drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/859/785/large/yize-huang-2024-11-12-11-54-33.jpg?1731427255"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="object-cover aspect-square drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/859/778/large/yize-huang-2024-11-12-11-54-57.jpg?1731427242"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="object-cover aspect-square drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/860/593/large/yize-huang-2024-11-13-12-18-39.jpg?1731428338"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="object-cover aspect-square drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/860/596/large/yize-huang-2024-11-13-12-18-22.jpg?1731428344"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="object-cover aspect-square drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/860/602/large/yize-huang-2024-11-13-12-18-08.jpg?1731428351"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="object-cover aspect-square drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/860/607/large/yize-huang-2024-11-13-12-17-50.jpg?1731428358"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="object-cover aspect-square drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/860/614/large/yize-huang-2024-11-12-11-57-39.jpg?1731428368"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="object-cover aspect-square drop-shadow"
                src="https://cdna.artstation.com/p/assets/images/images/081/860/622/large/yize-huang-2024-11-12-11-57-21.jpg?1731428376"
            /></a>
            <a href="https://www.instagram.com/yizellow/">
              <img
                class="object-cover aspect-square drop-shadow"
                src="https://cdnb.artstation.com/p/assets/images/images/081/860/625/large/yize-huang-2024-11-12-11-57-11.jpg?1731428384"
            /></a>
          </div>
          <a href="https://www.instagram.com/yizellow/">
            <div
              class="flex flex-row justify-center items-center markazi-text text-l mt-[3vh]"
            >
              <p>see more......</p>
              <img
                class="w-[3vh] ml-[1.5vh]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
              />
            </div>
          </a>
        </div>
      </section>

      <section class="w-full h-auto p-[3vh] bg-white">
        <div
          class="w-full h-auto p-[3vh] border-2 border-slate-400 flex flex-col items-center justify-center"
        >
          <p class="mb-[1.5vh] text-xl poppins-medium">About Tattoos</p>
          <p class="markazi-text text-l mb-[3vh]">
            The doodles of this project were favored by many people, and they
            even wanted to make these pictures into tattoos, so I started
            working as a tattooist. But as more and more people liked it, I
            gradually professionalized the technique and even apprenticed at a
            studio in Sydney, Australia. However, with a lot of practice, I came
            to realize that tattooing was not the right direction for me, and I
            felt a lack of freedom in it, so I decided to give it up, even
            though being a tattooist could be very lucrative.
          </p>
          <img
            class="w-full h-auto object-cover object-center"
            src="@/assets/img/ChipsImg/tattoo.gif"
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
  .icon {
    transition: 0.3s;
  }
  .icon:hover {
    transform: scale(1.5);
    cursor: pointer;
  }

  .doodleImg {
    width: 250px;
    height: 250px;
    margin: 20px;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;
    object-fit: cover;
    transition: transform 0.3s;
  }

  .doodleImg:hover {
    transform: scale(1.2);
  }
}
@media (max-width: 480px) {
}

/* ******************************** */
</style>
