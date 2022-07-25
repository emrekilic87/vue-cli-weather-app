<template>
  <div class="current-infos">
    <h1 class="current-infos__location-name">{{ locationName }}</h1>
    <div class="current-infos__icon-area">
      <img
        class="current-infos__icon"
        :src="`https://openweathermap.org/img/wn/${currentInfosData?.current?.weather[0]?.icon}@2x.png`"
        alt=""
      />
      <span class="current-infos__desc">{{
        currentInfosData?.current?.weather[0]?.description
      }}</span>
    </div>

    <div class="current-infos__temp-area">
      <div class="current-infos__high-temp">
        <span class="current-infos__temp-area-title bold"
          >Today's high temperature:</span
        >
        <span>{{ currentInfosData?.daily[0]?.temp?.max }} &#8451;</span>
      </div>
      <div class="current-infos__current-temp">
        <span class="current-infos__temp-area-title bold"
          >Current temperature:</span
        >
        <span>{{ currentInfosData?.current?.temp }} &#8451;</span>
      </div>
      <div class="current-infos__low-temp">
        <span class="current-infos__temp-area-title bold"
          >Today's low temperature:</span
        >
        <span>{{ currentInfosData?.daily[0]?.temp?.min }} &#8451;</span>
      </div>
    </div>

    <button
      @click="toggle()"
      class="current-infos__toggle-button"
      type="button"
    >
      Show/Hide Extra Infos
    </button>

    <CurrentInfosExtra
      v-if="isActive"
      :windSpeed="currentInfosData?.current?.wind_speed"
      :humidity="currentInfosData?.current?.humidity"
      :pressure="currentInfosData?.current?.pressure"
      :sunriseTime="currentInfosData?.current?.sunrise"
      :sunsetTime="currentInfosData?.current?.sunset"
    />

    <div class="next-seven-days">
      <h2 class="next-seven-days-title">Next 7 Days Weather</h2>
      <div class="next-seven-days-area">
        <NextSevenDays
          v-for="(item, index) in currentInfosData?.daily"
          :item="item"
          :index="index"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CurrentInfosExtra from "../CurrentInfosExtra/index.vue";
import NextSevenDays from "../NextSevenDays/index.vue";

export default {
  name: "current-infos-comp",

  props: {
    locationName: String,
  },

  components: {
    CurrentInfosExtra,
    NextSevenDays,
  },

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },

  computed: {
    currentInfosData() {
      return this.$store.getters.getCurrentInfos;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
