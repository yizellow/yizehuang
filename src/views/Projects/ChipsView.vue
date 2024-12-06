<script setup></script>
<script setup></script>
<template>
  <section
    class="relative w-full h-[100vh] flex justify-center items-center z-0"
  >
    <video
      class="w-full h-full object-cover"
      src="@/assets/img/ChipsImg/chipHero.mp4"
      controls
      autoplay
      loop
      muted
    ></video>
  </section>
  <section class="w-full h-[692px] bg-neutral-900 flex"></section>

  <section
    class="relative w-full h-[692px] bg-neutral-200 flex items-center"
  ></section>
  <section class="w-full h-[692px] bg-neutral-900"></section>

  <section class="w-full h-[692px] bg-neutral-900"></section>
</template>

<style scoped>
.tagg {
  opacity: 0.2;
  color: white;
  background-color: blue;
  border-radius: 5px;
}
.tagg:hover {
  opacity: 0.9;
  color: white;
  background-color: rgb(18, 18, 18);
}
</style>
