<template>
  <b-col md="12">
    <div class="hotel-card m-2">
      <b-row>
        <!-- Hotel Image -->
        <b-col md="6" lg="2">
          <b-card-img :src="hotel.image" alt="" />
        </b-col>
        <!-- Hotel Card Header -->
        <b-col md="3" lg="5">
          <b-card-title :title="hotel.name" />
          <b-form-rating
            :value="hotel.rating"
            size="sm"
            readonly
            no-border
            class="star"
          ></b-form-rating>
          <b-card-sub-title :sub-title="hotel.shortDescription" />
          <b-card-body class="mt-1 p-0">
            {{ hotel.description }}
          </b-card-body>
        </b-col>
        <!-- Hotel Details -->
        <b-col md="3" lg="5">
          <div class="hotel-card__details">
            <div>
              <h6>{{ ratingTitle(hotel.rating) }}</h6>
              <div class="hotel-card__details-comment">
                {{ hotel.comments.length }} comments
              </div>
            </div>
            <div class="hotel-card__details-rating">{{ hotel.rating }}</div>
          </div>
          <div class="hotel-card__details-more">
            <h5>Services</h5>
            <hr />
            <div class="hotel-card__details-more--svg-container">
              <img
                v-for="service in hotel.services"
                :key="service.service"
                :src="require(`../assets/icons/${service.service}.png`)"
                width="30"
                height="30"
                alt=""
              />
            </div>
          </div>
          <div class="mt-2 hotel-card__details-btn-select-container">
            <b-button variant="primary" @click="selectHotel(hotel.id)">Select</b-button>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-col>
</template>

<script>
export default {
  props: {
    hotel: {
      tyle: Object,
      required: true,
    },
  },
  methods: {
    /**
     * Push to Hotel page.
     * It is used when hotel is selected.
     * @param {number} id - Id of hotel.
     */
    selectHotel(id) {
      this.$router.push({ name: "Hotel", params: { id } });
    },
  },
};
</script>
