<template>
  <div class="home">
    <country-list :data="allHotels" />
  </div>
</template>

<script>
// @ is an alias to /src
import hotels from "../data/hotels.json";
import CountryList from "../components/CountryList.vue";

export default {
  components: {
    CountryList,
  },
  data() {
    return {
      allHotels: [...hotels],
    };
  },
};
</script>
