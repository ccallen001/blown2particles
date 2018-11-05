<template>
  <div id="app">
    <Header/>
    <Nav/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Nav,
    Footer
  }
};
</script>

<style lang="scss">
@import "./styles/main";

@import "./styles/fonts";
@import "./styles/helpers";
@import "./styles/variables";

// app level styles
#app {
  height: 100%;
  font-family: $roboto;
  background-color: $black;
  color: $white;
}
</style>
