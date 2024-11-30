<script>
import { ref } from "vue";
import gsap from "gsap";

export default {
  setup() {


    


    // 點擊事件，觸發動畫並刪除圖片
    const clickElement = (event) => {
      const target = event.target; // 取得被點擊的元素
      gsap.to(target, {
        rotateX: 90, // 旋轉 90 度
        skewX: 24, // skewX 變形
        skewY: "random(-80, 80)", // 隨機 skewY 變形
        opacity: 0, // 漸變消失
        duration: "random(0.6, 0.9)", // 隨機持續時間
        ease: "power1.in", // 使用緩動效果
        transformOrigin: "50% 100%", // 設定變形的原點
        onComplete: () => {
          // 動畫結束後，刪除被點擊的圖片元素
          if (target) {
            target.remove(); // 從 DOM 中刪除被點擊的圖片
          }
        },
      });
    };

    // hover 事件，當游標懸停時觸發動畫
    const hoverElement = (event) => {
      const target = event.target; // 取得被懸停的元素
      gsap.to(target, {
        duration: 0.2,
        y: "-50px", // 向上移動一點
        ease: "power1.out", // 添加緩動效果
      });
    };

    // 滑鼠移出事件，恢復原始狀態
    const hoverOutElement = (event) => {
      const target = event.target;
      gsap.to(target, {
        duration: 0.2,
        y: "0", // 恢復原始位置
        ease: "power1.out",
      });
    };

    function createNewImg() {
      
      
    }

    return {
      clickElement,
      hoverElement,
      hoverOutElement,
      createNewImg
    };
  },
};
</script>

<template>
  <section class="w-full h-[90%] flex items-end fixed z-1" id="container">
    <img
      src="https://cdna.artstation.com/p/assets/images/images/082/332/324/large/yize-huang-img-0911.jpg?1732700747"
      class="w-1/3 h-auto trigger mr-10 cursor-pointer"
      @click="clickElement"
      @mouseover="hoverElement"
      @mouseleave="hoverOutElement"
    />
    <img
      src="https://cdna.artstation.com/p/assets/images/images/082/332/324/large/yize-huang-img-0911.jpg?1732700747"
      class="w-1/3 h-auto trigger mr-10 cursor-pointer"
      @click="clickElement"
      @mouseover="hoverElement"
      @mouseleave="hoverOutElement"
    />
  </section>
  <section class="w-full h-full flex items-baseline bg-black"></section>
</template>

<style scoped>
/* 增加鼠標樣式，提示可點擊 */
.cursor-pointer {
  cursor: pointer;
  transition: transform 0.2s ease;
}
</style>
