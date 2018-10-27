<template>
  <div class="component-contact-widget" ref="componentContactWidget">
    <p class="instructions">click</p>
    <img
      src="../assets/images/matt-head.jpg"
      class="img-matt-head"
      @click="handleClick($event.target)"
    >
    <p class="instructions">me</p>
    <a
      href="https://www.facebook.com/blown2particles"
      target="_new"
      class="icon facebook"
      :class="{ iconsOut }"
    >
      <img src="../assets/images/icons/facebook.png">
    </a>
    <a
      href="https://www.linkedin.com/in/mattleavittvfx"
      target="_new"
      class="icon linkedin"
      :class="{ iconsOut }"
    >
      <img src="../assets/images/icons/linkedin.png">
    </a>
    <a
      href="https://www.youtube.com/user/blown2particles"
      target="_new"
      class="icon youtube"
      :class="{ iconsOut }"
    >
      <img src="../assets/images/icons/youtube.png">
    </a>
  </div>
</template>

<script>
export default {
  name: "contact-widget",
  data() {
    return {
      iconsOut: false,
      rotation: 0
    };
  },
  methods: {
    handleClick(elem) {
      // consider changing this for performance sake
      this.$refs.componentContactWidget
        .querySelectorAll(".icon")
        .forEach(icon => (icon.style.display = "initial"));

      this.iconsOut = !this.iconsOut;

      this.rotation += 360;
      elem.style.transform = `rotateZ(${this.rotation}deg)`;
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variables";

$componentHeight: 92px;

.component-contact-widget {
  top: 8px;
  max-height: $componentHeight !important;

  .instructions {
    &:first-of-type {
      padding-bottom: 3px;
    }

    color: $white;
  }

  .img-matt-head {
    z-index: 2;
    height: $componentHeight;
    transition: transform 100ms ease-out;

    &:hover {
      cursor: pointer;
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    display: none;
    transition: transform 333ms ease-out;
    transform: translateX(-50%) translateY(-50%);
    height: 32px;

    &.iconsOut {
      &.facebook {
        transform: translateX(200%);
      }
      &.linkedin {
        transform: translateX(-45%) translateY(350%);
      }
      &.youtube {
        transform: translateX(-250%);
      }
    }

    > img {
      height: 100%;
    }
  }
}
</style>
