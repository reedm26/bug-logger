<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h1>
          <img alt="Vue logo" src="../assets/logo.png" />
          Bugger
        </h1>
      </div>
      <div class="col-12">
        <ul class="list-group list-group-horizontal-lg">
          <li class="list-group-item">Title</li>
          <li class="list-group-item">Remove</li>
          <li class="list-group-item">Status</li>
          <li class="list-group-item">Date Last Modified</li>
        </ul>
      </div>
      <div class="col-4" v-for="bug in bugs" :key="bug.id">
        <bug-component />
        {{ bugs }}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BugComponent from "@/components/BugComponents";

export default {
  name: "home",
  mounted() {
    this.$state.dispatch("getAllBugs");
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
  },
  components: {
    BugComponent
  }
};
</script>
<style>
img scoped {
  width: 9px;
  height: 10px;
}
</style>
