<script >
  import AppHeader from './components/AppHeader.vue';
  import CardList from './components/CardList.vue';
  export default {
    name: 'App',
    components: {
      AppHeader,
      CardList
    }
  }
</script>

<template>

  <!--Logo e titolo-->

  <AppHeader message="Yo-Gi-Oh Api"/>


  <main >
    <!-- schermata contenente le carte -->
    <CardList />
  </main>

</template>

<style lang="scss">
  @use './style/general.scss' as *;
  @use './style/partials/variables.scss' as *;

  main {
    background-color: $primary-colour;
  }

</style>
