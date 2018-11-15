<template>
  <div id="app">
    <div class="boom" ref="boom"></div>
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
  },
  mounted() {
    const boom = this.$refs.boom;
    boom.fadeTime = 3000;

    boom.style.transition = `opacity ${boom.fadeTime}ms ease-out`;
    setTimeout(() => {
      boom.style.opacity = 0;

      setTimeout(() => {
        boom.parentElement.removeChild(boom);
      }, boom.fadeTime);
    }, 12000);
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
  background: url("./assets/images/circuit-board.jpg") no-repeat center / cover;
  background-color: $black;
  color: $white;

  .boom {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99999999999999999999999;
    width: 100vw;
    height: 100vh;
    background: url("./assets/images/boom.gif") no-repeat center / cover;
    background-position: -78px 0;
  }
}

a {
  color: $white;
}

.router-view {
  width: $widthContent;
  background-color: $gray-light;
  filter: drop-shadow(0 0 16px $black);

  .title {
    padding-top: 4px;
    padding-bottom: 6px;
    background: radial-gradient($gray-dark, $black);
    font-size: $fontSizeSmall + 4;
  }
}

// mobile

@media screen and (max-width: $breakpointMobile) {
  .router-view {
    width: 100vw;

    .title {
      padding-top: 8px;
    }
  }
}
</style>
