<script setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const cross = ref(false);
const menusign = ref(true);
const menu = ref(false);

const close = () => {
  menu.value = false;
  menusign.value = true;
  cross.value = false;
};
const open = () => {
  menu.value = true;
  menusign.value = false;
  cross.value = true;
};
</script>
<template>
  <main>
    <Icon
      icon="akar-icons:cross"
      width="30"
      color="blueviolet"
      v-if="cross"
      @click="close"
    />
    <Icon
      icon="meteor-icons:bars"
      width="30"
      color="blueviolet"
      v-if="menusign"
      @click="open"
    />
    <p class="yizehuang">Yize Huang</p>
    <RouterLink to="/" class="tag"
      ><img class="logo" src="../assets/img/logo.png"
    /></RouterLink>
  </main>
  <section v-if="menu">
    <RouterLink to="/"><div class="navtext">Home</div></RouterLink>
    <RouterLink to="/Project"><div class="navtext">Project</div></RouterLink>
    <RouterLink to="/AboutMe"><div class="navtext">About Me</div></RouterLink>
  </section>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Geo:ital@0;1&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&display=swap");

main {
  top: 0;
  width: 100%;
  height: 6vh;
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  z-index: 100;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
}

#menu {
  justify-self: start;
}

.yizehuang {
  font-family: "Geo", sans-serif;
  color: rgb(0, 223, 0);
  opacity: 0.8;
  font-size: 8px;
  padding-top: 10px;
  letter-spacing: 5px;
}
.tag {
  max-height: 100%;
  height: auto;
  justify-self: end;
}
.logo {
  max-width: 35px;
  height: auto;
}
section {
  width: 100%;
  height: 94vh;
  position: fixed;
  z-index: 100;
  top: 6vh;
  padding-top: 3vh;
  background-color: rgb(0, 223, 0, 0.85);
}
.navtext {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  margin: 12px 20px;
  color: blueviolet;
  opacity: 0.8;
  cursor: pointer;
  border-bottom: 1.5px #000 solid;
}
</style>
