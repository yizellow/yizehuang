<script setup>
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Navbar />
  <main class="pt-14">
    <RouterView />
  </main>
</template>

<style scoped></style>
