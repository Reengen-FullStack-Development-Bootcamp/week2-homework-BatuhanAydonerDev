<template>
  <b-row>
    <b-col sm="12" md="6">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        controls
        label-prev=""
        label-next=""
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          caption="First slide"
          img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Second Slide"
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel>
      <div class="hotel-header">
        <div>
          <b-card-title :title="hotel.name"></b-card-title>
          <b-card-sub-title :sub-title="hotel.shortDescription"></b-card-sub-title>
        </div>
        <div>
          <h3>{{ hotel.price }}</h3>
          <p>per/night</p>
        </div>
      </div>
      <div class="hotel-services">
        <div class="detail" v-for="service in hotel.services" :key="service.service">
          <img
            :src="require(`../assets/icons/${service.service}.png`)"
            width="30"
            height="30"
            alt=""
          />
          <div>{{ service.description }}</div>
        </div>
      </div>
      <hr />
      <b-button variant="primary" @click="checkedReservation = !checkedReservation">
        {{ checkedReservation ? "Hide" : "Show" }} Reservation Card
      </b-button>
      <b-card v-if="checkedReservation" class="mt-2"></b-card>
    </b-col>
    <b-col sm="12" md="6">
      <div>
        <h2>
          <b-icon icon="map"></b-icon>
          {{ hotel.location }}
        </h2>
      </div>
      <hr />
      <div class="hotel-details">
        <div class="hotel-rating">{{ hotel.rating }}</div>
        <div>
          <h4>{{ ratingTitle(hotel.rating) }}</h4>
          <div class="hotel-card__details-comment">
            {{ hotel.comments.length }} comments
          </div>
        </div>
      </div>
      <div class="hotel-comments">
        <ul>
          <li v-for="(comment, i) in hotel.comments" :key="i" class="comment">
            <div class="header">
              <h4>{{ comment.title }}</h4>
              <div class="hotel-rating">{{ comment.rating }}</div>
            </div>
            <p>
              <q>{{ comment.comment }}</q>
            </p>
            <div class="name">-{{ comment.name }}-</div>
          </li>
        </ul>
      </div>
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
      checkedReservation: false,
    };
  },
};
</script>
