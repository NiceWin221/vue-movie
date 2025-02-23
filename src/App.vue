<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <main class="pt-20 px-5 md:pt-14 pb-12 h-auto min-h-screen bg-green-200 md:pl-24">
    <RouterView />
  </main>
  <Sidebar />
  <Footer />
</template>
