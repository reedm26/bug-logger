<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h1>
          <img alt="Vue logo" src="../assets/logo.png" />
          Bugger
        </h1>
        {{ bugs }}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
<style>
img scoped {
  width: 10px;
  height: 10px;
}
</style>
