<template>
  <div>
    <b-row>
      <hotel-card v-for="(hotel, i) in hotels" :key="i" :hotel="hotel" />
    </b-row>
  </div>
</template>

<script>
import HotelCard from "./HotelCard.vue";

export default {
  components: {
    HotelCard,
  },
  props: {
    // Array of hotel
    hotels: {
      type: Array,
      required: true,
    },
  },
};
</script>
