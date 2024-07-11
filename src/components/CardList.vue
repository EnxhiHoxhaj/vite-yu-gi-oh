<script>
    import SingleCard from './SingleCard.vue';
      // importare lo store
    import {store} from '../store';
import { info } from 'sass';
        export default {
        name: 'CardList',
        components : {
            SingleCard
        },
        data () {
            return {
                store,
            }
        },
    }
</script>

<template>
    <section class="container">
        <div class="row">
            <div  v-for="card in store.cardDeck" :key="card.id" class="col-5 col-md-3 col-lg-2 mb-5 cont_card">
                <SingleCard :info="card"/>
            </div>
            <!-- schermata contenente le carte -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../style/general.scss' as *;
    @use '../style/partials/variables.scss' as *;

  
    .row {
        background-color: white;
        padding: 3rem 3rem 0.5rem;
        gap: 1rem;
        .cont_card {
            background-color: $primary-colour;
            width: calc(100% / 5 - 1rem);
            padding: 0;
        }
    }


</style>
