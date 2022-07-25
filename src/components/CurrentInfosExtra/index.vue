<template>
  <div class="current-infos-extra">
    <div class="current-infos-extra__windspeed">
      <span class="current-infos-extra-title bold">Wind Speed:</span>
      <span>{{ windSpeed }}</span>
    </div>

    <div class="current-infos-extra__humidity">
      <span class="current-infos-extra-title bold">Humidity:</span>
      <span>{{ humidity }}</span>
    </div>

    <div class="current-infos-extra__pressure">
      <span class="current-infos-extra-title bold">Pressure:</span>
      <span>{{ pressure }}</span>
    </div>

    <div class="current-infos-extra__sunriseTime">
      <span class="current-infos-extra-title bold">Sunrise Time:</span>
      <span>{{ timeChanger(sunriseTime) }}</span>
    </div>

    <div class="current-infos-extra__sunsetTime">
      <span class="current-infos-extra-title bold">Sunset Time:</span>
      <span>{{ timeChanger(sunsetTime) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "current-infos-extra-comp",

  props: {
    windSpeed: Number,
    humidity: Number,
    pressure: Number,
    sunriseTime: Number,
    sunsetTime: Number,
  },

  methods: {
    timeChanger: function (time) {
      var date = new Date(time);
      return date.getHours() + ":" + date.getMinutes();
    },
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
