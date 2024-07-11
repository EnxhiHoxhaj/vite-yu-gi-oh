<script>
import { info } from 'sass';

export default {
    name : 'SingleCard',
    props: ['info'],
}
</script>

<template>
    <div class="character text-center" >
        <img :src="info.card_images[0].image_url">
        <h5>{{info.name}}</h5>
        <h6>{{info.archetype}}</h6>
    </div>

</template>

<style lang="scss" scoped>
    @use '../style/partials/variables.scss' as *;
    .character {
    img {
        width: 100%;
    }
    h5 {
        color: white;
        padding: 1rem 0;
    }
    h6 {
        color: black;
        padding: 1rem 0;
        }
    }

</style>