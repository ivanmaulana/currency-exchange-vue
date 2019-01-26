<template>
  <div>
    <div v-if="isLoading" class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>

    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Spinner',
    props: {
      isLoading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>