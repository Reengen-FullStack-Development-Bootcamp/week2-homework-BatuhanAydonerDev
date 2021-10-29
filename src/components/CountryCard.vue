<template>
  <b-col md="4">
    <b-card
      overlay
      :img-src="item.countryImage"
      img-alt="Card Image"
      text-variant="white"
      :title="item.city"
      :sub-title="`${item.hotels.length} Hotel(s)`"
      class="country-card"
      @click="selectCountry(item.city)"
    >
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectCountry(city) {
      this.$router.push({ name: "Hotels", params: { city: city.toLowerCase() } });
    },
  },
};
</script>
