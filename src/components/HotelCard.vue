<template>
  <b-col md="12">
    <div class="hotel-card">
      <b-row>
        <b-col md="6" lg="2">
          <b-card-img
            src="https://cf.bstatic.com/xdata/images/hotel/square200/8337047.webp?k=90324122f0d5970dfa5b1d98e6a39a4f2ff51452cef03019f42c6dad91c57fc2&o=&s=1"
            alt=""
          />
        </b-col>
        <b-col md="3" lg="5">
          <b-card-title :title="item.name" />
          <b-card-sub-title :sub-title="item.shortDescription" />
          <b-card-body class="mt-1 p-0">
            {{ item.description }}
          </b-card-body>
        </b-col>
        <b-col md="3" lg="5">
          <div class="hotel-card__details">
            <div>
              <h6>{{ ratingTitle(item.rating) }}</h6>
              <div class="hotel-card__details-comment">
                {{ item.comments.length }} comments
              </div>
            </div>
            <div class="hotel-card__details-rating">{{ item.rating }}</div>
          </div>
          <div class="hotel-card__details-more">
            <h5>Services</h5>
            <hr />
            <div class="hotel-card__details-more--svg-container">
              <img
                v-for="service in item.services"
                :key="service.service"
                :src="require(`../assets/icons/${service.service}.png`)"
                width="30"
                height="30"
                alt=""
              />
            </div>
          </div>
          <div class="mt-2 hotel-card__details-btn-select-container">
            <b-button variant="primary" @click="selectHotel(item.id)">Select</b-button>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-col>
</template>

<script>
export default {
  props: {
    item: {
      tyle: Object,
      required: true,
    },
  },
  methods: {
    selectHotel(id) {
      this.$router.push({ name: "Hotel", params: { id } });
    },
  },
};
</script>
