<script setup>
import { useSearchStore } from "@/stores/searchStores";

const searchStore = useSearchStore();
</script>

<template>
  <div class="bg-green-300 md:flex items-center border border-green-600 rounded-md">
    <form @submit.prevent class="flex items-center">
      <label for="search" class="pi pi-search px-2"></label>
      <input
        v-model="searchStore.query"
        @input="searchStore.setQuery($event.target.value)"
        type="text"
        id="search"
        placeholder="Search..."
        class="bg-green-300 outline-none p-1 rounded-md"
      />
    </form>
  </div>
</template>
