<template>
  <main class="w-full h-full bg-fuchsia-200">
    <p>Sorry, this Page does not exist!</p>
    <RouterLink to="/"><div class="navtext">Back to Home</div></RouterLink>
  </main>
</template>
<script setup></script>
<style scoped>
p {
  font-size: 8 rem;
  text-align: center;
  color: black;
}
.navtext:hover {
  color: rgb(0, 223, 0);
}
</style>
