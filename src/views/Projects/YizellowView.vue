<script setup></script>
<template>
  <section class="w-full h-[692px] bg-slate-500">
    <p class="text-2xl">Yizellow</p>
  </section>
  <section id="intro" class="w-full h-[692px] bg-white"></section>
  <section id="oilPaiting" class="w-full h-[692px] bg-slate-500"></section>
  <section class="w-full h-[692px] bg-slate-500"></section>
  <section class="w-full h-[692px] slider-container">
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
  </section>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap");
.slider-container {
  width: 100%;
  height: 100vh;
  background-image: url("Images/bg-img.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 480px;
}
.slider-images .slider-img:nth-child(2),
.slider-images .slider-img:nth-child(6) {
  height: 560px;
}
.slider-images .slider-img:nth-child(3),
.slider-images .slider-img:nth-child(4),
.slider-images .slider-img:nth-child(5) {
  height: 665px;
}
h1 {
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
  width: 766px !important;
  height: 750px !important;
}
.slider-img.active h1 {
  display: none;
}
.slider-img.active .details p,
.slider-img.active .details h2 {
  display: block;
}
</style>
