<script setup>
import { RouterLink } from "vue-router";
import { useMediaQuery } from "@vueuse/core";
import { Icon } from "@iconify/vue";

const isComputer = useMediaQuery("(min-width: 481px)");
const isMobile = useMediaQuery("(max-width: 480px)");
</script>

<template>
  <div v-if="isComputer">
    <main
      class="scrollbar w-full h=[calc(100vh-60px)] mt-[56px] flex flex-col items-center justify-start relative"
    >
      <section
        class="w-full h-[8vh] fixed top-1/5 flex flex-row items-center justify-start p-[1vh]"
      >
        <div
          class="w-1/3 h-full p-1 border-2 border-purple-500/30 flex justify-between items-center px-5"
        >
          <input
            v-model="message"
            class="w-5/6 h-full border-gray-400/50 border-2 tracking-widest text-purple-400 outline-1 outline-green-400/50 text- resize-none"
            placeholder="search here..."
          />
          <Icon
            icon="material-symbols:close-rounded"
            color="gray"
            class="w-[7vw] h-auto m-[0.8vh] justify-self-end flex-row items-self-start icon"
          />
          <!-- <img
            class="w-[20px] h-[20px] icon"
            src="https://img.icons8.com/ios-glyphs/30/search--v2.png"
          />
          <img
            class="w-[20px] h-[20px] icon"
            src="https://img.icons8.com/ios-glyphs/30/search--v2.png"
          /> -->
        </div>
      </section>
      <section
        class="w-auto h-[40vh] ml-[20px] flex flex-row absolute translate-x-1/4 top-1/4"
      >
        <RouterLink to="/Project/Chips">
          <div class="item">
            <div class="container">
              <img
                src="https://cdna.artstation.com/p/assets/images/images/081/914/924/large/yize-huang-2024-11-11-8-47-48.jpg?1731558884"
              />
            </div>

            <p class="title">#Chips</p>
          </div>
        </RouterLink>

        <RouterLink to="/Project/Yizellow">
          <div class="item">
            <div class="container">
              <img
                src="https://cdna.artstation.com/p/assets/images/images/082/626/578/large/yize-huang-jj6.jpg?1733473089"
              />
            </div>
            <p class="title">#YIZELLOE</p>
          </div>
        </RouterLink>

        <RouterLink to="/Project/ddd">
          <div class="item">
            <div class="container">
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/082/499/223/large/yize-huang-2024-12-03-12-35-13.jpg?1733157350"
              />
            </div>
            <p class="title">#3D Modeling</p>
          </div>
        </RouterLink>

        <RouterLink to="/Project/FilmCamera"
          ><div class="item">
            <div class="container">
              <img
                src="https://cdna.artstation.com/p/assets/images/images/082/332/470/large/yize-huang-2024-11-27-5-48-00.jpg?1732701058"
                alt=""
              />
            </div>
            <p class="title">#Travel and my film camera</p>
          </div>
        </RouterLink>
        <div>
          <div class="item">
            <div class="container">
              <img
                src="https://cdna.artstation.com/p/assets/images/images/082/499/478/large/yize-huang-2024-12-03-12-39-17.jpg?1733157609"
                alt=""
              />
            </div>
            <p class="title">#Light Installation &nbsp; &nbsp;(Upcoming...)</p>
          </div>
        </div>
      </section>
    </main>
  </div>
  <div v-if="isMobile">
    <main>
      <RouterLink to="/Project/Chips">
        <div class="item">
          <figure>
            <img
              src="https://cdna.artstation.com/p/assets/images/images/081/914/924/large/yize-huang-2024-11-11-8-47-48.jpg?1731558884"
            />
          </figure>
          <p class="title">#Chips</p>
        </div>
      </RouterLink>
      <RouterLink to="/Project/Yizellow">
        <div class="item">
          <figure>
            <img
              src="https://cdna.artstation.com/p/assets/images/images/082/626/578/large/yize-huang-jj6.jpg?1733473089"
              alt=""
            />
          </figure>
          <p class="title">#YIZELLOE</p>
        </div>
      </RouterLink>
      <RouterLink to="/Project/ddd">
        <div class="item">
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
        ><div class="item">
          <figure>
            <img
              src="https://cdna.artstation.com/p/assets/images/images/082/332/470/large/yize-huang-2024-11-27-5-48-00.jpg?1732701058"
              alt=""
            />
          </figure>
          <p class="title">#Travel and my film camera</p>
        </div>
      </RouterLink>
      <div>
        <div class="item">
          <figure>
            <img
              src="https://cdna.artstation.com/p/assets/images/images/082/499/478/large/yize-huang-2024-12-03-12-39-17.jpg?1733157609"
              alt=""
            />
          </figure>
          <p class="title">#Light Installation &nbsp; &nbsp;(Upcoming...)</p>
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Geo:ital@0;1&family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
@media (min-width: 481px) {
  .scrollbar {
    overflow-x: scroll; /* 確保元素能水平滾動 */
    height: calc(100vh - 100px); /* 確保有高度來顯示滾動條 */
  }
  .scrollbar::-webkit-scrollbar {
    height: 6px;
  }

  .scrollbar::-webkit-scrollbar-track {
    border-radius: 0px;
    border: 0.5px solid rgba(104, 104, 104, 0.572);
    margin: 20px 130px;
  }

  .scrollbar::-webkit-scrollbar-thumb {
    background-color: #020d01b8;
    cursor: pointer;
  }

  .item {
    height: 100%;
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin: auto 20px;
    border: 1px solid black;
  }
  .container {
    width: 100%;
    height: 80%;
  }
  .container img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: fill;
    object-position: center;
  }
  .title {
    font-size: 25px;
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    margin: auto 0px;
  }
}

@media (max-width: 480px) {
  main {
    width: 100%;
    margin-top: 6vh;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
  }
  .item {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin: 10px auto;
    border: 1px solid black;
  }
  .item img {
    margin: 0px auto;
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
}
.icon {
  transition: transform 0.3s ease; /* 設定平滑過渡效果 */
  cursor: pointer;
}

.icon:hover {
  transform: scale(1.1); /* 當游標在上面時放大 */
}

.icon:active {
  transform: scale(1); /* 點擊時回到原始大小，視需求可調整 */
}
</style>
