<template>
  <b-row>
    <b-col md="4" lg="3">
      <b-img :src="hotel.image" width="300" height="300"></b-img>
    </b-col>
    <b-col md="8" lg="9">
      <div class="hotel-header">
        <div>
          <b-card-title>{{ hotel.name }}</b-card-title>
          <b-card-sub-title>{{ hotel.shortDescription }}</b-card-sub-title>
        </div>
        <div style="display: flex; align-items: center">
          <div>{{ ratingTitle(hotel.rating) }}</div>
          <div class="hotel-card__details-rating">{{ hotel.rating }}</div>
        </div>
      </div>
      <hr />
      <b-card-body>{{ hotel.longDescription }}</b-card-body>
    </b-col>
    <b-col md="12 d-flex justify-content-center">
      <img
        v-for="(photo, i) in hotel.photos"
        :key="i"
        :src="photo"
        alt=""
        width="150"
        height="150"
        class="m-2"
      />
    </b-col>
  </b-row>
</template>

<script>
import hotels from "../data/hotels";
import RatingTitle from "../mixins/RatingTitle.vue";

export default {
  mixins: [RatingTitle],
  created() {
    const urlCity = this.$route.params.city;
    const city = hotels.find((hotel) => hotel.city.toLowerCase() === urlCity);
    const hotel = city.hotels.find(
      (hotel) => hotel.id === parseInt(this.$route.params.id)
    );
    this.hotel = hotel;
  },
  data() {
    return {
      hotel: null,
    };
  },
};
</script>
