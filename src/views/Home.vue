<template>
  <div class="view-home">
    <img src="../assets/images/matt.jpg" class="img-matt" @click="rotateHue($event.target)">
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
    width: 100%;
    filter: hue-rotate(0);

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
