<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        name="currency"
        placeholder="Add Currency Here"
        aria-label="Add Currency Here"
        aria-describedby="button-addon2"
        @input="handleInput"
        :value="currency"
      />
      
      <div class="input-group-append">
        <button class="btn btn-primary" type="submit" id="button-addon2">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'FormAddCurrency',

    data() {
      return {
        currency: ''
      }
    },

    methods: {
      ...mapActions([
        'addCurrency'
      ]),
      handleInput(event) {
        this.currency = event.target.value
      },
      handleSubmit() {
        this.addCurrency(this.currency.toUpperCase())
      }
    }
  }
</script>