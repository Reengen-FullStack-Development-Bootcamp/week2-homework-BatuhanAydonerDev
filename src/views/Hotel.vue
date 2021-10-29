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
          <h3>{{ hotel.price | price }}</h3>
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
      <b-card class="mt-2">
        <b-form @submit.prevent="submit">
          <b-form-group label="Number of People">
            <b-form-input
              id="number-of-people-input"
              ref="countInput"
              v-model="reservation.numberOfPeople"
              :value="reservation.numberOfPeople"
              type="number"
              min="1"
              max="10"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Day(s)">
            <b-form-input
              id="number-of-day-input"
              ref="dayInput"
              v-model="reservation.numberOfDays"
              :value="reservation.numberOfDays"
              type="number"
              min="1"
              max="7"
              required
            ></b-form-input>
          </b-form-group>
          <div class="reserve-container mt-3">
            <h2 :class="{ oldPrice: morePeople }">{{ hotel.price | price }}</h2>
            <h2 v-if="morePeople">{{ totalPrice | price }}</h2>
            <b-button variant="primary" type="submit">Reserve</b-button>
          </div>
        </b-form>
      </b-card>
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

export default {
  computed: {
    totalPrice() {
      return (
        this.hotel.price * this.reservation.numberOfPeople * this.reservation.numberOfDays
      );
    },
    morePeople() {
      return this.reservation.numberOfPeople > 1 || this.reservation.numberOfDays > 1;
    },
  },
  created() {
    const urlCity = this.$route.params.city;
    const city = hotels.find((hotel) => hotel.city.toLowerCase() === urlCity);
    const hotel = city.hotels.find(
      (hotel) => hotel.id === parseInt(this.$route.params.id)
    );
    this.hotel = hotel;
  },
  mounted() {
    this.$refs.countInput.focus();
  },
  data() {
    return {
      hotel: null,
      reservation: {
        numberOfPeople: 1,
        numberOfDays: 1,
      },
    };
  },
  methods: {
    submit() {
      this.$router.push({
        name: "Reservation",
        params: {
          reservation: {
            name: this.hotel.name,
            numberOfPeople: parseInt(this.reservation.numberOfPeople),
            totalPrice: this.price(),
          },
        },
      });
    },
    price() {
      return (
        this.hotel.price * this.reservation.numberOfPeople * this.reservation.numberOfDays
      );
    },
  },
};
</script>
