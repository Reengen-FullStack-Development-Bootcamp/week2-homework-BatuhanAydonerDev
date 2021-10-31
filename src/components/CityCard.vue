<template>
  <b-col md="4">
    <b-card
      overlay
      :img-src="city.cityImage"
      img-alt="Card Image"
      text-variant="white"
      :title="city.city"
      :sub-title="`${city.hotels.length} Hotel(s)`"
      class="city-card m-2"
      @click="selectCity(city.city)"
    >
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
      required: true,
    },
  },
  methods: {
    /**
     * Push to Hotels page.
     * @param {number} id - Id of city.
     */
    selectCity(city) {
      this.$router.push({ name: "Hotels", params: { city: city.toLowerCase() } });
    },
  },
};
</script>
