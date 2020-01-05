<template>
  <div class="col-12">
    <h1>Hello from BugSpecs</h1>
    <h5>
      Title:
      {{ bug.title }}
    </h5>
    <h3></h3>
    <p>{{ bug.description }}</p>

    <div class="row" id="noteborder">
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

<style>
#noteborder {
  border: 2px;
  text-align: center;
}
</style>
