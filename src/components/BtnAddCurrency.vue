<template>
  <button class="btn btn-block btn-success" @click="toggleAddCurrencyForm(true)">
    (+) Add More Currencies
  </button>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'BtnAddCurrency',
    methods: {
      ...mapActions([
        'toggleAddCurrencyForm'
      ])
    }
  }
</script>