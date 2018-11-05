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
  name: "nav",
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

@mixin hoverSelected {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: $orange;
}

.component-nav {
  background-color: $black;

  ul {
    width: $widthContent;

    li {
      // the router links
      a {
        padding-top: 8px;
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
</style>