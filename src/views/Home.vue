<template>
  <div class="home">
    <city-list :data="allHotels" />
  </div>
</template>

<script>
// @ is an alias to /src
import hotels from "../data/hotels.json";
import CityList from "../components/CityList.vue";

export default {
  components: {
    CityList,
  },
  data() {
    return {
      allHotels: [...hotels], // Array of hotel
    };
  },
};
</script>
