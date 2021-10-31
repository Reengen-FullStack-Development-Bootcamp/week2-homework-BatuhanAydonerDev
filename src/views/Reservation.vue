<template>
  <b-row>
    <b-col sm="12" md="8" order-sm="2" order-lg="1">
      <div>
        <!-- Tabs with card integration -->
        <b-card no-body>
          <!-- Tabs -->
          <b-tabs v-model="tabIndex" small card>
            <!-- Tab  -->
            <b-tab
              v-for="item in reservation.numberOfPeople"
              :key="item"
              :title="`${item}. Person`"
              :disabled="people.length < item - 1"
            >
              <!-- Person Form -->
              <b-form @submit.prevent="submit">
                <!-- Name -->
                <b-form-group label="Name">
                  <b-form-input
                    id="name-input"
                    :class="{ 'error-outline': $v.form.name.$error }"
                    ref="nameInput"
                    v-model.trim="$v.form.name.$model"
                    type="text"
                    required
                  ></b-form-input>
                  <div
                    class="error"
                    v-if="!$v.form.name.required && $v.form.name.$anyDirty"
                  >
                    Field is required
                  </div>
                </b-form-group>
                <!-- Surname -->
                <b-form-group label="Surname">
                  <b-form-input
                    id="surname-input"
                    :class="{ 'error-outline': $v.form.surname.$error }"
                    ref="surnameInput"
                    v-model.trim="$v.form.surname.$model"
                    type="text"
                    required
                  ></b-form-input>
                  <div
                    class="error"
                    v-if="!$v.form.surname.required && $v.form.surname.$anyDirty"
                  >
                    Field is required
                  </div>
                </b-form-group>
                <!-- Email -->
                <b-form-group label="Email">
                  <b-form-input
                    id="email-input"
                    :class="{ 'error-outline': $v.form.email.$error }"
                    ref="surnameInput"
                    v-model.trim="$v.form.email.$model"
                    type="email"
                  ></b-form-input>
                  <div
                    class="error"
                    v-if="!$v.form.email.email && $v.form.email.$anyDirty"
                  >
                    Email is not at expected form
                  </div>
                </b-form-group>
                <!-- Phone -->
                <b-form-group label="Phone" description="Exp: 5554443322">
                  <b-form-input
                    id="phone-input"
                    :class="{ 'error-outline': $v.form.phone.$error }"
                    ref="surnameInput"
                    v-model.trim="$v.form.phone.$model"
                    type="text"
                    required
                  ></b-form-input>
                  <div
                    class="error"
                    v-if="
                      (!$v.form.phone.phone ||
                        !$v.form.phone.minLength ||
                        !$v.form.phone.maxLength) &&
                      $v.form.phone.$anyDirty
                    "
                  >
                    Phone is not at expected form
                  </div>
                </b-form-group>
                <!-- Age -->
                <b-form-group label="Age">
                  <b-form-input
                    id="age-input"
                    :class="{ 'error-outline': $v.form.age.$error }"
                    ref="surnameInput"
                    v-model.trim="$v.form.age.$model"
                    type="number"
                    min="6"
                    required
                  ></b-form-input>
                  <div
                    class="error"
                    v-if="!$v.form.age.required && $v.form.age.$anyDirty"
                  >
                    Age is required
                  </div>
                  <div class="error" v-if="!$v.form.age.min && $v.form.age.$anyDirty">
                    Minimum age is 6
                  </div>
                </b-form-group>
                <!-- TC NO -->
                <b-form-group label="TC NO">
                  <b-form-input
                    id="tc-no-input"
                    :class="{ 'error-outline': $v.form.tc.$error }"
                    ref="surnameInput"
                    v-model.trim="$v.form.tc.$model"
                    type="text"
                    required
                  ></b-form-input>
                  <div class="error" v-if="!$v.form.tc.required && $v.form.tc.$anyDirty">
                    HES Code is required
                  </div>
                  <div class="error" v-if="!$v.form.tc.format && $v.form.tc.$anyDirty">
                    TC No is not at expected form
                  </div>
                </b-form-group>
                <!-- HES Code -->
                <b-form-group label="HES Code" description="Exp: AA11-1111-A1">
                  <b-form-input
                    id="hes-code-input"
                    :class="{ 'error-outline': $v.form.hesCode.$error }"
                    ref="surnameInput"
                    v-model.trim="$v.form.hesCode.$model"
                    type="text"
                    required
                  ></b-form-input>
                  <div
                    class="error"
                    v-if="!$v.form.hesCode.required && $v.form.hesCode.$anyDirty"
                  >
                    HES Code is required
                  </div>
                  <div
                    class="error"
                    v-if="!$v.form.hesCode.format && $v.form.hesCode.$anyDirty"
                  >
                    HES Code is not at expected form
                  </div>
                </b-form-group>
                <!-- Sex -->
                <b-form-group label="Sex">
                  <b-form-radio v-model="form.sex" value="0">Male</b-form-radio>
                  <b-form-radio v-model="form.sex" value="1">Female</b-form-radio>
                </b-form-group>
                <div style="text-align: center">
                  <b-button variant="primary" type="submit">Save</b-button>
                </div>
              </b-form>
            </b-tab>
          </b-tabs>
        </b-card>
        <div class="mt-2 d-flex justify-content-end">
          <b-button
            variant="primary"
            v-b-modal.payment-dialog
            :disabled="reservation.numberOfPeople !== people.length"
            >Complete</b-button
          >
        </div>
        <!-- Payment Dialog -->
        <payment-dialog @paid="paid" />
        <!-- Message Dialog -->
        <message-dialog :message="`Thanks ${fullName}, payment is successful`" />
      </div>
    </b-col>
    <!-- Reservation Details -->
    <b-col sm="12" md="4" order-sm="1" order-lg="2">
      <b-card
        :title="reservation.name"
        :sub-title="`Total Price: $${reservation.totalPrice}`"
      ></b-card>
    </b-col>
  </b-row>
