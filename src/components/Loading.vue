<template>
  <div class="loadng bg-purple-700 w-[100vw] h-[100vh]">
    <p class="text-2xl text-red-500">loading</p>
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "commimg",
    },
  },
};
</script>

<style></style>
