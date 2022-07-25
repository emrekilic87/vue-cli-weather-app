<template>
  <div class="search">
    <div class="loading-bar" v-if="!loading">
      <Circle8 />
    </div>
    <input
      type="text"
      name="search-location__name"
      placeholder="Location Name"
      autocomplete="off"
      v-model.trim="locationName"
      class="search-locaition__name"
      v-on:keyup.enter="search"
    />
    <button @click="search()" class="search-button" type="button">
      SEARCH
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Circle8 } from "vue-loading-spinner";

export default {
  name: "searchbar-comp",

  components: {
    Circle8,
  },

  data() {
    return {
      locationName: "",
      toastOptions: {
        position: "top-right",
        duration: 3000,
      },
      loading: false,
    };
  },

  mounted() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.fetchCurrentLocation({
          lat: latitude,
          lon: longitude,
        }).then((res) => {
          if (!res)
            return this.$toast.error(
              `Please Enter Location`,
              this.toastOptions
            );
          this.locationName = res.name;
          this.search();
        });
      },
      (error) => {
        console.log(error);
      }
    );
  },

  methods: {
    ...mapActions([
      "fetchLocation",
      "fetchCurrentInfos",
      "fetchCurrentLocation",
    ]),

    search() {
      this.loading = false;
      if (this.locationName == "")
        return this.$toast.error(`Please Enter Location`, this.toastOptions);
      this.fetchLocation(this.locationName).then((res) => {
        if (!res)
          return this.$toast.error(
            `Please Enter Correct Location Name`,
            this.toastOptions
          );
        this.currentInfosDatas(res.lat, res.lon);
        setTimeout(() => {
          this.loading = true;
        }, 1000);
      });
    },

    currentInfosDatas(lat, lon) {
      return this.fetchCurrentInfos({
        lat: lat,
        lon: lon,
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
