<template>
  <nav class="component-nav">
    <ul class="container-flex margin-auto">
      <li>
        <router-link to="/" :class="{ selected: route === 'home' }">Home</router-link>
      </li>
      <li>
        <router-link to="/services" :class="{ selected: route === 'services' }">Services</router-link>
      </li>
      <li>
        <router-link to="/about" :class="{ selected: route === 'about' }">About</router-link>
      </li>
      <li>
        <router-link to="/contact" :class="{ selected: route === 'contact' }">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "nav-component",
  computed: {
    route() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss">
@import "../styles/fonts.scss";
@import "../styles/variables.scss";

// for the nav view indicator... the orange bar over the nav links
@mixin hoverSelected {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background-color: $orange;
}

.component-nav {
  padding-top: 16px;
  padding-bottom: 16px;
  background: radial-gradient($black, black);

  ul {
    width: $widthContent;

    li {
      // the router links
      a {
        padding-top: 17px;
        color: $white;
        font-size: $fontSizeSmall;

        &:hover {
          cursor: pointer;

          &::before {
            @include hoverSelected;
          }
        }

        &.selected {
          &::before {
            @include hoverSelected;
          }
        }
      }
    }
  }
}

// mobile

@media screen and (max-width: $breakpointMobile) {
  .component-nav {
    padding: 8px 0 8px;

    ul {
      width: 100vw;

      li {
        a {
          left: -4px;
          padding-top: 14px;
          font-size: $fontSizeTiny;
        }
      }
    }
  }
}
</style>
