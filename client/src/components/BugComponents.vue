<template>
  <tr class="bg-light text-dark">
    <td>
      <router-link :to="{ name: 'bugSpecs', params: { id: bugData._id } }">
        {{ bugData.title }}
      </router-link>
    </td>
    <td class="col">{{ bugData.reportedBy }}</td>
    <td style="color: green" class="col" v-if="bugData.closed === false">
      Open
    </td>
    <td style="color: red" class="col" v-if="bugData.closed === true">
      Closed
    </td>
    <td class="col">{{ date }}</td>
    <td class="col">
      <i style="color: red" class="fas fa-trash-alt pl-3"></i>
    </td>
  </tr>
</template>

<script>
export default {
  name: "bugs",
  props: ["bugData"],
  computed: {
    date() {
      let d = new Date(this.bugData.updatedAt);
      return d.toLocaleDateString();
    },
    bugs() {
      console.log("bugs in store", this.$store.state.bugs);
      return this.$store.state.bugs;
    }
  }
};
</script>

<style>
.trash {
  text-align: center;
}
</style>
