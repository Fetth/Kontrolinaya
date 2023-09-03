<script setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue'
</script>

<template>
  <!-- https://preview.colorlib.com/#personal -->
  <MainHeader></MainHeader>
  <RouterView />
</template>

<script>
</script>

<style>
  header, main {
    max-width: 1140px;
    margin: 0 auto;
  }
  header {
    display: flex;
  }
  nav {
    margin-left: auto;
  }
  nav a {
    margin-left: 10px;
    color: black;
    text-decoration: none;
  }
</style>
