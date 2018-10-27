<template>
  <div id="app">
    <div class="app-background-image"></div>
    <header>
      <!-- the bubbles as backgroung image -->
      <div class="header-background-image"></div>
      <h1>Matt Leavitt</h1>
      <h2>Multi Media Artist</h2>
    </header>
    <div id="nav" class="flex-container justify-center">
      <router-link to="/" :class="{ activeView: activeView === 'home' }">Home</router-link>
      <router-link to="/services" :class="{ activeView: activeView === 'services' }">Services</router-link>
      <router-link to="/about" :class="{ activeView: activeView === 'about' }">About</router-link>
      <router-link to="/contact" :class="{ activeView: activeView === 'contact' }">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    activeView() {
      return this.$route.name;
    }
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

  .app-background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("./assets/images/tiny-matt.jpg");
    opacity: 0.1;
  }

  header {
    padding-top: 6px;
    padding-bottom: 18px;
    background: linear-gradient(to right, $black, brown, $white 33%, $black);
    background-position: -1px;
    color: $white;
    text-shadow: 0 2px 0 black, 0 1px 16px $black;
    border: 2px solid $black;
    border-bottom-width: 8px;

    // the bubbles
    .header-background-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("./assets/images/animated-bubbles.gif");
    }

    h1 {
      left: -6px;
      font-family: $rockSalt;
      font-size: $fontSizeBig;
      letter-spacing: 1px;
      text-shadow: 0 4px 0 black, 0 1px 24px $black;

      @media screen and (max-width: $widthMobile) {
        font-size: $fontSizeMed;
      }
    }
  }

  #nav {
    background: url("./assets/images/black-paisley-background.jpg") no-repeat
      center / cover;
    background-color: $black;
    border-bottom: 6px solid $black;

    a {
      padding: 32px 0 36px;
      color: $white;
      font-size: $fontSizeMed;
      font-weight: bold;

      @media screen and (max-width: $widthMobile) {
        padding: 20px 0 22px;
        font-size: $fontSizeSmall;
      }

      &.activeView {
        text-shadow: 0 1px 0 brown, 0 1px 24px $white;

        &::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: -4px;
          width: 100%;
          height: 8px;
          background: linear-gradient(to right, $white, brown);
          border: 2px solid $black;
          border-bottom: 1px solid $black;
          border-radius: 32px;
        }
      }

      &:hover {
        text-shadow: 0 1px 0 brown, 0 1px 24px $white;
      }
    }
  }
}
</style>
