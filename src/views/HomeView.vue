<template>
  <main class="mainbox">
    <section>
      <div id="overlay-light" class="overlay"></div>

      <div id="overlay-dark" class="overlay"></div>
      <div class="content">
        <div class="nav row">
          <div class="col">(refix studio)</div>
          <div class="col">(contact)</div>
          <div class="col">(services)</div>
          <div class="col">(selected clients)</div>
          <div class="col">(members)</div>
        </div>
        <div class="divider nav-divider"></div>
        <div class="row">
          <div class="col">A collective of creative thinkers making things</div>
          <div class="col">+212 457 3035</div>
          <div class="col">Art History</div>
          <div class="col">Front-End</div>
          <div class="col">Alejandro Torres Viera</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">smarter, newer, and more memorable.</div>
          <div class="col"></div>
          <div class="col">Art Theory</div>
          <div class="col">Vue</div>
          <div class="col">Annie Panousopoulos</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col"></div>
          <div class="col">USA</div>
          <div class="col"></div>
          <div class="col">Blender</div>
          <div class="col">Konstantinos Riginos</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">We believe that function is the substance of</div>
          <div class="col">214 Sullivan St #3B</div>
          <div class="col">Creative Direction</div>
          <div class="col">Unity</div>
          <div class="col">Ryan Levitan</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">
            aesthetic experience. This principle guides clearer
          </div>
          <div class="col">New York, NY 10012</div>
          <div class="col">Design Direction</div>
          <div class="col"></div>
          <div class="col">Tucker Shanley</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">user interfaces, stronger branding devices and</div>
          <div class="col"></div>
          <div class="col"> </div>
          <div class="col">HTML CSS JS</div>
          <div class="col">Zachary Ruden</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">more cohesive design systems. Whether</div>
          <div class="col">For Job, Press and</div>
          <div class="col">Motion</div>
          <div class="col">PS AE AI Pr</div>
          <div class="col"></div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">
            designing multi-platform experiences or building
          </div>
          <div class="col">General inquiries:</div>
          <div class="col">Prototyping</div>
          <div class="col">Univision</div>
          <div class="col"></div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">
            enterprise applications, we make things to solve
          </div>
          <div class="col"></div>
          <div class="col">Product Strategy</div>
          <div class="col">ProVen</div>
          <div class="col"></div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">problems.</div>
          <div class="col">hello@fix.studio</div>
          <div class="col">Testing & Research</div>
          <div class="col">Social Studies</div>
          <div class="col"></div>
        </div>
        <div class="divider"></div>
      </div>
    </section>

    <section class="banBox">
      <video
        class="w-auto h-full mix-blend-luminosity"
        src="@/assets/img/loadingLogo.mp4"
        autoplay
        loop
        muted
      ></video>
      <p class="ban">RANDOM AND EVALUATION</p>
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
.banBox {
  width: 100%;
  overflow: hidden;
  height: calc(50vh - 56px);
  background-color: blueviolet;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: marquee-animation 40s linear infinite;
}
@keyframes marquee-animation {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
.ban {
  text-align: center;
  padding: 5px;
  font-size: 5rem;
  font-family: "Neue Montreal";
  font-weight: 800;
  letter-spacing: -10px;
  color: #000;
  mix-blend-mode: normal !important;
  color: rgb(0, 223, 0);
}

.banPic {
  width: 40%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.mainbox {
  font-family: "Neue Montreal", sans-serif;
  display: block;
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
