<template>
  <main class="page">
    <header>header</header>
    <slot />
  </main>
</template>
<script>
const defaultLayout = 'DefaultLayout';

export default {
  name: 'DefaultLayout',

  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>
