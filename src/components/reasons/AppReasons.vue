<template>
  <section class="flex justify-center items-center bg-gray-50 h-screen">
    <section class="w-2/5 flex flex-col space-y-10">
      <div v-for="reason in reasons" :key="reason.title">
        <ReasonsCard
          :title="reason.title"
          :description="reason.description"
          :image="reason.image"
          :ordinalNumber="reason.ordinalNumber"
        />
      </div>
    </section>

    <section class="w-3/5 pr-24 relative">
      <h2 class="font-righteous text-4.5xl text-slate-600">
        Choose Knowleducation over
        <span class="relative inline-block">
          <span
            class="absolute text-emerald-400 font-bold top-[-80px] left-[-10px] rotate-[-28deg] text-4xl"
            >ALL
          </span>
          <span
            class="absolute text-emerald-400 font-sans font-semibold top-[-14px] left-[-13px] rotate-[28deg] text-4xl"
          >
            )
          </span>
          <span
            class="absolute text-emerald-400 font-sans font-semibold top-[-14px] rotate-[-28deg] text-4xl"
          >
            (
          </span>
        </span>
        others!
      </h2>

      <p class="text-gray-400 text-xl mt-5 leading-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
        commodi, porro nesciunt voluptatum aliquid fuga molestias explicabo
        pariatur accusantium ullam nobis, consequuntur aliquam laboriosam unde
        reiciendis doloribus non eveniet iste beatae et mollitia esse voluptas
        nostrum. Fugiat quasi, rem, nisi error dignissimos architecto animi
        vitae sunt laboriosam quis voluptatibus, labore quam? Nihil blanditiis
        ea porro, incidunt magni sed corporis ratione? Lorem ipsum dolo aliquid
        fuga molestias explicabo pariatur accusantium ullam nobis, consequuntur
        aliquam laboriosam unde reiciendis doloribus non eveniet.
      </p>
    </section>
  </section>
</template>

<script setup lang="ts">
import ReasonsCard from "./ReasonsCard.vue";

const reasons = [
  {
    title: "Zeroth reason",
    description: "Lorem Ipsum 0th",
    image: new URL("@/assets/img/hand-0.png", import.meta.url).href,
    ordinalNumber: "0th",
  },
  {
    title: "First reason",
    description: "Lorem Ipsum 1st",
    image: new URL("@/assets/img/hand-1.png", import.meta.url).href,
    ordinalNumber: "1st",
  },
  {
    title: "Second reason",
    description: "Lorem Ipsum 2nd",
    image: new URL("@/assets/img/hand-2.png", import.meta.url).href,
    ordinalNumber: "2nd",
  },
];
</script>
