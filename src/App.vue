<script >
  import axios from 'axios';
  import AppHeader from './components/AppHeader.vue'
  import CardList from './components/CardList.vue'
  import AppSearch from './components/AppSearch.vue';
  // importare lo store
  import {store} from './store';
  export default {
    name: 'App',
    components: {
      AppHeader,
      CardList,
      AppSearch,
    },
    data () {
      return {
        store,
      }
    },
    methods: { 
      getDeck(){
        // salviamo nella variabile il riferimento al nostro mazzo di carte fineale
        let endDeck = store.apiURL;
        // aggiungiamo la ricerca delle carte in base all' archetype
        if(store.cercaArchetype !== ''){
          endDeck += `&${store.apiArchetypeParam}=${store.cercaArchetype}`
        }
        axios.
          get(endDeck)
          .then(risposta => {
            console.log(risposta.data.data);
            store.cardDeck = risposta.data.data;
          })
          .catch(err => {
            console.log(err);
          })
      }
    }, 
    created() {
      this.getDeck();
    }
  }
</script>

<template>

  <!--Logo e titolo-->

  <AppHeader message="Yo-Gi-Oh Api"/>


  <main >

    <AppSearch @search="getDeck"/>

    <!-- schermata contenente le carte -->
    <CardList />
  </main>

</template>

<style lang="scss">
  @use './style/general.scss' as *;
  @use './style/partials/variables.scss' as *;

  main {
    background-color: $primary-colour;
    .row {
        padding: 3rem 0;
    }
  }

</style>
