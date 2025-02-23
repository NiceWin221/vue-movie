<script setup>
import { fetchMovies } from "@/services/omdbService";
import { onMounted, reactive, watch } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import MovieCard from "./MovieCard.vue";
import { useSearchStore } from "@/stores/searchStores";

const state = reactive({
  movies: [],
  isLoading: true,
});

const searchStore = useSearchStore();
let debounceTimeout = null;

const fetchMovieList = async (searchQuery) => {
  state.isLoading = true;
  try {
    const response = await fetchMovies(searchQuery);
    state.movies = response.Search || [];
  } catch (error) {
    console.error("Error fetching movies", error);
  } finally {
    state.isLoading = false;
  }
};

onMounted(async () => {
  fetchMovieList(searchStore.query || "animation");
});

watch(
  () => searchStore.query,
  (newQuery) => {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      fetchMovieList(newQuery || "animation");
    }, 1500);
  }
);
</script>

<template>
  <div class="py-2 md:py-4 md:px-4 flex flex-wrap items-center justify-center gap-5 min-h-[50vh]">
    <div v-if="state.isLoading">
      <PulseLoader :size="'25px'" />
    </div>
    <div v-else-if="state.movies.length === 0" class="text-7xl text-green-500">
      <p class="pi pi-exclamation-triangle text-yellow-500">Movies not found</p>
    </div>
    <MovieCard v-else v-for="movie of state.movies" :key="movie.id" :movie="movie"></MovieCard>
  </div>
</template>
