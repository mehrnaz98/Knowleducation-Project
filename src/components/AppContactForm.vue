<template>
  <section class="bg-gray-100 flex flex-col items-center">
    <section
      class="flex bg-yellow-400 w-[90%] border-black rounded-xl mx-20 mb-56 p-10"
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

      <section class="w-2/5">
        <img src="" alt="" />
      </section>
    </section>
  </section>
</template>
