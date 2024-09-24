<template>
  <section class="bg-gray-100">
    <h2>Need any help</h2>
    <section class="flex bg-white w-full">
      <section class="w-3/5">
        <form class="flex flex-col">
          <div>
            <label for="fullName">Full Name</label>
            <input type="text" id="firstName" />

            <label for="email">Email</label>
            <input type="email" id="email" />
          </div>

          <label for="message">Message</label>
          <textarea id="message" row="5"></textarea>

          <button>Send</button>
        </form>
      </section>

      <section class="w-2/5">
        <img src="" alt="" />
      </section>
    </section>
  </section>
</template>
