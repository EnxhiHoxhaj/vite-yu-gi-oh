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
  
  <main>
    <!--filtro di ricerca-->
    <AppSearch />
    <!-- schermata contenente le carte -->
    <CardList />
  </main>

</template>

<style lang="scss">
  @use './style/general.scss'



</style>
