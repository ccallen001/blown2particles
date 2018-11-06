<template>
  <div id="app">
    <Header/>
    <Nav/>
    <router-view class="router-view margin-auto"></router-view>
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
@import "./styles/main.scss";

@import "./styles/fonts.scss";
@import "./styles/helpers.scss";
@import "./styles/variables.scss";

// app level styles

#app {
  height: 100%;
  font-family: $orbitron;
  background-color: $black;
  color: $white;
}

a {
  color: $white;
}

.router-view {
  width: $widthContent;
  background-color: $gray-light;

  .title {
    padding-top: 1px;
    padding-bottom: 4px;
    background-color: $gray-dark;
    font-size: $fontSizeSmall + 4;
  }
}

// mobile

@media screen and (max-width: $breakpointMobile) {
  .router-view {
    width: 100vw;
  }
}
</style>
