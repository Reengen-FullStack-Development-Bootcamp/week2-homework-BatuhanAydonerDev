<template>
  <div>
    <b-row>
      <hotel-card v-for="(item, i) in data" :key="i" :item="item" />
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
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
