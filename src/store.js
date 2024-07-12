import { reactive } from "vue"

export const store = reactive({
    cardDeck: [],
    apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=25&offset=0',
    cercaArchetype: '',
    apiArchetypeParam: 'archetype',
});