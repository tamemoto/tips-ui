<template>
    <header class="l-heading">
        <h1 class="l-heading__main">css-design</h1>
        <h2 class="l-heading__sub">this is hoge</h2>
    </header>
</template>

<script>
    export default {
        name: "Header",
    }
</script>

<style lang="scss" scoped>
    .l-heading {
        width: 100%;
        margin-bottom: 45px;

        &__main {
            font-size: 2.8rem;
        }

        &__sub {
            font-size: 2rem;
        }
    }
</style>