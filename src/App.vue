<script setup lang="ts">
import Layout from '@/components/Layout.vue'
</script>

<template>
  <div class="app">
    <Layout />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  color: #000000;
}

label {
  user-select: none;
}

button {
  cursor: pointer;
}

.title {
  font-size: 20px;
  font-weight: 500;
}

.app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
