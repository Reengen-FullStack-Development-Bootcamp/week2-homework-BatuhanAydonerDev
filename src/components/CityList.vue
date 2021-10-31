<template>
  <div>
    <b-row>
      <city-card v-for="(city, i) in data" :key="i" :city="city" />
    </b-row>
  </div>
</template>

<script>
import CityCard from "./CityCard.vue";

export default {
  components: {
    CityCard,
  },
  props: {
    // Array of city
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