</template>

<script>
import MessageDialog from "../components/Dialogs/MessageDialog.vue";
import PaymentDialog from "../components/Dialogs/PaymentDialog.vue";
import Validation from "../mixins/Validation";

export default {
  components: { PaymentDialog, MessageDialog },
  props: {
    // Props from url.
    reservation: {
      type: Object,
      required: true,
    },
  },
  mixins: ["Format", Validation],
  watch: {
    /**
     * Reset validation and if user is undefined, reset form.
     * Focus next name input.
     */
    tabIndex(val) {
      this.$v.$reset();
      const people = this.people;
      if (people[val] !== undefined) {
        this.form = { ...this.people[val] };
      } else {
        this.resetForm();
      }
      if (val < this.reservation.numberOfPeople) {
        setTimeout(() => {
          this.$refs.nameInput[val].focus();
        }, 0);
      }
    },
  },
  computed: {
    // Return name and surname of first user at people array.
    fullName() {
      if (this.people[0] === undefined) {
        return "";
      }

      return this.people[0].name + " " + this.people[0].surname;
    },
  },
  data() {
    return {
      tabIndex: 0,
      people: [],
      form: {
        name: null,
        surname: null,
        email: null,
        phone: null,
        age: null,
        hesCode: null,
        tc: null,
        sex: 0,
      },
    };
  },
  methods: {
    /**
     * Push new user to  people array or change user at people array.
     */
    submit() {
      let filledUser = this.people.find((item) => item.tc === this.form.tc);
      if (filledUser) {
        this.people[this.tabIndex] = {
          ...this.form,
        };
      } else {
        this.people.push(this.form);
        this.$v.$reset();
        this.resetForm();
        setTimeout(() => {
          this.tabIndex = this.tabIndex + 1;
        }, 0);
      }
    },
    // Reset form.
    resetForm() {
      this.form = {
        name: null,
        surname: null,
        email: null,
        phone: null,
        age: null,
        hesCode: null,
        tc: null,
        sex: 0,
      };
    },
    // Show MessageDialog.
    paid() {
      this.$bvModal.show("message-dialog");
    },
  },
};
</script>
