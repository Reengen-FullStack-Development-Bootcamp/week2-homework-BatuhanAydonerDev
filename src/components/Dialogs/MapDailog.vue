<template>
  <b-modal id="map-dialog" :title="hotelName" size="md" hide-footer>
    <!-- Embed -->
    <b-embed
      type="iframe"
      aspect="16by9"
      allowfullscreen
      :src="`https://maps.google.com/maps?q=${coordinates.lat},${coordinates.long}&hl=en&z=18&amp;output=embed`"
    >
    </b-embed>
  </b-modal>
</template>

<script>
export default {
  props: {
    // Hotel name.
    hotelName: {
      type: String,
    },
    // Coordinates of hotel.
    coordinates: {
      type: Object,
      required: true,
    },
  },
};
</script>
