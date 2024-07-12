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
}

</script>

<template>
    
    <div class="col-3 sel_archetype">
                <select name="Select archetype" id="Select archetype" v-model="store.cercaArchetype">
                    <option :value="card.archetype" v-for="card in store.cardDeck" :key="card.id" @click.prevent="$emit('search')">{{card.archetype}}</option>
                </select>
            </div>
</template>


<style lang="scss" scoped>

    .sel_archetype {
                padding: 0;
            }

</style>