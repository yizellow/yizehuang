<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    // 引入 DragScroll 並初始化
    const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;
    const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

    class DragScroll {
      constructor(obj) {
        this.el = document.querySelector(obj.el);
        this.wrap = this.el.querySelector(obj.wrap);
        this.items = this.el.querySelectorAll(obj.item);
        this.bar = this.el.querySelector(obj.bar);
        this.init();
      }

      init() {
        this.progress = 0;
        this.speed = 0;
        this.oldX = 0;
        this.x = 0;
        this.playrate = 0;

        this.bindings();
        this.events();
        this.calculate();
        this.raf();
      }

      bindings() {
        [
          "events",
          "calculate",
          "raf",
          "handleWheel",
          "move",
          "raf",
          "handleTouchStart",
          "handleTouchMove",
          "handleTouchEnd",
        ].forEach((method) => {
          this[method] = this[method].bind(this);
        });
      }

      calculate() {
        this.progress = 0;
        this.wrapWidth = this.items[0].clientWidth * this.items.length;
        this.wrap.style.width = `${this.wrapWidth}px`;
        this.maxScroll = this.wrapWidth - this.el.clientWidth;
      }

      handleWheel(e) {
        this.progress += e.deltaY;
        this.move();
      }

      handleTouchStart(e) {
        e.preventDefault();
        this.dragging = true;
        this.startX = e.clientX || e.touches[0].clientX;
        this.el.classList.add("dragging");
      }

      handleTouchMove(e) {
        if (!this.dragging) return false;
        const x = e.clientX || e.touches[0].clientX;
        this.progress += (this.startX - x) * 2.5;
        this.startX = x;
        this.move();
      }

      handleTouchEnd() {
        this.dragging = false;
        this.el.classList.remove("dragging");
      }

      move() {
        this.progress = clamp(this.progress, 0, this.maxScroll);
      }

      events() {
        window.addEventListener("resize", this.calculate);
        window.addEventListener("wheel", this.handleWheel);

        this.el.addEventListener("touchstart", this.handleTouchStart);
        window.addEventListener("touchmove", this.handleTouchMove);
        window.addEventListener("touchend", this.handleTouchEnd);

        window.addEventListener("mousedown", this.handleTouchStart);
        window.addEventListener("mousemove", this.handleTouchMove);
        window.addEventListener("mouseup", this.handleTouchEnd);
        document.body.addEventListener("mouseleave", this.handleTouchEnd);
      }

      raf() {
        this.x = lerp(this.x, this.progress, 0.1);
        this.playrate = this.x / this.maxScroll;

        this.wrap.style.transform = `translateX(${-this.x}px)`;
        this.bar.style.transform = `scaleX(${0.18 + this.playrate * 0.82})`;

        this.speed = Math.min(100, this.oldX - this.x);
        this.oldX = this.x;

        this.scale = lerp(this.scale, this.speed, 0.1);
        this.items.forEach((item) => {
          item.style.transform = `scale(${1 - Math.abs(this.speed) * 0.005})`;
          item.querySelector("img").style.transform = `scaleX(${
            1 + Math.abs(this.speed) * 0.004
          })`;
        });
      }
    }

    const scroll = new DragScroll({
      el: ".slider",
      wrap: ".slider-wrapper",
      item: ".slider-item",
      bar: ".slider-progress-bar",
    });

    const animateScroll = () => {
      requestAnimationFrame(animateScroll);
      scroll.raf();
    };
    animateScroll();
  },
};
</script>

<template>
  <main>
    <nav>
      <RouterLink to="/Project/Chips"
        ><button class="subtitle">Chips</button></RouterLink
      >
      <br />
      <RouterLink to="/Project/ddd"
        ><button class="subtitle">3D Modeling</button></RouterLink
      >
      <br />
      <RouterLink to="/Project/Yizellow"
        ><button class="subtitle">Yizellow</button></RouterLink
      >
      <br />
      <RouterLink to="/Project/FilmCamera"
        ><button class="subtitle">Travel and my film camera</button></RouterLink
      >
    </nav>
    <a id="showreel" href="#">Showreel</a>
    <div class="slider">
      <div class="slider-wrapper">
        <RouterLink to="/Project/Chips">
          <div class="slider-item">
            <figure>
              <img
                src="https://cdna.artstation.com/p/assets/images/images/081/914/924/large/yize-huang-2024-11-11-8-47-48.jpg?1731558884"
                alt=""
              />
            </figure>
            <p class="title">#Chips</p>
          </div>
        </RouterLink>

        <RouterLink to="/Project/Yizellow">
          <div class="slider-item">
            <figure>
              <img
                src="https://cdna.artstation.com/p/assets/images/images/082/336/000/large/yize-huang-2023-07-07-2-05-58.jpg?1732707397"
                alt=""
              />
            </figure>
            <p class="title">#YIZELLOE</p>
          </div>
        </RouterLink>

        <RouterLink to="/Project/ddd">
          <div class="slider-item">
            <figure>
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/082/499/223/large/yize-huang-2024-12-03-12-35-13.jpg?1733157350"
                alt=""
              />
            </figure>
            <p class="title">#3D Modeling</p>
          </div>
        </RouterLink>

        <RouterLink to="/Project/FilmCamera"
          ><div class="slider-item">
            <figure>
              <img
                src="https://cdna.artstation.com/p/assets/images/images/082/332/470/large/yize-huang-2024-11-27-5-48-00.jpg?1732701058"
                alt=""
              />
            </figure>
            <p class="title">#Travel and my film camera</p>
          </div>
        </RouterLink>

        <div class="slider-item">
          <figure>
            <img
              src="https://cdna.artstation.com/p/assets/images/images/082/499/478/large/yize-huang-2024-12-03-12-39-17.jpg?1733157609"
              alt=""
            />
          </figure>
          <p class="title">#Light Installation &nbsp; &nbsp;(Upcoming...)</p>
        </div>
      </div>
      <div class="slider-progress">
        <div class="slider-progress-bar"></div>
      </div>
    </div>
  </main>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Geo:ital@0;1&family=Roboto&display=swap");
.subtitle:hover {
  color: rgb(0, 235, 55);
}
.title {
  text-align: start;
  font-size: 26px;
  font-weight: 200;
  font-family: "Geo", sans-serif;
  font-style: normal;
}

main {
  top: -56px;
  height: 80vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Neue Montreal", serif;
  background: white;
}

nav {
  position: fixed;
  bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  padding: 2em;
  text-decoration: none;
  color: black;
  font-size: 16px;
}

#showreel {
  position: absolute;
  text-decoration: none;
  color: black;
  bottom: 0;
  right: 0;
  padding: 2em 1em;
  font-size: 16px;
}

.slider {
  width: 100%;
  cursor: grab;
}

.slider-wrapper {
  white-space: nowrap;
}

.slider-item {
  display: inline-block;
  width: 40vw;
  padding: 3vw;
}

.slider-item figure {
  position: relative;
  padding-bottom: 55%;
  overflow: hidden;
  object-position: bottom;
}

.slider-item figure img {
  position: absolute;
  width: 100%;
  object-fit: cover;
}
.slider-item:hover {
  opacity: 0.8;
  filter: blur(0.5px);
}

.slider-progress {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 20vw;
  height: 2px;
  margin: 2em;
  background: rgba(50, 50, 50, 0.1);
}

.slider-progress-bar {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(132, 121, 253, 0.8);
  transform: scaleX(0);
  transform-origin: 0% 0%;
}
</style>
