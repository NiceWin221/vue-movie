import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore("search", () => {
  const query = ref("");
  const setQuery = (newQuery) => {
    console.log(newQuery);
    query.value = newQuery;
  };

  return { query, setQuery };
});
