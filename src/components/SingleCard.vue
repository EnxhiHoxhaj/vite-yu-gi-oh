<script>
import { info } from 'sass';

export default {
    name : 'SingleCard',
    props: ['info'],
}
</script>

<template>
    <div class="character text-center">
        <img :src="info.card_images[0].image_url">
        <h5>NOME DELLA CARTA</h5>
        <h6>Specie</h6>
    </div>

</template>

<style lang="scss" scoped>
    img {
        width: 100%;
    }

</style>