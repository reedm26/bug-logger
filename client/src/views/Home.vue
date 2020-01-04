<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h1>
          <img alt="Vue logo" src="../assets/logo.png" />
          Bugger
          <button class="btn-sm btn-danger" @click="show">Report</button>
          <modal name="bugPopUp">
            <form action="">
              <input
                type="text"
                placeholder="title..."
                v-model="newBug.title"
                name="title"
              />
              <input
                type="text"
                placeholder="description..."
                v-model="newBug.description"
                name="description"
              />
              <input
                type="text"
                placeholder="reported by..."
                v-model="newBug.reportedBy"
                name="reportedBy"
              />
            </form>
            <button @click="show">Add</button>
          </modal>
        </h1>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-3">Title</div>
          <div class="col-3">Remove</div>
          <div class="col-3">Status</div>
          <div class="col-3">Last Modified</div>
        </div>
      </div>
      <div class="row">
        <ul>
          <li v-for="bug in bugs" :key="bug.id">
            <router-link :to="{ name: 'bugSpecs', params: { id: bug._id } }">
              <BugComponent :bugData="bug"
            /></router-link>
          </li>
        </ul>
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
    this.$store.dispatch("getBugs");
  },
  data() {
    return {
      newBug: {
        closed: false,
        description: "",
        title: "",
        reportedBy: "",
        id: this.$route.params.id
      }
    };
  },
  methods: {
    show() {
      this.$modal.show("bugPopUp");
    },
    hide() {
      this.$modal.hide("bugPopUp");
    }
  },
  components: {
    BugComponent
  },
  computed: {
    bugs() {
      console.log("bugs in store", this.$store.state.bugs);
      return this.$store.state.bugs;
    },
    activeBug() {
      console.log("activeBug", this.$store.state.activeBug);
      return this.$store.state.activeBug;
    }
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
