<template>
  <div id="app">
    <Header />
    <Icon />
    <Menu />
    <Button />
    <Modal />
    <Info />
  </div>
</template>

<script>
import Header from './components/Header'
import Menu from './components/Menu'
import Icon from './components/Icon'
import Button from './components/Button'
import Modal from './components/Modal'
import Info from './components/Info'


export default {
  name: 'app',
  components: {
    Header,
    Icon,
    Menu,
    Button,
    Modal,
    Info
  }
}
</script>

<style scoped>

</style>
