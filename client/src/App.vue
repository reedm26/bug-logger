<template>
  <div id="app back-color">
    <router-link class="bg-dark d-flex" to="/">
      <h3 class="text-light ml-2 nav-bar">Home</h3>
    </router-link>
    <router-view />
  </div>
</template>
<script></script>

<style>
.nav-bar {
  color: #3b4245;
}
.back-color {
  color: #729192;
}
</style>
