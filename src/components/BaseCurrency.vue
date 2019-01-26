<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        <i>{{ base.name }} - {{ dictionaries.data[base.name] }}</i>
      </h5>

      <div class="card-text">
        <div class="float-left pt-2">
          <b>{{ base.name }}</b>
        </div>

        <div class="float-right">
          <input
            type="number"
            min="0"
            class="form-control"
            :value="base.value"
            @input="changeBaseValue($event.target.value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'BaseCurrency',
    computed: {
      ...mapState([
        'base',
        'dictionaries'
      ])
    },

    methods: {
      ...mapActions([
        'changeBaseValue'
      ])
    }
  }
</script>