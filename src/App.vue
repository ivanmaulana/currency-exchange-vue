<template>
  <div id="app" class="container mt-5 mb-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <base-currency />
        <hr />

        <currency-section v-for="c in currencies" :key="c" :currency="c" />

        <form-add-currency v-if="isOpenAddCurrencyForm" />
        <btn-add-currency v-else />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import BaseCurrency from './components/BaseCurrency'
  import CurrencySection from './components/Currency'
  import BtnAddCurrency from './components/BtnAddCurrency'
  import FormAddCurrency from './components/FormAddCurrency'

  export default {
    name: 'app',
    components: {
      BaseCurrency,
      CurrencySection,
      BtnAddCurrency,
      FormAddCurrency
    },

    computed: {
      ...mapState([
        'currencies',
        'isOpenAddCurrencyForm'
      ])
    },

    mounted() {
      this.getRates()
      this.getDictionaries()
    },

    methods: {
      ...mapActions([
        'getRates',
        'getDictionaries'
      ])
    }
  }
</script>
