<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h1>
          <img alt="Vue logo" src="../assets/logo.png" />
          Bugger
        </h1>
      </div>
      <div class="col-3">
        <h1>Title</h1>
        <h1>Removed By</h1>
        <h1>Status</h1>
        <h1>Date Last Modified</h1>
      </div>
      <div class="col-4" v-for="bug in bugs" :key="bug.id">
        <bug-component />
      </div>
      {{ bugs }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Notes from "@/components/HelloWorld.vue";

export default {
  name: "home",
  mounted() {
    this.$state.dispatch("getAll");
  },
  data() {
    return {
      newBug: {
        closed: "",
        description: "",
        title: "",
        reportedBy: ""
      }
    };
  }
};
</script>
<style>
img scoped {
  width: 10px;
  height: 10px;
}
</style>
