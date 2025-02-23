<script setup>
import { fetchDetailMovie } from "@/services/omdbService";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const route = useRoute();

const movieId = route.params.id;

const state = reactive({
  movie: {},
  isLoading: true,
  isPlaying: true,
});

const onPlayMovie = () => {
  state.isPlaying = false;
};

onMounted(async () => {
  try {
    const fetchedMovie = await fetchDetailMovie(movieId);
    state.movie = fetchedMovie;
  } catch (error) {
    console.error("Error fetching movie detail", error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <div v-if="state.isLoading" class="md:flex item-center justify-center md:mt-72">
    <PulseLoader :size="'25px'" />
  </div>
  <div v-else class="flex flex-col md:flex-row pb-4 md:gap-6 md:pl-28 md:pt-12">
    <div class="w-full flex flex-col gap-2 md:w-[62%] md:gap-5">
      <p class="text-xl font-semibold md:text-3xl">Watch {{ state.movie.Title }}</p>
      <div class="flex flex-col border-4 border-green-600 rounded-sm md:border-[5px]">
        <div class="flex justify-between p-1 px-2 bg-green-700 text-white text-sm md:text-lg">
          <p>{{ state.movie.Title }}</p>
          <div class="flex gap-1 bg-green-600 px-2 rounded-sm">
            <p>Server 01</p>
          </div>
        </div>
        <div class="w-full h-72 overflow-hidden md:h-[437px] relative">
          <div v-if="state.isPlaying">
            <img
              :src="state.movie.Poster"
              alt="poster"
              class="w-full h-full object-cover blur-md"
            />
            <div
              @click="onPlayMovie"
              class="absolute left-0 top-0 w-full h-full flex justify-center items-center"
            >
              <span
                class="pi pi-play text-3xl bg-green-600 p-4 rounded-full cursor-pointer text-green-500 hover:opacity-80"
              ></span>
            </div>
          </div>
          <video v-else controls autoplay class="w-full h-full">
            <source src="/videos/rick-roll.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="bg-green-600 p-1 px-2 text-white items-center flex justify-between md:text-lg">
          <p>
            Active: <span class="text-green-300">{{ state.movie.imdbID }}</span>
          </p>
          <p class="bg-green-700 px-2 rounded-sm">Download</p>
        </div>
      </div>
      <div class="flex flex-col bg-green-600 py-2 px-2 mt-2 text-white rounded-sm">
        <h1 class="font-semibold md:text-xl">Overview</h1>
        <p class="text-sm md:text-lg">{{ state.movie.Plot }}</p>
      </div>
      <div class="flex flex-col bg-green-600 py-2 px-2 mt-2 text-white rounded-sm">
        <p class="text-sm md:text-lg">
          Movies atau TV Shows tidak bisa diputar? Silahkan pilih server lainnya.
          <span class="text-yellow-400"
            >Gunakan Server HD1 dan pilih Server Vip 3 untuk subtitle lengkap</span
          >, Jika anda mempunyai file subtitle sendiri
          <span class="text-green-300">silahkan gunakan server Vip 1</span>, atau
          <span class="text-yellow-400">Gunakan Server HD 4</span> /
          <span class="text-green-300">Hydrax atau Doodstream </span> utk film lokal terbaru dan
          serial mandarin, terimakasih.
        </p>
      </div>
    </div>
    <div class="flex md:flex-col md:w-[38%] gap-4 mt-5 md:mt-14">
      <div class="w-[calc(50%-1rem)] border-4 border-green-600 rounded-sm">
        <img :src="state.movie.Poster" alt="poster" class="w-full" />
        <div class="flex items-center justify-between py-1 px-2 bg-green-600 text-green-800">
          <p>Video Quality:</p>
          <p class="border border-green-400 px-2 rounded-sm">HD</p>
        </div>
      </div>
      <div class="flex flex-col">
        <p class="text-green-600">
          IMDB Rate: <span class="text-blue-600">{{ state.movie.imdbRating }}</span>
        </p>
        <p class="text-green-600">
          Genres: <span class="text-blue-600">{{ state.movie.Genre }}</span>
        </p>
        <p class="text-green-600">
          Year: <span class="text-blue-600">{{ state.movie.Year }}</span>
        </p>
        <p class="text-green-600">
          Languages: <span class="text-blue-600">{{ state.movie.Language }}</span>
        </p>
        <p class="text-green-600">
          Duration: <span class="text-blue-600">{{ state.movie.Runtime }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
