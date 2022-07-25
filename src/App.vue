<template>
  <div class="container">
    <Cloud />
    <SearchBar />
    <div v-if="location">
      <CurrentInfos :locationName="location.name" />
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar/index.vue";
import CurrentInfos from "./components/CurrentInfos/index.vue";
import Cloud from "./components/Cloud/index.vue";

export default {
  name: "App",

  components: {
    SearchBar,
    CurrentInfos,
    Cloud,
  },

  computed: {
    location() {
      return this.$store.getters.getLocation;
    },
  },
};
</script>

<style lang="scss">
@import "./main.scss";
</style>
