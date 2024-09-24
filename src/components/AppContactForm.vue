<template>
  <section class="bg-gray-100 flex flex-col items-center">
    <h2 class="w-[70%] text-left mt-20 mb-10 text-3xl">Need any help...?</h2>
    <section
      class="flex bg-yellow-400 w-[70%] border-black rounded-xl mb-56 p-10"
    >
      <section class="w-3/5">
        <form class="flex flex-col">
          <div class="flex">
            <div class="mb-4 mr-8">
              <label for="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                class="border rounded py-2 px-5 w-full"
              />
            </div>

            <div class="mb-4">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                class="border rounded py-2 px-5 w-full"
              />
            </div>
          </div>

          <div class="mb-4">
            <label for="message" class="block">Message</label>
            <textarea
              id="message"
              rows="5"
              class="border rounded p-2 w-full"
            ></textarea>
          </div>

          <button
            class="w-[15%] bg-green-500 text-white h-10 rounded-full text-base font-normal px-6"
          >
            Send
          </button>
        </form>
      </section>

      <section class="w-2/5 flex justify-center">
        <div class="relative w-80 h-80 bg-[#FEF3C7] p-4 rounded-lg">
          <img
            src="../assets/phone-svgrepo-com.svg"
            alt="Phone svg"
            class="w-40 h-40 transform -scale-x-100 fill-orange-400"
          />
        </div>
      </section>
    </section>
  </section>
</template>
