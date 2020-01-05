<template>
  <div class="row">
    <div class="col-12 border">
      <h1>{{ notes }}</h1>
      <p>
        <a>vue-cli documentation</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "bugNotes",
  computed: {
    notes() {
      return this.$store.state.bugNotes;
    }
  },
  props: ["noteData"]
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
  border: 2px;
  text-align: center;
}
</style>
