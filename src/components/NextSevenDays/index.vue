<template>
  <div class="next-seven-days-item" v-if="index != 0">
    <h4 class="next-seven-days-item-days">
      {{ index == 1 ? "Tomorrow" : index }}{{ index == 1 ? "" : ". Day" }}
    </h4>
    <div class="next-seven-days-item__weather">
      <span class="next-seven-days-item__title bold">Weather:</span>
      <span>{{ item?.weather[0]?.description }}</span>
    </div>

    <div class="next-seven-days-item__pressure">
      <span class="next-seven-days-item__title bold">Pressure:</span>
      <span>{{ item?.pressure }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "next-seven-days-comp",

  props: {
    item: Object,
    index: Number,
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
