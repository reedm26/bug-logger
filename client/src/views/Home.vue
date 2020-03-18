<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h3>
          <img alt="Vue logo" src="../assets/logo.png" />
          Bugger
          <button class="btn-sm btn-danger" @click="show">Report</button>
          <div class="filter">
            <label for="filter-bugs">
              <h6>Hide Closed:</h6>
            </label>
            <input @click="sortStatus" type="checkbox" name="filter-bugs" />
          </div>
          <modal name="bugPopUp">
            <form @submit.prevent="createBug">
              <input type="text" placeholder="title..." v-model="newBug.title" name="title" />
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
              <button>Add</button>
            </form>
          </modal>
        </h3>
      </div>
      <div class="col-12">
        <div class="row outline bg-light">
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
              <BugComponent :bugData="bug" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <button
        type="button"
        name="bugPopUp"
        @click="showModal"
        data-toggle="modal"
        class="bg-primary"
      >Report Bug</button>

      <div
        class="modal fade bd-example-modal-sm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm">
          <div class="modal-content">...</div>
        </div>
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
    sortStatus(prop) {
      this.sort((prop = false));
      return bugData.closed;
    },
    show() {
      this.$modal.show("bugPopUp");
    },
    showModal() {
      this.$refs.newModal.show();
    },
    hide() {
      this.$modal.hide("bugPopUp");
    },
    createBug() {
      let bug = { ...this.newBug };
      this.$store.dispatch("createBug", bug);
      this.newBug = {
        title: "",
        description: "",
        reportedBy: ""
      };

      this.$router.push({
        path: `/bugs/` + this.$store.state.activeBug.id
      });
      this.$store.dispatch("getNotesByBugId");
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
  width: 5px;
  height: 6px;
  text-align: center;
}
.outline {
  border: 3rem;
}
.filter {
  text-align: end;
}
</style>
