<script>
export default {
    name: 'AppHeader',
    props: ['message']
}
</script>

<template>

        <div class="row">
            <div class="col-1">
                <div class="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Yu-Gi-Oh%21.png" alt="logo yu-gi-ho">
                </div>
            </div>
            <div class="col-2">
                <h1>{{ message }}</h1>
            </div>
        </div>

</template>

<style lang="scss" scoped>
    .row {
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

        h1 {
            color: black;
        }

    }

</style>
