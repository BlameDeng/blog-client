<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "App",
    };
</script>

<style scoped lang="scss">
    @import './assets/base.scss';
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>