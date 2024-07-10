<script >
  import AppHeader from './components/AppHeader.vue';
  import AppSearch from './components/AppSearch.vue';
  import CardList from './components/CardList.vue';
  export default {
    name: 'App',
    components: {
      AppHeader,
      AppSearch,
      CardList
    }
  }
</script>

<template>

  <!--Logo e titolo-->
  <header>
    <AppHeader />
  </header>

  <main class="container">
    <section class="col-12">
      <!--filtro di ricerca-->
      <AppSearch />
      <!-- schermata contenente le carte -->
      <CardList />
    </section>
  </main>




</template>

<style lang="scss">
  @use './style/general.scss' as *;
  @use './style/partials/variables.scss' as *;
  header {
    position: absolute;
    top: 0;
    left: 0;
  }
  .col-12 {
    width: 100vw;
    min-height: 400px;
    background-color: $primary-colour;
    position: absolute;
    left: 0;
    top: 82.2333px;
  }
</style>
