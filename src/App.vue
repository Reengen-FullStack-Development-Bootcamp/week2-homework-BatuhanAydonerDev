<template>
  <div id="app">
    <main-header />
    <b-container class="mt-2">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";

export default {
  components: {
    MainHeader,
  },
};
</script>

<style lang="scss"></style>
