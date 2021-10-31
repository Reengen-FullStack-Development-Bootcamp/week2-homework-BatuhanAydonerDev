<template>
  <b-modal id="message-dialog" centered no-close-on-backdrop @hidden="hiddenDialog">{{
    message
  }}</b-modal>
</template>

<script>
export default {
  props: {
    // Message text.
    message: {
      type: String,
      required: true,
    },
  },
  methods: {
    // Push to Home when dialog is hidden.
    hiddenDialog() {
      this.$router.push("/");
    },
  },
};
</script>
