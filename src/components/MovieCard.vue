<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps({
  movie: Object,
});
</script>

<template>
  <div class="w-[calc(50%-1.25rem)] md:w-[calc(25%-1.25rem)] lg:w-[calc(20%-1.25rem)]">
    <div
      class="border-4 border-green-600 rounded-sm h-72 md:h-72 lg:h-80 overflow-hidden relative group"
    >
      <img
        :src="movie.Poster"
        alt="poster"
        class="w-full h-full object-cover group-hover:scale-110 group-hover:blur-sm transition duration-300 ease-in-out"
      />
      <div
        class="w-full h-full absolute left-0 top-0 flex flex-col items-center bg-green-300 justify-center text-center gap-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300 ease-in-out"
      >
        <p class="">{{ movie.Title }}</p>
        <RouterLink
          :to="'/movies/' + movie.imdbID"
          class="pi pi-play bg-green-600 p-2 rounded-md group-hover:bg-green-500"
        ></RouterLink>
      </div>
    </div>
  </div>
</template>
