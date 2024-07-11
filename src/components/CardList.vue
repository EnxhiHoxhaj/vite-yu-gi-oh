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
            <div class="col-3 sel_archetype">
                <select name="Select archetype" id="Select archetype" >
                    <option :value="card.archetype" v-for="card in store.cardDeck" :key="card.id">{{card.archetype}}</option>
                </select>
            </div>
        </div>
        <div class="row deck">
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
        padding: 3rem 0;

        .sel_archetype {
            padding: 0;
        }
    }
  
    .deck {
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
