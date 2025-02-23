<script setup>
import { defineProps } from "vue";

defineProps({
  icon: String,
  color: String,
  hoverColor: String,
  label: String,
});
</script>

<template>
  <div :class="`bg-green-300 p-[4px] px-4 rounded-md group hover:${hoverColor} relative`">
    <span :class="`pi ${icon} ${color} text-base group-hover:text-white`"></span>
    <div
      class="absolute left-0 top-0 bg-white p-1 opacity-0 rounded-md group-hover:left-16 group-hover:opacity-100 transition-all duration-100 ease-in-out pointer-events-none"
    >
      {{ label }}
    </div>
  </div>
</template>
