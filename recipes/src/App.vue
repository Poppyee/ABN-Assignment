<template>
  <Navigation/>
  <router-view></router-view>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  },
  mounted () {
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: Lato;
}

#app ::-webkit-scrollbar {
    width: 10px;
}

#app ::-webkit-scrollbar-track {
    background: #dedede;
}

#app ::-webkit-scrollbar-thumb {
    background: #7a7a7a;
}

#app ::-webkit-scrollbar-thumb:hover {
    background: #555555;
}

#app h1, #app h2, #app h3, #app h4, #app h5, #app h6 {
  font-weight: 700;
}

</style>
