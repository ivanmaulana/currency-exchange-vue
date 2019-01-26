<template>
  <div class="card mb-2">
    <div class="row">
      <div class="col col-9 border-right">
        <div class="card-body">
          <h5 class="card-title">
            <div class="float-left">
              {{ currency }}
            </div>
            <div class="float-right">
              <spinner :isLoading="isLoading">
                {{ formatCurrency(base.value * rates.data[currency]) }}
              </spinner>
            </div>
          </h5>
          <div class="clearfix" />

          <div class="card-text mt-3">
            <div>
              <b><i>{{ currency }} - {{ dictionaries.data[currency] }}</i></b>
            </div>
            <div>
              <spinner :isLoading="isLoading">
                1 {{ base.name }} = {{ currency }} {{ formatCurrency(rates.data[currency]) }}
              </spinner>
            </div>
          </div>
        </div>
      </div>

      <div class="col col-3 pr-4">
        <div class="row h-100">
          <div class="col-sm-12 my-auto text-center">
            <button class="btn btn-default" @click="removeCurrencies(currency)">-</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { formatCurrency } from '../utils/formats'
  import Spinner from './Spinner'

  export default {
    name: 'Currency',
    components: {
      Spinner,
    },

    props: {
      currency: {
        type: String,
        required: true
      }
    },

    computed: {
      ...mapState([
        'base',
        'dictionaries',
        'rates'
      ]),
      isLoading() {
        return this.rates.currenciesLoading.includes(this.currency)
      }
    },

    methods: {
      ...mapActions([
        'removeCurrencies'
      ]),
      formatCurrency
    }
  }
</script>