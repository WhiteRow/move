<template>
  <header class="header" :class="classes">
    <div class="header__container page__container">
      <div class="header__logo logo text text--large-3">Move</div>
      <!-- menu -->
      <!-- button -->
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',

  props: {
    variations: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    classes() {
      return this.variations.map(mod => {
        return `header--${mod}`;
      });
    },
  },
};
</script>
