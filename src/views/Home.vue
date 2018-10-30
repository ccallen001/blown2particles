<template>
  <div class="view-home">
    <img
      ref="img-matt"
      src="../assets/images/matt.jpg"
      class="img-matt"
      @click="rotateHue($event.target)"
    >
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      hueRotationDeg: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.$refs["img-matt"].style.transform =
        "translateX(-50%) translateY(64px)";
    }, 500);
  },
  methods: {
    rotateHue(elem) {
      this.hueRotationDeg += 22.5;
      elem.style.filter = `hue-rotate(${this.hueRotationDeg}deg)`;
    }
  }
};
</script>

<style lang="scss">
.view-home {
  .img-matt {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(200%);
    transition: transform 666ms ease-out;
    height: 100%;
    filter: hue-rotate(0);

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
