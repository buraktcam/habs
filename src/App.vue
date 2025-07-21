<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background: #262626;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, sans-serif;
  background: #262626;
  height: 100%;
}

#app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  background: #262626;
}
</style>
