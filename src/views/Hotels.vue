<template>
  <div>
    <hotel-list :data="hotels" v-if="onlyHotel" />
    <router-view></router-view>
  </div>
</template>

<script>
import hotelData from "../data/hotels.js";
import HotelList from "../components/HotelList.vue";
export default {
  components: {
    HotelList,
  },
  data() {
    return {
      hotels: [],
      onlyHotel: true,
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
    const city = this.$route.params.city;
    this.hotels = [...hotelData.find((item) => item.city.toLowerCase() === city).hotels];
  },
};
</script>
