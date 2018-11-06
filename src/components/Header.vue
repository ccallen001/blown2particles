<template>
  <header class="component-header">
    <div class="background"></div>
    <div class="container-inline">
      <div class="container-inline text-right">
        <h2 class="title-header block">Matt Leavitt</h2>
        <h4 class="sub-title-header">Multimedia Artist</h4>
      </div>
      <img src="../assets/images/bomb.gif" class="img-bomb">
    </div>
  </header>
</template>

<script>
export default {
  name: "header-component"
};
</script>

<style lang="scss">
@import "../styles/fonts.scss";
@import "../styles/variables.scss";

.component-header {
  padding: 8px 0 42px;
  background: linear-gradient($gray, $black);

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/images/black-splatter.png") no-repeat center /
      cover;
  }

  .title-header {
    margin-bottom: -32px;
    color: $orange;
    font-family: $rockSalt;
    font-size: $fontSizeHuge;
    letter-spacing: -2px;
    text-shadow: 0 4px 0 black, $textShadowBlack;
  }

  .sub-title-header {
    padding-right: 16px;
    font-size: $fontSizeMed;
    letter-spacing: 6px;
    text-shadow: 0 3px 0 black, $textShadowBlack;
  }

  .img-bomb {
    top: 10px;
    padding: 0 8px;
    width: 212px;
  }
}

// mobile

@media screen and (max-width: $breakpointMobile) {
  .component-header {
    padding-bottom: 30px;

    .title-header {
      left: -6px;
      margin-bottom: -12px;
      font-size: $fontSizeMed;
      letter-spacing: 1px;
      text-shadow: 0 4px 0 black, $textShadowBlack;
    }

    .sub-title-header {
      padding-right: 0;
      font-size: $fontSizeSmall;
      letter-spacing: 4px;
    }

    .img-bomb {
      top: 14px;
      padding: 0 8px;
      width: 100px;
    }
  }
}
</style>
