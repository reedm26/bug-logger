<template>
  <div>
    <h1>Hello from Notes.vue</h1>
    <h6>Title:</h6>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "bugSpecs",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
  }
};
</script>

<style></style>
