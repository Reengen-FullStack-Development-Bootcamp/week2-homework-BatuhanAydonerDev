<template>
  <div>
    <b-row>
      <city-card v-for="(city, i) in cities" :key="i" :city="city" />
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
    cities: {
      type: Array,
      required: true,
    },
  },
};
</script>
