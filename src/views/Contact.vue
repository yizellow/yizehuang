<!-- 把這個放在結束轉場動畫特效 -->
<script></script>

<template>
  <section
    class="relative w-full h-screen bg-white flex row justify-center items-center"
  >
    <img
      class="fixed z-2 w-4/6 saturate-50 opacity-90 mix-blend-difference object-cover overflow-hidden"
      src="@/assets/img/loadingBg.png"
    />
    <p class="orbitron fixed z-3 text-4xl text-white opacity-80 animate-bounce">
      Loading......
    </p>
  </section>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&family=Orbitron:wght@400..900&display=swap");

.orbitron {
  font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: bold;
}
</style>
