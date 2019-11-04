<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/layout/Header'

export default {
  name: 'app',
  components: {
    Header
  },
  methods: {
  }
}
</script>

<style scoped>
  #app {
    width: 95%;
    max-width: 1000px;
    margin: 4rem auto;
  }
</style>
