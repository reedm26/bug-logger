<template>
  <div class="col-12 noteborder">
    <h1>Hello from BugSpecs</h1>
    <div class="row">
      <div class="col-4">
        Title:
        <h3>{{ bug.title }}</h3>
      </div>
      <div class="col-8">
        <p>
          Reported By:
        </p>
        <h6>{{ bug.reportedBy }}</h6>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h5>
          Description:
        </h5>
        <p class="border bg-light">{{ bug.description }}</p>
        <div class="button">
          <button class="bg-danger">Close</button>
        </div>
      </div>
    </div>

    <!-- <h5>
        Title:
        {{ bug.title }}
      </h5>
      <h3></h3>
      <p>{{ bug.description }}</p>
      <p>{{ bug.reportedBy }}</p> -->

    <div class="row">
      <div class="col-12">Notes:</div>
      <div class="col-4"><h5>Name</h5></div>
      <div class="col-4"><h5>Description</h5></div>
      <div class="col-4"><h5>Delete</h5></div>
      <bugNotes />
    </div>
  </div>
</template>

<script>
import bugNotes from "../components/Notes";
export default {
  name: "bugSpecs",
  data() {
    return {
      newNote: {
        reportedBy: "",
        content: "",
        closed: Boolean,
        bug: this.$route.params.id
      }
    };
  },
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
    this.$store.dispatch("getNotesByBugId", this.$route.params.id);
  },
  method: {
    makeNote() {
      let note = { ...this.newNote };
      this.newNote = {
        reportedBy: "",
        content: "",
        bug: this.$route.params.id
      };
      this.$store.dispatch("makeNote", note);
    }
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    bugNotes() {
      return this.$store.state.bugNotes;
    }
  },
  components: {
    bugNotes
  }
};
</script>

<style scoped>
.noteborder {
  border: 2px;
  text-align: center;
}
.box {
  text-align: center;
}
.button {
  text-align: end;
}
</style>
