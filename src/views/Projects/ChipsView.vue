<script setup></script>
<script setup></script>
<template>
  <section
    class="relative w-full h-[100vh] flex justify-center items-center z-0"
  >
    <video
      class="w-full h-full object-cover z-1 inset-0"
      src="@/assets/img/ChipsImg/chipHero.mp4"
      controls
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
  <section class="w-full h-[100vh] bg-red-900 flex z-0 relative">
    <img
      class="absolute z-2 object-cover left-0 right-0 w-1/2 h-full"
      src="https://cdna.artstation.com/p/assets/images/images/082/633/124/large/yize-huang-2024-12-06-9-01-23.jpg?1733490357"
    />
    <img
      class="absolute z-2 object-cover top-0 right-0 w-1/2 h-full object-center"
      src="https://cdna.artstation.com/p/assets/images/images/082/633/132/large/yize-huang-2024-12-06-9-03-18.jpg?1733490373"
    />
  </section>

  <section
    class="relative w-full h-[692px] bg-neutral-200 flex items-center"
  ></section>
  <section class="w-full h-[692px] bg-neutral-300 grid">
    <div class="right-0 h-full col-span-1 bg-blue-400"></div>
  </section>

  <!-- ------------------------------- -->

  <section class="w-full h-[692px] bg-neutral-900 z-0 relative golden">
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
