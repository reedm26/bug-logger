<template>
  <div class="container noteborder">
    <div class="row mb-4">
      <div class="col-12 d-flex flex-row">
        <h1 class="caps">{{ bug.title }}</h1>

        <div class="dropdown mt-2 ml-2">
          <button
            class="btn btn-sm btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="far fa-edit"></i>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              v-if="bug.closed === false"
              @click="closeBug(bug.id)"
              class="dropdown-item"
              href="#"
            >Close</a>
            <a v-if="bug.closed === false" @click="editBug" class="dropdown-item" href="#">Edit</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-4 desc-border text-dark back-color">
        <small>Reported By:</small>
        <h4>{{ bug.reportedBy }}</h4>
      </div>
      <div class="col-4"></div>
      <div class="col-4 back-color text-dark desc-border">
        <small>Status:</small>
        <h4 style="color: green" v-if="bug.closed === false">Open</h4>
        <h4 style="color: red" v-if="bug.closed === true">Closed</h4>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12">
        <h3>Description:</h3>
      </div>
    </div>
    <div class="row text-center">
      <p class="col back-color text-dark p-4 desc-border">{{ bug.description }}</p>
    </div>

    <div class="row">
      <div class="col">
        <!-- <bugNotes v-for="bugNote in bugNotes" :bugNoteProp="bugNotes" :key="bugNote.id" /> -->
      </div>
    </div>
    <div>
      <modal name="editPopUp">
        <form @submit.prevent="editBug">
          <input type="text" placeholder="title..." v-model="bug.title" name="title" />
          <input
            type="text"
            placeholder="description..."
            v-model="bug.description"
            name="description"
          />

          <button>Add</button>
        </form>
      </modal>
      <div class="col-12">Comments:</div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" @click="addBugNotes">Comment</button>
        </div>
      </div>
      <bugNotes v-for="bugNote in bugNotes" :key="bugNote.id" :bugData="bugNote" />
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
    closeBug(id) {
      Swal.fire({
        title: "Are you sure you want to close this?",
        text: "You won't be able to open this bug again!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, close it!"
      }).then(result => {
        if (result.value) {
          Swal.fire("Closed!", "Your bug has been closed.", "success");
          return this.$store.dispatch("closeBug", id);
        } else {
          return;
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
  },
  props: ["bugNotes"]
};
</script>

<style scoped>
.noteborder {
  border: 2px;
  text-align: center;
}
.back-color {
  background-color: #e5dfdf;
}
.caps {
  text-transform: capitalize;
}
.desc-border {
  border-radius: 25px;
}
</style>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia totam unde,
quidem soluta pariatur perferendis iste amet, voluptas eveniet ipsa repellendus
consectetur facilis animi blanditiis qui aut earum. Vero, ipsa! Lorem ipsum
dolor sit amet consectetur adipisicing elit. Quod animi quas, voluptatum maiores
qui quam fuga ducimus distinctio nihil temporibus odit deleniti! Voluptate,
accusamus corrupti quidem mollitia natus aut impedit.
