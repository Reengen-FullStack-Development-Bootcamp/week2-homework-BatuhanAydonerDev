export default {
  methods: {
    ratingTitle(rating) {
      if (rating >= 7.0 && rating <= 8.0) {
        return "Good";
      } else if (rating >= 8.0 && rating <= 9.0) {
        return "Awesome";
      } else if (rating > 9.0) {
        return "Perfect";
      }

      return "So bad";
    },
  },
  filters: {
    price(val) {
      return "$" + val;
    },
  },
};
