<template>
  <div class="page">
    <Header :variations="headerVariations" />
    <slot />
  </div>
</template>
<script>
import Header from '@/components/Header/index';

export default {
  name: 'DefaultLayout',

  components: {
    Header,
  },

  computed: {
    headerVariations() {
      return this.$route.meta.headerVariations || [];
    },
  },
};
</script>
