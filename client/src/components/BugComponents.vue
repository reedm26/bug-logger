<template>
  <div class="d-flex">
    <div class="col-3">
      {{ bugData.title }}
    </div>
    <div class="col-3">{{ bugData.reportedBy }}</div>
    <div style="color: green" class="col-3" v-if="bugData.closed === false">
      Open
    </div>
    <div style="color: red" class="col-3" v-if="bugData.closed === true">
      Closed
    </div>
    <div class="col-3">{{ date }}</div>
  </div>
</template>

<script>
export default {
  name: "bugs",
  props: ["bugData"],
  computed: {
    date() {
      let d = new Date(this.bugData.updatedAt);
      return d.toLocaleDateString();
    }
  }
};
</script>

<style></style>
