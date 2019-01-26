import {
  GET_DICTIONARIES,
  GET_RATES,
  RECEIVED_DICTIONARIES,
  RECEIVED_RATES,
  ADD_CURRENCY,
  REMOVE_CURRENCIES,
  TOGGLE_ADD_CURRENCY_FORM,
  CHANGE_BASE_VALUE
} from './types'

export default {
  [CHANGE_BASE_VALUE] (state, payload) {
    state.base = {...state.base,
      value: payload
    }
  },

  // DICTIONATIES
  // -----------------------------------------

  [GET_DICTIONARIES] (state) {
    state.dictionaries = {...state.dictionaries,
      isGettingData: true
    }
  },
  [RECEIVED_DICTIONARIES] (state, payload) {
    state.dictionaries = {
      isGettingData: false,
      data: payload
    }
  },

  // RATES
  // -----------------------------------------
  
  [GET_RATES] (state, payload) {
    state.rates = {...state.rates,
      currenciesLoading: [...payload]
    }
  },
  [RECEIVED_RATES] (state, payload) {
    state.rates = {
      currenciesLoading: state.rates.currenciesLoading.filter(currency => !payload.rates.includes(currency)),
      data: {...state.rates.data,
        ...payload.response.rates
      }
    }
  },


  // ADD / REMOVE RATES
  // ------------------------------------------

  [ADD_CURRENCY] (state, payload) {
    state.currencies = [...state.currencies, payload]
  },

  [REMOVE_CURRENCIES] (state, payload) {
    state.currencies = state.currencies.filter(currency => currency !== payload)
  },

  // ADD CURRENCY FORM
  // ------------------------------------------

  [TOGGLE_ADD_CURRENCY_FORM] (state, payload) {
    state.isOpenAddCurrencyForm = payload
  }
}