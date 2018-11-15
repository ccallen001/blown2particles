<template>
  <footer class="component-footer">
    <div class="container-content margin-auto">
      <div class="container-flex text-left">
        <div class="about flex-2">
          <h4 class="title-footer">About</h4>
          <p
            class="content-footer"
          >Blown2Particles is a small freelance company that specializes in producing high-quality, concept through launch video products for businesses who are new to video marketing or working on a smaller budget. All Services Customizable & Include: Motion Graphics Animation, 3D Logos & Animation, Sales Videos, Promotional Material or Online Marketing for your Business.</p>
        </div>
        <div class="follow container-flex col">
          <h4 class="title-footer width-100">Follow</h4>
          <div class="container-flex justify-between">
            <a href="">
              <img src="../assets/images/icon-facebook.png">
            </a>
            <a href="">
              <img src="../assets/images/icon-linkedin.png">
            </a>
            <a href="">
              <img src="../assets/images/icon-youtube.png">
            </a>
          </div>
        </div>
        <div class="get-in-touch">
          <h4 class="title-footer">Get In Touch</h4>
          <ul class="content-footer">
            <li>
              <a href="">
                <i>i</i>Fort Wayne
              </a>
            </li>
            <li>
              <a href="">
                <i>i</i>260.438.4145
              </a>
            </li>
            <li>
              <a href="">
                <i>i</i>matt@blown2particles.com
              </a>
            </li>
            <li>
              <a href="">
                <i>i</i>Contact Us
              </a>
            </li>
            <li>
              <a href="">
                <i>i</i>#blown2particles
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright">©2018 Blown2Particles - All Rights Reserved</div>
  </footer>
</template>

<script>
export default {
  name: "footer-component"
};
</script>

<style lang="scss">
@import "../styles/fonts.scss";
@import "../styles/variables.scss";

.component-footer {
  padding-top: 16px;
  background-color: $black;

  .container-content {
    width: $widthContent;

    .about,
    .follow,
    .get-in-touch {
      letter-spacing: 1px;
    }

    .follow {
      a {
        // push the icons down a bit
        $distance: 8px;
        top: $distance;

        &:last-child {
          top: $distance + 6px;
        }

        // &:hover {
        //   filter: drop-shadow(0 1px 4px $orange);
        // }
      }
    }

    // .get-in-touch {
    //   a:hover {
    //     filter: drop-shadow(0 1px 4px $orange);
    //   }
    // }

    .title-footer {
      margin-bottom: 8px;
      color: $gray-light;
    }

    .content-footer {
      font-size: $fontSizeTiny;
    }
  }

  .copyright {
    margin-top: 12px;
    padding: 8px 0;
    font-size: $fontSizeTiny;
  }
}

// mobile

@media screen and (max-width: $breakpointMobile) {
  .component-footer {
    padding-top: 8px;

    .container-content {
      width: 100vw;

      > .container-flex {
        flex-direction: column;

        .about,
        .follow,
        .get-in-touch {
          padding: 0 8px;

          &:not(:last-child) {
            margin-bottom: 16px;
          }
        }

        .follow {
          .title-footer {
            margin-top: -8px;
          }

          a {
            margin: -8px;
            text-align: center !important;

            img {
              width: 32px;
            }
          }
        }

        .title-footer {
          margin-bottom: 8px;
          color: $gray-light;
        }

        .content-footer {
          font-size: 8px;
        }
      }
    }
  }
}
</style>
