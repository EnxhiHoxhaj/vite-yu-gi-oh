<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <section class="row">
        <div class="col-1">
            <div class="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Yu-Gi-Oh%21.png" alt="logo yu-gi-ho">
            </div>
        </div>
        <div class="col-2">
            <h1 id="titolo">Yo-Gi-Oh Api</h1>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .row {
        width: 100vw;
        position: absolute;
        left: 0;
        top: 0;
        padding: 1rem 0;

        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;

            img {
                width: 60%;
            }
        }

        #titolo {
            font-size: 2.2rem;
        }

    }

</style>
