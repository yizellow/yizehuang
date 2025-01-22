import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGHrocwtkv2okGoTMS_HhV9o0GStBYsVo",
  authDomain: "yizehuang-9564c.firebaseapp.com",
  projectId: "yizehuang-9564c",
  storageBucket: "yizehuang-9564c.firebasestorage.app",
  messagingSenderId: "55527157856",
  appId: "1:55527157856:web:65870cd87d9c5849761305",
  measurementId: "G-4H6HY92VH3",
};

// 初始化 Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// 創建 Vue app
const app = createApp(App);

app.use(router);
app.mount("#app");

// 將 jQuery 附加到 window
Object.assign(window, { $: jQuery, jQuery });
