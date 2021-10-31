<template>
  <div>
    <hotel-list :hotels="hotels" v-if="onlyHotel" />
    <router-view></router-view>
  </div>
</template>

<script>
import hotelData from "../data/hotels.json";
import HotelList from "../components/HotelList.vue";
export default {
  components: {
    HotelList,
  },
  data() {
    return {
      hotels: [], // Array of hotels
      onlyHotel: true, // Control that url has id as param.
    };
  },
  watch: {
    $route(val) {
      if (val.params.id !== undefined) {
        this.onlyHotel = false;
      } else {
        this.onlyHotel = true;
      }
    },
  },
  created() {
    const city = this.$route.params.city; // Get city param from url.
    this.hotels = [...hotelData.find((item) => item.city.toLowerCase() === city).hotels]; // Get hotels from hotelData using city param.
  },
};
</script>
