<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h1>
          <img alt="Vue logo" src="../assets/logo.png" />
          Bugger
          <button class="btn-sm btn-danger">Report</button>
        </h1>
      </div>
      <div class="col-12">
        <div class="row outline">
          <div class="col-3">Title</div>
          <div class="col-3">Remove</div>
          <div class="col-3">Status</div>
          <div class="col-3">Last Modified</div>
        </div>
      </div>
      <div class="row" v-for="bug in bugs" :key="bug.id">
        <BugComponent :bugData="bug" />
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
.outline {
  border-bottom: 3rem;
  border-color: black;
}
</style>
