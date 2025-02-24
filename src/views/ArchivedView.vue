<script setup>
import MovieCard from "@/components/MovieCard.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { onMounted, reactive } from "vue";

const state = reactive({
  movies: [],
  isLoading: true,
});

const fetchedMovies = () => {
  state.isLoading = true;
  try {
    const savedMovies = JSON.parse(localStorage.getItem("movies") || []);
    state.movies = savedMovies;
  } catch (error) {
    console.error("Error fetching saved movies", error);
  } finally {
    state.isLoading = false;
  }
};

onMounted(() => {
  fetchedMovies();
});
</script>

<template>
  <div class="md:pt-10 md:pl-10">
    <h1 class="pi pi-bookmark-fill text-green-600 text-3xl text-bold md:pl-5">Archived Movies</h1>
    <div class="py-2 md:py-4 md:px-4 flex flex-wrap items-center justify-center gap-5 min-h-[50vh]">
      <div v-if="state.isLoading">
        <PulseLoader :size="'25px'" />
      </div>
      <div v-else-if="state.movies.length === 0" class="text-5xl text-green-500">
        <p class="pi pi-bookmark-fill text-yellow-500">No saved movies</p>
      </div>
      <MovieCard v-else v-for="movie of state.movies" :key="movie.id" :movie="movie"></MovieCard>
    </div>
  </div>
</template>
