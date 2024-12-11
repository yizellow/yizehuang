<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <nav
      class="z-40 fixed top-0 left-0 right-0 flex flex-row w-full items-center justify-center h-14 drop-shadow-lg"
    >
      <RouterLink to="/"><img src="../assets/img/logo.png" /></RouterLink>

      <RouterLink to="/"><div class="navtext">Home</div></RouterLink>
      <RouterLink to="/Project"><div class="navtext">Project</div></RouterLink>
      <RouterLink to="/AboutMe"><div class="navtext">About Me</div></RouterLink>
      <!-- <RouterLink to="/Contact"><div class="navtext">Contact</div></RouterLink> -->
      <!-- <div class="navtext">Member</div> -->
    </nav>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Geo:ital@0;1&family=Roboto&display=swap");

.navtext {
  font-family: "Geo", sans-serif;
  font-style: normal;
  font-size: 1.6rem;
  margin: auto 30px;
  color: blueviolet;
  opacity: 0.8;
  cursor: pointer;
}
.navtext:hover {
  color: rgb(0, 223, 0);
}
img {
  width: 45px;
  height: 45px;
  margin-right: 100px; /* 相当于 mr-6 的间距 */
}
nav {
  /* background-color: rgba(255, 255, 255, 0.8); */
  background-color: yellow;
}

@media (max-width: 480px) {
  .navtext {
    font-size: 0.9rem;
    margin: auto 3px;
  }
  .logo {
    margin-right: 10px;
  }
  nav {
    height: auto;
  }
}
</style>
