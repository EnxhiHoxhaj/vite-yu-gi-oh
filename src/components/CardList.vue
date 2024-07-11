<script>
    import SingleCard from './SingleCard.vue';
        export default {
        name: 'CardList',
        components : {
            SingleCard
        }
    }
</script>

<template>
    <section class="container">
        <div class="row">
            <div class="col-6 col-md-4 col-lg-2 mb-5">
                <SingleCard/>
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
