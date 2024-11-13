<script setup>
import { Icon } from "@iconify/vue";

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
  <section class="w-full h-[692px] flex items-center justify-center flex-col">
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
            src="https://cdna.artstation.com/p/assets/images/images/081/859/350/large/yize-huang-2024-11-12-11-49-09.jpg?1731426583"
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
    class="shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] w-full h-auto bg-gray-100 flex items-center justify-center flex-col"
  >
    <h1 class="text-2xl mt-5">Doodle</h1>
    <div
      class="flex-wrap m-10 w-full h-full bg-lightgray-100 flex items-centers justify-center flex-row"
    >
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/859/726/large/yize-huang-2024-11-12-11-53-41.jpg?1731427170"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdnb.artstation.com/p/assets/images/images/081/859/885/large/yize-huang-2024-11-12-11-56-52.jpg?1731427388"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdnb.artstation.com/p/assets/images/images/081/859/881/large/yize-huang-2024-11-12-11-56-42.jpg?1731427382"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdnb.artstation.com/p/assets/images/images/081/859/877/large/yize-huang-2024-11-12-11-56-20.jpg?1731427372"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdnb.artstation.com/p/assets/images/images/081/859/869/large/yize-huang-2024-11-12-11-57-39.jpg?1731427360"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/859/838/large/yize-huang-2024-11-12-11-56-29.jpg?1731427313"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdnb.artstation.com/p/assets/images/images/081/859/833/large/yize-huang-2024-11-12-11-55-38.jpg?1731427307"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/859/824/large/yize-huang-2024-11-12-11-55-31.jpg?1731427298"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdnb.artstation.com/p/assets/images/images/081/859/817/large/yize-huang-2024-11-12-11-55-55.jpg?1731427285"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/859/804/large/yize-huang-2024-11-12-11-56-03.jpg?1731427275"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/859/730/large/yize-huang-2024-11-12-11-53-52.jpg?1731427178"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/859/738/large/yize-huang-2024-11-12-11-54-01.jpg?1731427187"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/859/742/large/yize-huang-2024-11-12-11-54-14.jpg?1731427197"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/859/748/large/yize-huang-2024-11-12-11-54-25.jpg?1731427204"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/859/764/large/yize-huang-2024-11-12-11-55-19.jpg?1731427221"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdnb.artstation.com/p/assets/images/images/081/859/773/large/yize-huang-2024-11-12-11-55-05.jpg?1731427234"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/859/778/large/yize-huang-2024-11-12-11-54-57.jpg?1731427242"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdnb.artstation.com/p/assets/images/images/081/859/781/large/yize-huang-2024-11-12-11-54-43.jpg?1731427250"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/859/792/large/yize-huang-2024-11-12-11-55-45.jpg?1731427264"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdnb.artstation.com/p/assets/images/images/081/859/785/large/yize-huang-2024-11-12-11-54-33.jpg?1731427255"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdnb.artstation.com/p/assets/images/images/081/860/593/large/yize-huang-2024-11-13-12-18-39.jpg?1731428338"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/860/596/large/yize-huang-2024-11-13-12-18-22.jpg?1731428344"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/860/602/large/yize-huang-2024-11-13-12-18-08.jpg?1731428351"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdnb.artstation.com/p/assets/images/images/081/860/607/large/yize-huang-2024-11-13-12-17-50.jpg?1731428358"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/860/614/large/yize-huang-2024-11-12-11-57-39.jpg?1731428368"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/860/622/large/yize-huang-2024-11-12-11-57-21.jpg?1731428376"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdnb.artstation.com/p/assets/images/images/081/860/625/large/yize-huang-2024-11-12-11-57-11.jpg?1731428384"
      />
      <img
        class="doodleImg drop-shadow"
        src="https://cdna.artstation.com/p/assets/images/images/081/860/708/large/yize-huang-2024-11-13-12-21-14.jpg?1731428504"
      />
    </div>
    <Icon
      icon="iconamoon:arrow-up-6-circle-light"
      width="45"
      class="cursor-pointer justify-self-end m-10 hover:scale-150 transition-transform duration-300"
      id="canceled"
      color="lightgray"
    />
  </section>
  <section
    class="w-full h-[692px] p-5 flex items-center justify-center flex-col"
  >
    <p class="text-2xl mb-5">Tattoo</p>
    <div
      id="gridBox"
      class="w-full h-full grid grid-cols-5 grid-rows-3 gap-6 p-3"
    >
      <div
        class="col-span-1 row-span-2 gridImg bg-[url('https://cdna.artstation.com/p/assets/images/images/081/883/882/large/yize-huang-2024-11-13-5-25-22.jpg?1731489978')]"
      ></div>
      <div
        class="row-span-1 col-span-1 gridImg bg-[url('https://cdna.artstation.com/p/assets/images/images/081/883/884/large/yize-huang-2024-11-13-5-24-19.jpg?1731489983')]"
      ></div>
      <div
        class="col-span-1 row-span-2 gridImg bg-[url('https://cdna.artstation.com/p/assets/images/images/081/883/890/large/yize-huang-2024-11-13-5-23-43.jpg?1731490003')]"
      ></div>
      <div
        class="row-span-1 col-span-1 gridImg bg-[url('https://cdnb.artstation.com/p/assets/images/images/081/883/885/large/yize-huang-2024-11-13-5-24-11.jpg?1731489989')]"
      ></div>
      <div
        class="col-span-1 row-span-1 gridImg bg-[url('https://cdnb.artstation.com/p/assets/images/images/081/883/887/large/yize-huang-2024-11-13-5-24-00.jpg?1731489996')]"
      ></div>
      <div
        class="col-span-1 row-span-2 gridImg bg-[url('https://cdnb.artstation.com/p/assets/images/images/081/883/895/large/yize-huang-2024-11-13-5-23-32.jpg?1731490008')]"
      ></div>
      <div
        class="col-span-1 row-span-2 gridImg bg-[url('https://cdna.artstation.com/p/assets/images/images/081/883/898/large/yize-huang-2024-11-13-5-24-53.jpg?1731490026')]"
      ></div>
      <div
        class="col-span-1 row-span-2 gridImg bg-[url('https://cdnb.artstation.com/p/assets/images/images/081/883/897/large/yize-huang-2024-11-13-5-24-39.jpg?1731490018')]"
      ></div>
      <div
        class="col-span-1 row-span-1 gridImg bg-[url('https://cdna.artstation.com/p/assets/images/images/081/883/896/large/yize-huang-2024-11-13-5-24-27.jpg?1731490014')]"
      ></div>
      <div
        class="col-span-1 row-span-1 gridImg bg-[url('https://cdnb.artstation.com/p/assets/images/images/081/896/775/large/yize-huang-2024-11-14-12-09-44.jpg?1731514213')]"
      ></div>
    </div>
  </section>
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
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
  object-fit: cover;
}
/* ******************************** */
.gridImg {
  border-radius: 5px;
  background-color: aqua;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.gridImg:hover {
  filter: blur(1px);
  opacity: 0.8;
}

/* ******************************** */
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
