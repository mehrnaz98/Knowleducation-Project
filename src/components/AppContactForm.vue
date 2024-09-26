<template>
  <section class="bg-gray-50 flex flex-col items-center">
    <h2
      class="font-righteous w-[82%] text-left mt-16 mb-10 text-4.5xl text-slate-600"
    >
      Need any help...?
    </h2>
    <section
      class="flex bg-white w-[82%] h-[33rem] border-black rounded-xl mb-56 p-10"
    >
      <section class="w-3/5">
        <form @submit.prevent="validateForm" novalidate class="flex flex-col">
          <div class="flex">
            <div class="mb-4 mr-8 w-full">
              <label for="fullName" class="text-xl text-gray-400">
                Full Name
              </label>
              <span v-if="errors.fullName" class="text-red-400 text-sm ml-2"
                >This field cannot be empty</span
              >
              <input
                type="text"
                id="fullName"
                v-model.trim="fullName"
                :class="{ 'border-red-500': errors.fullName }"
                class="border rounded-lg px-3 py-2 w-full mt-3 p-3 h-12 text-xl text-gray-400 focus:border-emerald-400 focus:outline-none focus:border-2"
                @blur="errors.fullName = false"
              />
            </div>

            <div class="mb-4 w-full">
              <label for="email" class="text-xl text-gray-400">Email</label>
              <span v-if="errors.email" class="text-red-500 text-sm ml-2"
                >Email address is incorrect</span
              >
              <input
                type="email"
                id="email"
                v-model.trim="email"
                :class="{ 'border-red-500': errors.email }"
                class="border rounded-lg px-3 py-2 w-full mt-3 p-3 h-12 text-xl text-gray-400 focus:border-emerald-400 focus:outline-none focus:border-2"
                @blur="errors.email = false"
              />
            </div>
          </div>

          <div>
            <label for="message" class="text-xl text-gray-400">Message</label>
            <span v-if="errors.message" class="text-red-500 text-sm ml-2"
              >This field cannot be empty</span
            >
            <textarea
              id="message"
              rows="8"
              v-model.trim="message"
              :class="{ 'border-red-500': errors.message }"
              class="border rounded-lg w-full mt-3 px-3 py-1 h-56 text-xl text-gray-400 focus:border-emerald-400 focus:outline-none focus:border-2"
              @blur="errors.message = false"
            ></textarea>
          </div>

          <button
            class="w-[27%] px-6 my-6 h-12 bg-emerald-400 text-white rounded-full text-xl"
          >
            Send
          </button>
        </form>
      </section>

      <section class="w-2/5 flex justify-end">
        <div
          class="relative flex justify-center items-center w-[93%] h-[100%] bg-yellow-200 p-4 rounded-lg"
        >
          <img
            src="../assets/phone-svgrepo-com.svg"
            alt="Phone svg"
            class="h-72 transform -scale-x-100"
          />
        </div>
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const fullName = ref<string>("");
const email = ref<string>("");
const message = ref<string>("");

const errors = ref({
  fullName: false,
  email: false,
  message: false,
});

const validateForm = () => {
  errors.value.fullName = !fullName.value;
  errors.value.email = !email.value || !email.value.includes("@");
  errors.value.message = !message.value;

  if (!errors.value.fullName && !errors.value.email && !errors.value.message) {
    alert("Form submitted successfully!");

    fullName.value = "";
    email.value = "";
    message.value = "";
  }
};
</script>
