<script setup></script>
<template>
  <div class="bg-neutral-900">
    <section class="h-[692px] w-full flex items-center justify-center">
      <img
        class="w-3/4"
        src="https://cdna.artstation.com/p/assets/images/images/081/756/450/large/yize-huang-.jpg?1731128444"
      />
    </section>

    <section>
      <div class="banner">
        <div class="slider" style="--quantity: 12">
          <div class="item" style="--position: 1">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt=""
            />
          </div>
          <div class="item" style="--position: 2">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt=""
            />
          </div>
          <div class="item" style="--position: 3">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt=""
            />
          </div>
          <div class="item" style="--position: 4">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt=""
            />
          </div>
          <div class="item" style="--position: 5">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt=""
            />
          </div>
          <div class="item" style="--position: 5">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt=""
            />
          </div>
          <div class="item" style="--position: 7">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt=""
            />
          </div>
          <div class="item" style="--position: 8">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt=""
            />
          </div>
          <div class="item" style="--position: 9">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt=""
            />
          </div>
          <div class="item" style="--position: 10">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt=""
            />
          </div>
          <div class="item" style="--position: 11">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt=""
            />
          </div>
          <div class="item" style="--position: 12">
            <img
              src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section class="h-[692px] bg-slate-500"></section>
    <section class="h-[692px]"></section>
  </div>
</template>
<style scoped>
.banner {
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.banner .slider {
  position: absolute;
  width: 200px;
  height: 250px;
  top: 10%;
  left: calc(50% - 100px);
  transform-style: preserve-3d;
  transform: perspective(1000px);
  animation: autoRun 20s linear infinite;
  z-index: 2;
}
@keyframes autoRun {
  from {
    transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
  }
  to {
    transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
  }
}

.banner .slider .item {
  position: absolute;
  inset: 0 0 0 0;
  transform: rotateY(
      calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
    )
    translateZ(550px);
}
.banner .slider .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
