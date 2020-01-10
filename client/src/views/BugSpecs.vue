<template>
  <div class="col-12 noteborder">
    <h1>Hello from BugSpecs</h1>
    <div class="row">
      <div class="col-4 ">
        Title:
        <h3>{{ bug.title }}</h3>
      </div>
      <div class="col-8">
        <p>
          Reported By:
        </p>

        <h6>{{ bug.reportedBy }}</h6>
      </div>
      <div class="col-8">
        <p>
          Status:
        </p>
        <h6>{{ bug.closed }}</h6>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h5>
          Description:
        </h5>
        <p class="border bg-light">{{ bug.description }}</p>
        <div class="button">
          <button
            v-if="bug.closed === false"
            @click="closeBug"
            class="bg-danger"
          >
            Close
          </button>
          <button
            v-if="bug.closed === false"
            @click="editBug"
            class="bg-success"
          >
            Edit Bug
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- <div class="col-12">Notes:</div>
      <div class="col-4"><h5>Name</h5></div>
      <div class="col-4"><h5>Description</h5></div>
      <div class="col-4"><h5>Delete</h5></div>
      <div> -->
      <div class="col">
        <table>
          <tr>
            <th>Reported By</th>
            <th>Message</th>
            <th>Delete</th>
          </tr>
          <bugNotes
            v-for="bugNote in bugNotes"
            :bugNoteProp="bugNotes"
            :key="bugNote.id"
          />
        </table>
      </div>
    </div>
    <div>
      <modal name="editPopUp">
        <form @submit.prevent="editBug">
          <input
            type="text"
            placeholder="title..."
            v-model="bug.title"
            name="title"
          />
          <input
            type="text"
            placeholder="description..."
            v-model="bug.description"
            name="description"
          />

          <button>Add</button>
        </form>
      </modal>
    </div>
  </div>
</template>

<script>
import bugNotes from "../components/Notes";
export default {
  name: "bugSpecs",
  data() {
    return {
      changedBug: {
        title: "",
        description: "",
        bug: this.$route.params.id
      }
    };
  },

  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
    this.$store.dispatch("getNotesByBugId", this.$route.params.id);
  },
  methods: {
    closeBug() {
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this bug!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, close it!",
        cancelButtonText: "No, cancel!",
        closeOnConfirm: false,
        closeOnCancel: false
      }).then(softDelete => {
        if (softDelete) {
          swal("Deleted!", "Your bug has been deleted.", { icon: "success" });
          this.$store.dispatch("closeBug", this.$route.params.id);
        } else {
          swal("Cancelled", "Your bug is safe");
        }
      });
    },
    editBug() {
      let fixedBug = { ...this.changedBug };
      this.$store.dispatch("editBug", fixedBug);
      this.changedBug = {
        title: this.title,
        description: this.description,
        bug: this.$route.params.id
      };
    },
    show() {
      this.$modal.show("editBug");
    },
    hide() {
      this.$modal.hide("editBug");
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
