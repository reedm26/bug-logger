<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>the note page</h1>
        <div>{{bugNotes.content}}</div>
      </div>
    </div>
  </div>
  <!-- <div class="bugNotes">
    <div class="row">
      <button @click.prevent="show" class="bg-danger">Add</button>
      <div class="col-12 border">
        <div>
          <modal name="notePopUp">
            <form @submit="makeNotes">
              <input
                type="text"
                placeholder="whatdoyou want to say..."
                v-model="newNote.content"
                name="content"
              />
              <input
                type="text"
                placeholder="reported by..."
                v-model="newNote.reportedBy"
                name="reportedBy"
              />
              <button @click="hide" type="submit">add note</button>
            </form>
          </modal>
  </div>-->
  <!-- <div> -->
  <!-- <tr class="bugNote" @click="displayNotes(bug._id)">
    <td>{{ newNote.content }}</td>
    <td>{{ newNote.reportedBy }}</td>
    <td class="status open" v-if="newNote.closed == false"></td>
    <td class="status closed" v-else>{{ newNote.status }}</td>
    <td>{{ newNote.newDate }}</td>
  </tr>-->
  <!-- <ul>
            <li v-for="bugNote in bugNotes" :key="bugNote.id">
              <h1>{{ bugNote.reportedBy }}</h1>
            </li>
          </ul>
        </div>
      </div>
  </div>-->
  <!-- </div> -->
</template>

<script>
export default {
  name: "bugNotes",
  data() {
    return {
      newNote: {
        reportedBy: "",
        content: "",
        bug: this.$route.params.id
      }
    };
  },
  methods: {
    makeNotes() {
      let bugNote = { ...this.newNote };
      this.newNote = {
        reportedBy: "",
        content: "",
        bug: this.$route.params.id
      };
      this.$store.dispatch("makeNotes", bugNote);
    },
    show() {
      this.$modal.show("notePopUp");
    },
    hide() {
      this.$modal.hide("notePopUp");
    }
  },
  computed: {
    bugNotes() {
      return this.$store.state.bugNotes;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
border {
  border: 3px;
  text-align: center;
}
</style>
