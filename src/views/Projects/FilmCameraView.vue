<script>
import { ref, onMounted } from "vue";
import gsap from "gsap";

export default {
  setup() {
    const images = [
      "https://picsum.photos/id/1018/800/600",
      "https://picsum.photos/id/1015/800/600",
      "https://picsum.photos/id/1019/800/600",
      "https://picsum.photos/id/1020/800/600",
    ];
    let index = 0;

    // 點擊事件，觸發動畫並刪除圖片
    const clickElement = (event) => {
      const container = document.getElementById("container");
      const target = event.target; // 取得被點擊的元素
      const images = container.getElementsByClassName("trigger");

      // 找出被點擊圖片的索引
      const clickedIndex = Array.from(images).indexOf(target);

      // 點擊圖片的銷毀動畫
      gsap.to(target, {
        rotateX: 90,
        skewX: 24,
        skewY: "random(-80, 80)",
        opacity: 0,
        duration: "random(0.6, 0.9)",
        ease: "power1.in",
        transformOrigin: "50% 100%",
        onComplete: () => {
          target.remove();
          // 後面圖片的滑動動畫，當前圖片移除後，調整位置
          gsap.fromTo(
            images,
            { x: 0 },
            {
              x: `-=${target.offsetWidth + 40}`, // 移動寬度加上 margin
              duration: 0.6,
              ease: "power2.out",
            }
          );
        },
      });

      // 創建新圖片
      createNewImg();
    };

    // hover 事件，當游標懸停時觸發動畫
    const hoverElement = (event) => {
      const target = event.target;
      gsap.to(target, {
        duration: 0.2,
        y: "-50px",
        ease: "power1.out",
      });
    };

    // 滑鼠移出事件，恢復原始狀態
    const hoverOutElement = (event) => {
      const target = event.target;
      gsap.to(target, {
        duration: 0.2,
        y: "0",
        ease: "power1.out",
      });
    };

    function createNewImg() {
      const container = document.getElementById("container");
      let newPhoto = document.createElement("img");

      // 如果 index 超過圖片陣列長度，重置 index 為 0
      if (index >= images.length) {
        index = 0;
      }

      // 設定新圖片的 src 屬性
      newPhoto.src = images[index];

      // 為新圖片添加樣式
      newPhoto.classList.add(
        "w-1/3",
        "h-auto",
        "trigger",
        "mr-10",
        "cursor-pointer"
      );

      // 為新圖片添加事件監聽器
      newPhoto.addEventListener("click", clickElement);
      newPhoto.addEventListener("mouseover", hoverElement);
      newPhoto.addEventListener("mouseleave", hoverOutElement);

      // 初始位置設置在螢幕右側外
      gsap.set(newPhoto, {
        x: window.innerWidth, // 設置初始位置在螢幕右側外
        opacity: 0,
      });

      // 將新圖片添加到容器中
      container.appendChild(newPhoto);

      // 使用 GSAP 動畫讓圖片從右側滑入
      gsap.to(newPhoto, {
        x: 0, // 移動到原本的位置
        opacity: 1,
        duration: 0.8, // 動畫持續時間
        ease: "power2.out", // 緩動效果
      });

      // 增加 index，確保下一次使用下一張圖片
      index++;
    }

    // 在元件掛載後自動創建三張圖片
    onMounted(() => {
      createNewImg();
      createNewImg();
      createNewImg();
    });

    return {
      clickElement,
      hoverElement,
      hoverOutElement,
      createNewImg,
    };
  },
};
</script>

<template>
  <section
    class="w-full h-[90%] flex items-end fixed z-1"
    id="container"
  ></section>
  <section class="w-full h-full flex items-baseline bg-black"></section>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
  transition: transform 0.2s ease;
}
</style>
