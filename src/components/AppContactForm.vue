<template>
  <section class="bg-gray-100 flex flex-col items-center">
    <h2 class="w-[82%] text-left mt-16 mb-10 text-3xl">Need any help...?</h2>
    <section
      class="flex bg-white w-[82%] h-[32rem] border-black rounded-xl mb-56 p-10"
    >
      <section class="w-3/5">
        <form class="flex flex-col">
          <div class="flex">
            <div class="mb-4 mr-8">
              <label for="fullName" class="text-xl text-gray-500">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                class="border rounded py-2 px-5 w-full"
              />
            </div>

            <div class="mb-4">
              <label for="email" class="text-xl text-gray-500">Email</label>
              <input
                type="email"
                id="email"
                class="border rounded py-2 px-5 w-full"
              />
            </div>
          </div>

          <div class="mb-4">
            <label for="message" class="text-xl text-gray-500">Message</label>
            <textarea
              id="message"
              rows="5"
              class="border rounded p-2 w-full"
            ></textarea>
          </div>

          <button
            class="w-[27%] h-12 bg-green-500 text-white rounded-full text-xl px-6 mt-2"
          >
            Send
          </button>
        </form>
      </section>

      <section class="w-2/5 flex justify-end">
        <div
          class="relative flex justify-center items-center w-[93%] h-[100%] bg-[#FEF3C7] p-4 rounded-lg"
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
