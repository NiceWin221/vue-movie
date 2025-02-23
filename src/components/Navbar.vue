<script setup>
import logo from "@/assets/logo.svg";
import { RouterLink, useRoute } from "vue-router";
import Searchbar from "./Searchbar.vue";

const isActiveLink = (path) => {
  const route = useRoute();
  return route.path === path;
};
</script>

<template>
  <nav class="fixed bg-green-700 w-full z-10">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex gap-5 h-14 justify-center items-center md:justify-between">
        <div class="flex items-center">
          <img :src="logo" alt="logo" class="w-5" />
          <a href="/" class="text-white text-2xl font-bold">ue</a>
          <div class="flex gap-5 px-5 items-center">
            <RouterLink
              to="/"
              :class="[
                isActiveLink('/') ? 'text-yellow-300' : 'text-white',
                'hover:text-yellow-300',
                'pi',
                'pi-home',
              ]"
            >
              Home</RouterLink
            >
            <RouterLink
              to="/archived"
              :class="[
                isActiveLink('/archived') ? 'text-yellow-300' : 'text-white',
                'hover:text-yellow-300',
                'pi',
                'pi-home',
              ]"
            >
              Archived</RouterLink
            >
          </div>
        </div>
        <div class="hidden md:flex">
          <Searchbar />
        </div>
      </div>
    </div>
  </nav>
</template>
