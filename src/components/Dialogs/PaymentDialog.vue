<template>
  <b-modal id="payment-dialog" ref="payment-dialog" title="Payment Dialog" hide-footer>
    <!-- Credit Card -->
    <div class="credit-card">
      <div class="card-no">{{ cardNo }}</div>
      <div class="end-date">{{ date }}</div>
      <div class="card-name">{{ fullName }}</div>

      <div class="type" v-if="creditCardNo !== ''">
        <img
          :src="
            creditCardType
              ? 'data:image/png;base64,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'
              : 'https://pngimg.com/uploads/visa/visa_PNG36.png'
          "
          width="50"
          height="50"
          alt=""
        />
      </div>
    </div>
    <!-- Payment Form -->
    <b-form class="payment-form" @submit.prevent="submit">
      <!-- Fullname -->
      <b-form-group label="Name">
        <b-form-input
          v-model.trim="$v.fullName.$model"
          type="text"
          required
        ></b-form-input>
        <div class="error" v-if="!$v.fullName.required && $v.fullName.$anyDirty">
          Field is required
        </div>
      </b-form-group>
      <!-- Credit Card No -->
      <b-form-group label="Card NO">
        <b-form-input
          v-model="$v.creditCardNo.$model"
          type="text"
          max="12"
          required
        ></b-form-input>
        <div class="error" v-if="!$v.creditCardNo.required && $v.creditCardNo.$anyDirty">
          Field is required
        </div>
        <div
          class="error"
          v-if="
            (!$v.creditCardNo.min || !$v.creditCardNo.max) && $v.creditCardNo.$anyDirty
          "
        >
          Credit Card No is not at expected form.
        </div>
      </b-form-group>
      <!-- End Date -->
      <b-form-group label="End Date">
        <b-form-input v-model="$v.endDate.$model" type="text" required></b-form-input>
        <div class="error" v-if="!$v.endDate.required && $v.endDate.$anyDirty">
          Field is required
        </div>
        <div
          class="error"
          v-if="(!$v.endDate.min || !$v.endDate.max) && $v.endDate.$anyDirty"
        >
          Credit Card No is not at expected form.
        </div>
      </b-form-group>
      <!-- CVV -->
      <b-form-group label="CVV">
        <b-form-input v-model.trim="$v.cvv.$model" type="number" required></b-form-input>
        <div class="error" v-if="!$v.cvv.required && $v.cvv.$anyDirty">
          Field is required
        </div>
        <div class="error" v-if="(!$v.cvv.min || !$v.cvv.max) && $v.cvv.$anyDirty">
          Credit Card No is not at expected form.
        </div>
      </b-form-group>
      <!-- Submit Button of Form -->
      <b-button variant="primary" type="submit" class="mt-3">Complete</b-button>
    </b-form>
  </b-modal>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      fullName: null,
      creditCardNo: "",
      endDate: "",
      cvv: null,
    };
  },
  methods: {
    // Hide dialog and emit to parent dialog is hidden.
    submit() {
      this.$refs["payment-dialog"].hide();
      this.$emit("paid");
    },
  },
  computed: {
    // Control credit card type.
    creditCardType() {
      return this.creditCardNo[0] % 2 === 0;
    },
    // Format credit card no.
    cardNo() {
      return this.creditCardNo.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
    },
    // Format end date.
    date() {
      let date = this.endDate.split("");
      if (this.endDate.length >= 2) {
        date.splice(2, 0, "/");
        return date.join("").toString();
      }
      return this.endDate;
    },
  },
  validations: {
    fullName: {
      required,
    },
    creditCardNo: {
      required,
      min: minLength(16),
      max: maxLength(16),
    },
    endDate: {
      required,
      min: minLength(4),
      max: maxLength(4),
    },
    cvv: {
      required,
      min: minLength(3),
      max: maxLength(3),
    },
  },
};
</script>
