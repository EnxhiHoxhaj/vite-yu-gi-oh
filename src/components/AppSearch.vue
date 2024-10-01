<script>
// importare lo store
import {store} from '../store';
export default {
    name: 'AppSearch',
    
    data () {
        return {
            store,
        }
    },
    methods: {
        resetSerach() {
            //svuoto ricerca
            store.cercaArchetype= '';
            //ripartire ricerca
            this.$emit('search');
        }
    }
}

</script>

<template>
    <section class="container">     <div class="row">
        <div class="col-3 sel_archetype">
            <select name="Select archetype" id="Select archetype" v-model="store.cercaArchetype">
                <option value="" disabled selected hidden>Choose an archetype</option>
                <option :value="card.archetype" v-for="card in store.cardDeck" :key="card.id" @click.prevent="$emit('search')">{{card.archetype}}</option>
            </select>
            <button @click.prevent="resetSerach">RESET</button>
        </div>
    </div></section>

</template>


<style lang="scss" scoped>

    .sel_archetype {
        padding: 0;
        display: flex;
        align-items: center;
        gap: 1rem;

        button {
            border-radius: 5px;
            font-size: 1rem;
            height: 26px;
        }
    }

</style>