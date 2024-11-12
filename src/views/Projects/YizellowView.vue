<script setup>
jQuery(document).ready(function ($) {
  $(".slider-img").on("click", function () {
    $(".slider-img").removeClass("active");
    $(this).addClass("active");
  });
});
</script>

<template>
  <section
    id="intro"
    class="w-full h-[692px] flex p-10 justify-end items-center bg-gray-200"
  >
    <div class="w-3/4 h-1/2">
      <h1 class="poppins-medium text-gray-800 text-center text-2xl">
        3D Modeling, Experiment, Material and Light
      </h1>
      <p class="markazi-text text-gray-900 my-5 text-2xl">
        Russia has steadily been making gains in the eastern Donbas region,
        which Russia’s President Vladimir Putin aims to capture in full.
        Reuters, citing open source data, reported that Russia has been
        advancing at its fastest pace in at least a year. Ukraine’s
        Commander-in-Chief Oleksandr Syrskyi said the situation on the front
        line “remains difficult” and certain areas “require constant renewal of
        resources of Ukrainian units” in a statement on Telegram Saturday
        morning.
      </p>
    </div>
  </section>
  <section class="w-full h-[692px] flex items-center justify-centers flex-col">
    <h1 class="text-2xl mt-5">OIL PAINTING</h1>
    <div class="w-full h-[302px] slider-container p-10">
      <div class="slider-images">
        <div class="slider-img">
          <img
            src="https://cdna.artstation.com/p/assets/images/images/081/847/988/large/yize-huang-2024-11-12-5-50-16.jpg?1731405393"
            alt="1"
          />
          <h1>Mike</h1>
          <div class="details">
            <h2>Mike</h2>
            <p>web3 Developer</p>
          </div>
        </div>
        <div class="slider-img">
          <img
            src="https://cdna.artstation.com/p/assets/images/images/081/847/996/large/yize-huang-2024-11-12-5-49-57.jpg?1731405423"
            alt="2"
          />
          <h1>samite</h1>
          <div class="details">
            <h2>samite</h2>
            <p>wordpress Developer</p>
          </div>
        </div>
        <div class="slider-img">
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/081/847/979/large/yize-huang-2024-11-12-5-53-21.jpg?1731405363"
            alt="3"
          />
          <h1>hashi</h1>
          <div class="details">
            <h2>hashi</h2>
            <p>java Developer</p>
          </div>
        </div>
        <div class="slider-img active">
          <img
            src="https://cdna.artstation.com/p/assets/images/images/081/847/970/large/yize-huang-2024-11-12-5-53-40.jpg?1731405349"
            alt="4"
          />
          <h1>kaity</h1>
          <div class="details">
            <h2>kaity</h2>
            <p>web Developer</p>
          </div>
        </div>
        <div class="slider-img">
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/081/847/983/large/yize-huang-2024-11-12-5-50-41.jpg?1731405378"
            alt="5"
          />
          <h1>lauren</h1>
          <div class="details">
            <h2>lauren</h2>
            <p>php Developer</p>
          </div>
        </div>
        <div class="slider-img">
          <img
            src="https://cdna.artstation.com/p/assets/images/images/081/848/000/large/yize-huang-2024-11-12-5-49-49.jpg?1731405438"
            alt="6"
          />
          <h1>ryan</h1>
          <div class="details">
            <h2>ryan</h2>
            <p>seo Developer</p>
          </div>
        </div>
        <div class="slider-img">
          <img
            src="https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg"
            alt="7"
          />
          <h1>dakes</h1>
          <div class="details">
            <h2>dakes</h2>
            <p>sql Developer</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    id="Doodle"
    class="w-full h-[692px] bg-slate-500 flex items-center justify-centers flex-col"
  >
    <h1 class="text-2xl mt-5">Doodle</h1>
    <div
      class="m-10 w-full h-full bg-pink-500 flex items-center justify-centers flex-row"
    >
      <img class="doodleImg" />
      <img class="doodleImg" />
      <img class="doodleImg" />
      <img class="doodleImg" />
      <img class="doodleImg" />
      <img class="doodleImg" />

    </div>
  </section>
  <section class="w-full h-[692px] bg-slate-200"></section>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap");
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

.doodleImg {
  width: 300px;
  height: 300px;
  margin: 20px;
  background-color: aliceblue;
  border-radius: 10px;
}

.slider-container {
  width: 100%;
  height: 90%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}
.slider-images {
  display: flex;
  align-items: center;
  gap: 21px;
}
.slider-images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}
.slider-img {
  width: 110px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  transition: 0.7s ease;
}
.slider-images .slider-img:first-child,
.slider-images .slider-img:last-child {
  height: 300px;
}
.slider-images .slider-img:nth-child(2),
.slider-images .slider-img:nth-child(6) {
  height: 430px;
}
.slider-images .slider-img:nth-child(3),
.slider-images .slider-img:nth-child(4),
.slider-images .slider-img:nth-child(5) {
  height: 500px;
}
.slider-container h1 {
  font-family: "Jost", sans-serif;
  font-size: 40px;
  font-weight: 700;
  text-align: left;
  text-transform: uppercase;
  color: #fff;
  position: absolute;
  top: 50%;
  left: -10%;
  transform: rotate(270deg);
  transition: 0.7s ease;
}
.details {
  position: absolute;
  bottom: 43px;
  left: 43px;
}
.details h2 {
  font-family: "Jost", sans-serif;
  font-size: 26px;
  font-weight: 700;
  text-align: left;
  line-height: 44px;
  text-align: left;
  color: #fff;
  text-transform: uppercase;
  transition: 0.7s ease;
  display: none;
}
.details p {
  font-family: "Jost", sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  line-height: 33px;
  text-align: left;
  color: #fff;
  text-transform: uppercase;
  transition: 0.7s ease;
  display: none;
}
.slider-img.active {
  width: 450px !important;
  height: 550px !important;
}
.slider-img.active h1 {
  display: none;
}
.slider-img.active .details p,
.slider-img.active .details h2 {
  display: block;
}
</style>
