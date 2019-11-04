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

<style lang="scss" scoped>
  @import "./assets/scss/mixins.scss";
  #app {
    @include container();
  }
</style>
