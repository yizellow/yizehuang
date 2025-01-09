<script>
import { RouterLink } from "vue-router";
import { useMediaQuery } from "@vueuse/core";

export default {
  setup() {
    const isComputer = useMediaQuery("(min-width: 481px)");
    const isMobile = useMediaQuery("(max-width: 480px)");
    return { isMobile, isComputer };
  },
};
</script>

<template>
  <div v-if="isComputer">
    <main class="scrollbar">
      <section class="projectsection">
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
  main {
    width: 100%;
    height: calc(100vh - 60px);
    margin-top: 56px;
    display: flex;
    align-items: center;
    justify-content: start;
  }
  .scrollbar {
    overflow-x: scroll; /* 確保元素能水平滾動 */
    height: calc(100vh - 100px); /* 確保有高度來顯示滾動條 */
  }
  .scrollbar::-webkit-scrollbar {
    height: 10px;
  }

  .scrollbar::-webkit-scrollbar-track {
    border-radius: 0px;
    border: 1px solid black;
    margin: 20px 130px;
  }

  .scrollbar::-webkit-scrollbar-thumb {
    background-color: rgb(0, 223, 0);

  }

  .projectsection {
    display: flex;
    flex-direction: row;
    height: 50vh;
    width: auto;
    margin-left: 20px;
  }
  .item {
    height: 100%;
    width: 40vw;
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
    background-color: aquamarine;
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
</style>
