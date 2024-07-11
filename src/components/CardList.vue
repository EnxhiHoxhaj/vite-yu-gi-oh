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
            <div v-for="card in store.cardDeck" :key="card.id" class="col-5 col-md-4 col-lg-2 mb-5">
                <SingleCard :info="card"/>
            </div>
            <!-- schermata contenente le carte -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../style/general.scss' as *;
    @use '../style/partials/variables.scss' as *;

  
    div {
    min-height: 600px;
    border: solid black 0.01px;
    }


</style>
