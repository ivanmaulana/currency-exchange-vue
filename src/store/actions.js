import { fetchGet } from '../utils/fetchers'
import {
  DICTIONARIES_URL,
  RATES_URL
} from '../utils/constants'

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

function changeBaseValue ({ commit }, payload) {
  commit(CHANGE_BASE_VALUE, payload)
}

// DICTIONARIES

function getDictionaries ({ commit }) {
  commit(GET_DICTIONARIES)

  fetchGet(DICTIONARIES_URL)
    .then(response => {
      commit(RECEIVED_DICTIONARIES, response)
    })
}

// RATES

function getRates ({ state, commit, dispatch }, rates) {
  if (!rates) {
    rates = state.currencies
  }

  commit(GET_RATES, rates)

  const URL = RATES_URL + rates.join(',')
  fetchGet(URL)
    .then(response => {
      if (response.error) {
        dispatch('removeCurrencies', rates[0])
      }
      else {
        commit(RECEIVED_RATES, { response, rates })
      }
    })
}


// ADD / REMOVE RATES ACTIONS
// ------------------------------------------

function removeCurrencies ({ commit }, currency) {
  commit(REMOVE_CURRENCIES, currency)
}

function addCurrency ({ state, commit, dispatch }, currency) {
  const { currencies } = state

  if (!currencies.includes(currency)) {
    commit(ADD_CURRENCY, currency)

    dispatch('getRates', [currency])
  }
}


// ADD CURRENCY FORM ACTIONS
// -----------------------------------------

function toggleAddCurrencyForm ({ commit }, toggle) {
  commit(TOGGLE_ADD_CURRENCY_FORM, toggle)
}

export default {
  changeBaseValue,
  addCurrency,
  removeCurrencies,
  toggleAddCurrencyForm,
  getDictionaries,
  getRates
}