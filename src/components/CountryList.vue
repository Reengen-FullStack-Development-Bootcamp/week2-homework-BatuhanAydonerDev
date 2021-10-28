<template>
  <div>
    <b-row>
      <country-card v-for="(item, i) in data" :key="i" :item="item" />
    </b-row>
  </div>
</template>

<script>
import CountryCard from "./CountryCard.vue";

export default {
  components: {
    CountryCard,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
