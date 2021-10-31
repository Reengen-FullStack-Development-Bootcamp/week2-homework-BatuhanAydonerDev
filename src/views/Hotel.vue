<template>
  <b-row>
    <b-col sm="12" md="6">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000; height: 300px"
        fade
        controls
        label-prev=""
        label-next=""
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          v-for="(photo, i) in hotel.photos"
          :key="i"
          :img-src="photo"
          img-width="10px !important"
          class="hotel-carousel-slide-image"
          style="width: 100%; height: 300px"
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
      <h2>About</h2>
      <p>{{ hotel.longDescription }}</p>
      <hr />
      <div>
        <h2>
          <b-icon icon="map"></b-icon>
          {{ hotel.location }}
        </h2>
        <b-button variant="transparent" style="color: blue" v-b-modal.map-dialog
          >Show on map</b-button
        >
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
    <b-col sm="12" md="6">
      <b-card class="mb-2 reservation-card" title="Reservation">
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
          <b-form-group label="Date">
            <b-form-datepicker
              id="datepicker-full-width"
              v-model="reservation.date"
              locale="en-US"
              menu-class="w-100"
              calendar-width="100%"
              class="mb-2"
            ></b-form-datepicker>
          </b-form-group>
          <b-form-group label="Day(s)">
            <b-form-input
              id="number-of-day-input"
              ref="dayInput"
              v-model="reservation.numberOfDays"
              :value="reservation.numberOfDays"
              type="number"
              min="1"
              max="10"
              required
            ></b-form-input>
          </b-form-group>

          <div class="reserve-container mt-3">
            <h2 :class="{ oldPrice: controlPrice }">{{ hotel.price | price }}</h2>
            <h2 v-if="controlPrice">{{ totalPrice | price }}</h2>
            <b-button variant="primary" type="submit">Reserve</b-button>
          </div>
        </b-form>
      </b-card>
    </b-col>
    <map-dailog :coordinates="hotel.coordinates" :hotelName="hotel.name" />
  </b-row>
</template>

<script>
import MapDailog from "../components/Dialogs/MapDailog.vue";
import hotels from "../data/hotels.json";

export default {
  components: {
    MapDailog,
  },
  computed: {
    // Returns total price
    totalPrice() {
      return (
        this.hotel.price * this.reservation.numberOfPeople * this.reservation.numberOfDays
      );
    },
    /**
     * Returns a boolean value.
     * Control reservation.numberOfPeople and reservation.numberOfDaysfor old and new price.
     */
    controlPrice() {
      return this.reservation.numberOfPeople > 1 || this.reservation.numberOfDays > 1;
    },
  },
  created() {
    // city at url
    const urlCity = this.$route.params.city;
    // City at hotels array.
    const city = hotels.find((hotel) => hotel.city.toLowerCase() === urlCity);
    // Hotel at hotels array of city.
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
        date: new Date(),
      },
    };
  },
  methods: {
    /**
     * Submit for reservation.
     * Push to Reservation page.
     */
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
    // Returns total price.
    price() {
      return (
        this.hotel.price * this.reservation.numberOfPeople * this.reservation.numberOfDays
      );
    },
  },
};
</script>
