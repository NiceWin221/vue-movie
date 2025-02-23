<script setup>
import Searchbar from "./Searchbar.vue";
import SidebarItem from "./SidebarItem.vue";

const sidebarItems = [
  { icon: "pi-star-fill", color: "text-red-500", hoverColor: "bg-red-500", label: "Trending" },
  {
    icon: "pi-thumbs-up-fill",
    color: "text-green-500",
    hoverColor: "bg-green-500",
    label: "Recommended",
  },
  { icon: "pi-star-fill", color: "text-blue-500", hoverColor: "bg-blue-500", label: "Gift" },
  { icon: "pi-trophy", color: "text-yellow-500", hoverColor: "bg-yellow-500", label: "IMDBTop" },
  { icon: "pi-history", color: "text-gray-500", hoverColor: "bg-gray-500", label: "History" },
];
</script>

<template>
  <aside
    class="fixed w-full bg-green-500 md:bg-green-600 bottom-0 left-0 md:flex md:w-24 md:h-full"
  >
    <div
      class="px-4 py-2 md:py-16 flex gap-5 items-center justify-between md:justify-center md:items-start md:w-full"
    >
      <div
        class="flex items-center justify-center text-green-800 bg-green-300 w-8 h-8 rounded-md md:hidden"
      >
        <RouterLink to="/" class="pi pi-arrow-left"></RouterLink>
      </div>
      <div class="md:hidden">
        <Searchbar />
      </div>

      <div class="hidden md:flex md:flex-col md:gap-3 py-4">
        <SidebarItem
          v-for="item in sidebarItems"
          :key="item.label"
          :icon="item.icon"
          :color="item.color"
          :hoverColor="item.hoverColor"
          :label="item.label"
        />
      </div>
    </div>
  </aside>
</template>
