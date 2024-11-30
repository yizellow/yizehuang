<script>
import { ref, onMounted } from "vue";
import gsap from "gsap";

export default {
  setup() {
    const images = [
      "https://cdnb.artstation.com/p/assets/images/images/082/332/459/large/yize-huang-2024-11-27-5-48-34.jpg?1732701036",
      "https://cdna.artstation.com/p/assets/images/images/082/332/324/large/yize-huang-img-0911.jpg?1732700747",
      "https://cdnb.artstation.com/p/assets/images/images/082/332/431/large/yize-huang-img-0910.jpg?1732700973",
      "https://cdnb.artstation.com/p/assets/images/images/082/332/475/large/yize-huang-2024-11-27-5-47-42.jpg?1732701073",
      "https://cdnb.artstation.com/p/assets/images/images/082/332/479/large/yize-huang-2024-11-27-5-47-26.jpg?1732701086",
      "https://cdna.artstation.com/p/assets/images/images/082/332/482/large/yize-huang-2024-11-27-5-46-27.jpg?1732701097",
      "https://cdna.artstation.com/p/assets/images/images/082/332/488/large/yize-huang-2024-11-27-5-46-41.jpg?1732701109",
      "https://cdna.artstation.com/p/assets/images/images/082/332/492/large/yize-huang-2024-11-27-5-46-59.jpg?1732701122",
      "https://cdnb.artstation.com/p/assets/images/images/082/332/429/large/yize-huang-img-0912.jpg?1732700966",
      "https://cdnb.artstation.com/p/assets/images/images/082/332/463/large/yize-huang-2024-11-27-5-48-13.jpg?1732701047",
      "https://cdna.artstation.com/p/assets/images/images/082/332/470/large/yize-huang-2024-11-27-5-48-00.jpg?1732701058",
      "https://cdna.artstation.com/p/assets/images/images/082/332/328/large/yize-huang-img-0937.jpg?1732700755",
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
          newPosition();
          createNewImg();
        },
      });
    };

    function newPosition() {
      const images = document.querySelectorAll(".iimg");
      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        gsap.fromTo(".iimg", { x: rect.x }, { x: 1, duration: 0.8 });
        console.log(rect.x);
      });
    }

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
        "cursor-pointer",
        "iimg"
      );

      // 為新圖片添加事件監聽器
      newPhoto.addEventListener("click", clickElement);
      newPhoto.addEventListener("mouseover", hoverElement);
      newPhoto.addEventListener("mouseleave", hoverOutElement);

      container.appendChild(newPhoto);
      gsap.fromTo(
        newPhoto,
        { x: 500 },
        { x: 0, ease: "power2.in", duration: 1 }
      );
      index++;
    }

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
  <section class="w-full h-[90%] flex items-end fixed z-1" id="container">
    <div class="iimg"></div>
    <div class="iimg"></div>
    <div class="iimg"></div>
  </section>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
  transition: transform 0.2s ease;
}
</style>
