<template>
  <main class="mainbox">
    <section class="note flex items-center justify-center">
      <p>
        The layout for tablets and mobile devices is currently being updated.
      </p>
    </section>
    <section>
      <div id="overlay-light" class="overlay"></div>

      <div id="overlay-dark" class="overlay"></div>
      <div class="content">
        <div class="nav row">
          <div class="col">(background)</div>
          <div class="col">(contact)</div>
          <div class="col">(My Passion)</div>
          <div class="col">(skills)</div>
          <div class="col">(Projects)</div>
        </div>
        <div class="divider nav-divider"></div>
        <div class="row">
          <div class="col">Taipei National University of the Arts</div>
          <div class="col">whatsApp:</div>
          <div class="col">Art History</div>
          <div class="col">Front-End</div>
          <div class="col">Chips</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">Fine Art Dept.</div>
          <div class="col">+886 981488850</div>
          <div class="col">Art Theory</div>
          <div class="col">Vue</div>
          <div class="col">Yizellow</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">Major in Art History and Visual Culture</div>
          <div class="col"></div>
          <div class="col">Curating</div>
          <div class="col">Blender</div>
          <div class="col">DDD</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col">Unity</div>
          <div class="col">Travel and my film camera</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col"></div>
          <div class="col">Email:</div>
          <div class="col">3D Modeling</div>
          <div class="col"></div>
          <div class="col">Upcoming...</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col"></div>
          <div class="col">yize0926@gmail.com</div>
          <div class="col"></div>
          <div class="col">HTML CSS JS</div>
          <div class="col"></div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col">Ｗriting</div>
          <div class="col">PS AE AI PR</div>
          <div class="col"></div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">Hualien Senior High School, Taiwan</div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">Science track</div>
          <div class="col"></div>
          <div class="col">Literature</div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col">Philosophy</div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
        <div class="divider"></div>
      </div>
    </section>
    <section class="banBox opacity-">
      <div class="part1">
        <video
          class="w-auto h-full grayscale contrast-200"
          src="@/assets/img/loadingLogo.mp4"
          autoplay
          loop
          muted
        ></video>
        <p class="ban">RANDOM</p>
      </div>
      <div class="part2">
        <video
          class="w-auto h-full grayscale contrast-200"
          src="@/assets/img/loadingLogo.mp4"
          autoplay
          loop
          muted
        ></video>
        <p class="ban">EVALUATION</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";
onMounted(() => {
  gsap.to("#overlay-dark", {
    duration: 1.5,
    top: "-100%",
    ease: "power3.inOut",
    delay: 4,
  });
  gsap.from(".divider", {
    duration: 1,
    scaleX: 0,
    ease: "power3.inOut",
    delay: 0.5,
    stagger: {
      amount: 1,
    },
  });

  gsap.from(".row > .col", {
    duration: 1,
    opacity: 0,
    y: 40,
    ease: "power3.inOut",
    delay: 2,
    stagger: {
      amount: 1.5,
    },
  });
});
</script>
<style scoped>
.note {
  width: 100vw;
  height: 5vh;
  background-color: red;
  color: white;
}

.banBox {
  width: 100%;
  overflow: hidden;
  height: calc(45vh - 56px);
  display: flex;
  position: relative;
  filter: invert(100%);
}

.part1,
.part2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
}

.part1 {
  background-color: black;
  animation: marquee-animation 30s linear infinite;
  animation-delay: -15s; /* 延遲啟動 */
}

.part2 {
  background-color: black;
  animation: marquee-animation 30s linear infinite;
}

@keyframes marquee-animation {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.ban {
  text-align: center;
  margin-left: 140px;
  font-size: 6rem;
  font-family: "Neue Montreal";
  text-align: center;
  font-weight: 800;
  letter-spacing: 6px;
  color: black;
  opacity: 0.8;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.mainbox {
  font-family: "Neue Montreal", sans-serif;
  display: block;
  margin-top: 56px;
}

#overlay-light {
  position: absolute;
  width: 100vw;
  height: 50vh;
  background: white;
  z-index: 1;
}

#overlay-dark {
  position: absolute;
  width: 100vw;
  height: 50vh;
  background: rgb(0, 223, 0);
  z-index: 2;
}

.content {
  width: 100%;
  height: 50vh;
  padding: 1em 0;
}

.content > * {
  position: relative;
  z-index: 3;
  mix-blend-mode: difference;
  color: #fff;
}

.divider {
  width: 100%;
  height: 1px;
  background: #fff;
  margin: 0.2em 0;
}

.nav {
  text-transform: uppercase;
}

.nav-divider {
  margin-top: 1em;
}

.row {
  width: 100%;
  height: 20px;
  display: flex;
  padding: 0 2em;
}

.row > .col {
  position: relative;
  flex: 1;
}

.row > .col:first-child {
  flex: 2;
}
</style>
