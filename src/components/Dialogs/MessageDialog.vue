<template>
  <b-modal id="message-dialog" centered no-close-on-backdrop @hidden="hiddenDialog">{{
    message
  }}</b-modal>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  methods: {
    hiddenDialog() {
      this.$router.push("/");
    },
  },
};
</script>
