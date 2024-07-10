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

    <AppHeader />

  

    <!--filtro di ricerca-->
    <AppSearch />
    <!-- schermata contenente le carte -->
    <CardList />


</template>

<style lang="scss">
  @use './style/general.scss';



</style>
