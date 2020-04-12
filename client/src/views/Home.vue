<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h3>
          <img alt="Vue logo" src="../assets/logo.png" />
          Bugger
          <button class="btn-sm btn-danger" @click="addNewBug()">Report</button>
          <div class="filter">
            <label for="filter-bugs">
              <h6>Hide Closed:</h6>
            </label>
            <input @click="sortStatus" type="checkbox" name="filter-bugs" />
          </div>
        </h3>
      </div>
      <table id="table" class="table table-bordered table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Reported By</th>
            <th scope="col">Status</th>
            <th scope="col">Last Modified</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <BugComponent v-for="bug in bugs" :key="bug.id" :bugData="bug" />
        </tbody>
      </table>
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

    async addNewBug() {
      const value = await Swal.fire({
        title: "Report Your Bug",
        html:
          '<input id="title" placeholder="title..." v-model="newBug.title" class="swal2-input">' +
          '<input id="description" placeholder="description..." class="swal2-input">' +
          '<input id="reportedBy" placeholder="reported by..." class="swal2-input">',
        showCancelButton: true,
        cancelButtonColor: "#d33",
        focusConfirm: false,
        preConfirm: () => {
          let title = document.querySelector("#title").value;
          let description = document.querySelector("#description").value;
          let reportedBy = document.querySelector("#reportedBy").value;
          if (title && description && reportedBy) {
            let bug = {
              title: title,
              description: description,
              reportedBy: reportedBy,
              closed: false
            };
            this.$store.dispatch("createBug", bug).then(response => {
              this.$router.push(`/bugs/` + this.$store.state.activeBug.id);
            });
          } else {
            Swal.showValidationMessage("Please fill out all fields");
          }
        }
      });
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

.filter {
  text-align: end;
}
body {
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
}
.back-color {
  color: #729192;
}
table {
  border-radius: 15px !important;
  border-collapse: collapse !important;
  border: none !important;
}
table th,
table td {
  border: none !important;
}
table th:first-child {
  border-radius: 15px 0 0 0 !important;
}
table th:last-child {
  border-radius: 0 15px 0 0 !important;
}
table tr:last-child td:first-child {
  border-radius: 0 0 0 15px !important;
}
table tr:last-child td:last-child {
  border-radius: 0 0 15px 0 !important;
}
table tr:hover td {
  background-color: #ddd !important;
}
</style>
