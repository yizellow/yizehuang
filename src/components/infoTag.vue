<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
defineProps({
  title: String,
  subtle: String,
  content: String,
});
// const title = "#Plastic wrap protection";
// const subtle = "Laocoon and his sons";
// const content = `Ukraine’s Commander-in-Chief Oleksandr Syrskyi said the situation on the
//       front line “remains difficult” and certain areas “require constant renewal
//       of resources of Ukrainian units” in a statement on Telegram Saturday
//       morning.`;

const showInfo = ref(false);
const canceledInfo = () => {
  showInfoTag.value = true;
  showInfo.value = false;
};
const showInfoTag = ref(true);
const openInfo = () => {
  showInfoTag.value = false;
  showInfo.value = true;
};
</script>
<template>
  <!--          content          -->


  
  <div
    v-if="showInfo"
    class="box rounded backdrop-blur-sm absolute top-1/2 right-1 -translate-y-1/2 -translate-x-1/4 w-1/4 h-auto bg-green-400/60 p-4 z-10"
  >
    <Icon
      icon="material-symbols:close-rounded"
      width="23"
      class="xx cursor-pointer justify-self-end m-0 hover:scale-150 transition-transform duration-300"
      @click="canceledInfo"
    />

    <h1 class="poppins-medium text-gray-700 text-center text-base tp">
      {{ title }}<br />
      {{ subtle }}
    </h1>
    <p class="markazi-text text-purple-900 my-3 text-2xl text-left ml-3 pp">
      {{ content }}
    </p>
  </div>
  <!--            tags              -->

  <div
    id="tag"
    class="hover:opacity-35 backdrop-blur-sm h-10 p-1 flex row items-center absolute top-3/4 right-8 -translate-y-1/2 z-10 cursor-pointer bg-white/5"
    v-if="showInfoTag"
    @click="openInfo"
  >
    <Icon
      icon="material-symbols:arrow-circle-left-rounded"
      width="23"
      color="white"
      class="icon mr-2 opacity-70 cursor-pointer ="
    />
    <div class="text-green-400 opacity-80 text-2xl m-1 info">Info</div>
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

@media (max-width: 480px) {

  .icon {
    width: 20px;
  }

  .tp {
    font-weight: 500;
    margin-left: 0.8rem;
    padding: 0;
    text-align: left;
    font-family: "roboto-light";
  }
  .box {
    position: absolute;
    width: 50%;
    /* height: 10px; */
    top: 70%;
    padding-right: 10px;
    padding-left: 10px;

    display: flex;
    flex-direction: column;
    z-index: 50;
    /* flex-wrap: wrap; */
  }
  .xx {
    width: 20px;
    margin: 0.5rem;
  }
}
</style>
