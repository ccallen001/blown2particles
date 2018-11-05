<template>
  <div class="view-services">
    <h1 class="title">Services</h1>
    <section class="services-overview">
      <h2 class="section-title">Overview</h2>
      <div class="flex-container">
        <div class="flex-2">
          <p>Blown2Particles is a small freelance business that specializes in producing high-quality, concept through launch video products for businesses who are new to video marketing or working on a smaller budget. All Services Customizable & Include: Motion Graphics Animation, 3D Logos & Animation, or Promotional Material for your Business or Sales Videos for a Product.</p>
        </div>
        <div></div>
      </div>
    </section>
    <section class="services-mission">
      <h2 class="section-title">Mission</h2>
      <p>Our mission is to provide your business with the digital tools for success not only for today, but tomorrow & beyond.</p>
    </section>
    <section class="services-offered">
      <h2 class="section-title">Services Offered</h2>
      <div class="grid container-flex">
        <div class="grid-col" v-for="gridCol in servicesOfferedGrid" :key="gridCol.title">
          <div class="grid-item" v-for="gridItem in gridCol.gridItems" :key="gridItem.title">
            <h4 class="grid-item-title">{{gridItem.title}}</h4>
            <p class="grid-item-content">{{gridItem.content}}</p>
            <router-link
              :to="gridItem.routerLink.to"
              v-if="gridItem.routerLink"
            >{{ gridItem.routerLink.display }}</router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="services-next-gen-media">
      <h2 class="section-title">NXT-GEN Media</h2>
      <p>Introducing...</p>
      <h5>NXT-GEN Media</h5>
      <h6>What is your business' place on the web?</h6>
      <p>In 2018, its nearly impossible to have any business without some form of an online footprint. With new resources available everyday that traffic is rapidly increasing. Making the transition to incorporate online advertising can be overwhelming.</p>
      <p>There are many services out there that can help get you started, but often the attention to detail to have your site up to standard is overlooked by the rush towards social media.</p>
      <p>NXT-GEN Media specializes in creating the tools for your business to thrive online. We are able to utilize the website and content you already have and convert it into an online marketing powerhouse. Building from the ground up is also an option.</p>
      <p>NXT-GEN Media has also partnered with some of the top talent in the area both established and rising talent to insure that your final product is exactly what you expect.</p>
      <router-link to="/about">Contact to Learn More</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "services",
  data() {
    return {
      servicesOfferedGrid: [
        {
          title: "left",
          gridItems: [
            {
              title: "Video Compositing/Editing",
              content:
                "Able to Edit any draft level of shot in Final Cut or Premiere. Green Screen, Rotoscopting, Color Correction/Grading, Set Extensions & More."
            },
            {
              title: "Online Advertising",
              content:
                "Marketing online is extremely powerful!  Certified in 2018 in Google Ads & Video Ads. Not only can your ads be created here, they can also be launched into action!"
            }
          ]
        },
        {
          title: "left-middle",
          gridItems: [
            {
              title: "3D Modeling & Animation",
              content:
                "Maya & Cinema 4D ready.  Able to box model any structural or organic object.  Able to convert blueprints to 3D.  Many forms of keyframe and procedural animation.  Animated company logos, background animations, or 3D video overlays can help you stand out!  No character animations."
            },
            {
              title: "Wanna Learn More?",
              content:
                "Contact today and I'll gladly discuss how any of these services or my help could grow your business.  Pricing will vary based on service.",
              routerLink: {
                display: "Head on Over",
                to: "/about"
              }
            }
          ]
        },
        {
          title: "right-middle",
          gridItems: [
            {
              title: "Motion Graphics",
              content:
                "Adobe After Effects, Nuke & Cinema 4D. Bring particles & other cutting edge effects  to your videos to give them a professional & modern presenation."
            },
            {
              title: "Web Optimization",
              content:
                "Get your website in top shape without having a full blown remodel.  Able to streamline and reorganize under the hood to make sure your audience isn't passing you by."
            }
          ]
        },
        {
          title: "right",
          gridItems: [
            {
              title: "Design",
              content:
                "Adobe Photoshop, Illustrator, InDesign.  Any promotional or marketing material for any print or digital media is available.  Your business cards, event promotions, social media material & much more."
            },
            {
              title: "Business Video Communication",
              content:
                "Want to incorporate video into your daily workflow or interact with your customers online?  Allow me to assist getting you the correct tools & training allowing you to hit the ground running."
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

.view-services {
  .title,
  .section-title {
    background-color: $gray;
  }

  .services-offered {
  }
}
</style>
