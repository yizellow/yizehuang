<template>
  <div class="background" @mousemove="handleMouseMove" ref="background">
    <canvas ref="particleCanvas"></canvas>
    <div class="fog-layer" ref="fog"></div>
    <div class="content">
      <div
        class="w-[280px] h-[320px] flex-col flex items-center justify-center bg-white/15"
      >
        <img
          class="w-[180px] h-[180px]"
          src="https://cdnb.artstation.com/p/assets/images/images/081/756/471/large/yize-huang-2-3chips2.jpg?1731128477"
        />
        <br />
        <RouterLink to="/Project/Chips"
          ><p class="text-4xl">Chips</p></RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "BlackWhiteParticlesWithFog",
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      particleArray: [],
      particleCount: 100, // 粒子數量
    };
  },
  mounted() {
    this.initParticles();
    this.animateFog();
    window.addEventListener("resize", this.resizeCanvas);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resizeCanvas);
  },
  methods: {
    handleMouseMove(event) {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      this.mouseX = clientX / innerWidth;
      this.mouseY = clientY / innerHeight;

      this.updateGradient();
    },
    updateGradient() {
      const lightness1 = Math.round(this.mouseX * 50 + 25); // 根據滑鼠位置調整亮度
      const lightness2 = Math.round(this.mouseY * 50 + 25);

      const gradient = `linear-gradient(135deg, hsl(0, 0%, ${lightness1}%), hsl(0, 0%, ${lightness2}%))`;

      gsap.to(this.$refs.background, {
        duration: 0.5,
        background: gradient,
      });
    },
    initParticles() {
      const canvas = this.$refs.particleCanvas;
      const ctx = canvas.getContext("2d");

      this.resizeCanvas();
      for (let i = 0; i < this.particleCount; i++) {
        this.particleArray.push(this.createParticle());
      }

      const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.particleArray.forEach((particle) => {
          this.drawParticle(ctx, particle);
          this.updateParticle(particle);
        });
        requestAnimationFrame(animateParticles);
      };

      animateParticles();
    },
    resizeCanvas() {
      const canvas = this.$refs.particleCanvas;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    },
    createParticle() {
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1, // 粒子大小
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        color: `hsl(0, 0%, ${Math.random() * 60 + 20}%)`, // 黑白灰色
      };
    },
    drawParticle(ctx, particle) {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    },
    updateParticle(particle) {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // 粒子邊界檢查
      if (particle.x < 0 || particle.x > window.innerWidth) {
        particle.speedX *= -1;
      }
      if (particle.y < 0 || particle.y > window.innerHeight) {
        particle.speedY *= -1;
      }
    },
    animateFog() {
      const fogLayer = this.$refs.fog;

      const loopFogAnimation = () => {
        gsap.to(fogLayer, {
          backgroundPosition: `${Math.random() * 100}% ${Math.random() * 100}%`,
          duration: 10,
          ease: "power2.inOut",
          onComplete: loopFogAnimation,
        });
      };

      loopFogAnimation();
    },
  },
};
</script>

<style scoped>
.background {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, hsl(0, 0%, 40%), hsl(0, 0%, 60%));
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* 不影響滑鼠操作 */
}

.fog-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(0, 0, 0, 0.05) 70%,
    rgba(0, 0, 0, 0.15) 100%
  );
  background-size: 200% 200%;
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: overlay;
}

.content {
  z-index: 2;
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-size: 2rem;
  text-align: center;
}
</style>
