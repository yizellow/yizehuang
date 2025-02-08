<template>
  <textarea
    v-model="message"
    rows="4"
    class="w-[50vw] h-[10vh] bg-gray-100/60 border-gray-400 border-2 tracking-widest text-purple-400 outline-0 p-[2vh] text-sm resize-none"
    placeholder="Write your message here..."
  ></textarea>
  <button
    @click="userInput"
    class="icon w-[10vw] h-[10vh] text-base mt-[6vh] border-2 border-purple-300 cursor-pointer navtext text-center text-gray-600 boder-2"
  >
    Submit
  </button>
</template>

<script setup>
const message = ref(null);
const messages = reactive([]);

import Message from "@/components/message.vue";
import { reactive, ref } from "vue";
import openai from "@/assets/helpers/useOpenAi.js";

const userInput = () => {
  messages.push({
    role: "user",
    content: message.value,
  });
  message.value = null;
  chat(messages);
};

const chat = async (msgs) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: msgs,
    model: "gpt-3.5-turbo",
  });
  console.log(chatCompletion.choices[0].message);
};
</script>

<style scoped></style>
