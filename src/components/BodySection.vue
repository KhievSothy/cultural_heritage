<template>
<div class="visit-country">
<div class="container">
  <div class="row1">
    <div class="col-lg-12">
      <div class="section-heading">
        <h2>{{ $t("Visit_One_Title") }}</h2>
        <p>{{ $t("Visit_One") }}</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-8">
      <div class="items">
        <div class="row">
          
          <div class="col-lg-12">
            <div class="item last-item">
              <div class="row">
                <div class="col-lg-4 col-sm-5">
                  <div class="image">
                    <router-link to="/historical_Sites" class="nav-link">
                      <img src="assets/images/AW.jpg" alt="">
                    </router-link>
                  </div>
                </div>
                <div class="col-lg-8 col-sm-7">
                  <div class="right-content">
                    <router-link to="/historical_Sites" class="nav-link">
                      <h4>{{ $t("historical") }}</h4>
                    </router-link>
                    <p>{{ $t("History_H") }}</p>
                  </div>
                  <div class="main-button">
                      <router-link to="/historical_Sites" class="nav-link">{{ $t("More") }}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="item last-item">
              <div class="row">
                <div class="col-lg-4 col-sm-5">
                  <div class="image">
                    <router-link to="/museum" class="nav-link">
                      <img src="assets/images/country-03.jpg" alt="">
                    </router-link>
                  </div>
                </div>
                <div class="col-lg-8 col-sm-7">
                  <div class="right-content">
                    <router-link to="/museum" class="nav-link"><h4>{{ $t("Museum_Title_H") }}</h4></router-link>
                    <p>{{ $t("Museum_H") }}</p>
                  </div>
                  <div class="main-button">
                      <router-link to="/museum" class="nav-link">{{ $t("More") }}</router-link>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="item last-item">
              <div class="row">
                <div class="col-lg-4 col-sm-5">
                  <div class="image">
                    <router-link to="/event" class="nav-link">
                      <img src="assets/images/WF.jpg" alt="">
                    </router-link>
                  </div>
                </div>
                <div class="col-lg-8 col-sm-7">
                  <div class="right-content">
                    <router-link to="/event" class="nav-link"><h4>{{ $t("event") }}</h4></router-link>
                    <p>{{ $t("Event_H") }}</p>
                  </div>
                  <div class="main-button">
                      <router-link to="/event" class="nav-link">{{ $t("More") }}</router-link>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-12">
            <div class="item last-item">
              <div class="row">
                <div class="col-lg-4 col-sm-5">
                  <div class="image">
                    <router-link to="/arts" class="nav-link">
                      <img src="assets/images/artH.jpg" alt="">
                    </router-link>
                  </div>
                </div>
                <div class="col-lg-8 col-sm-7">
                  <div class="right-content">
                    <router-link to="/arts" class="nav-link"><h4>{{ $t("arts") }}</h4></router-link>
                    <p>{{ $t("Art_H") }}</p>
                  </div>
                  <div class="main-button">
                      <router-link to="/arts" class="nav-link">{{ $t("More") }}</router-link>
                    </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="side-bar-map">
        <div class="row">
          <div class="col-lg-12">
            <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3994720.5313153905!2d99.96630780713132!3d12.105698693757775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310787bfd4dc3743%3A0xe4b7bfe089f41253!2sCambodia!5e0!3m2!1sen!2skh!4v1732732916259!5m2!1sen!2skh" width="100%" height="550px" frameborder="0" style="border:0; border-radius: 23px; " allowfullscreen=""></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-12">
        <ul class="page-numbers">
          <li><a href="#"><i class="fa fa-arrow-left"></i></a></li>
          <li><a href="#">1</a></li>
          <li class="active"><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#"><i class="fa fa-arrow-right"></i></a></li>
        </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      currentImage: 1,
      imgs: ["assets/images/EN.png", "assets/images/kh.png"],
    };
  },
  name: "App",
  methods: {
    changeLng() {
      console.log(this.$i18n.locale);
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "khm";
        this.currentImage = 0;
      } else {
        this.$i18n.locale = "en";
        this.currentImage = 1;
      }
    },
    toggleMenu() {
      this.slideToggle("#nav_mobile", 500); // Toggles with a 500ms duration
    },
    slideToggle(selector, duration = 500) {
      const el = document.querySelector(selector);
      if (!el) return;

      const isHidden = window.getComputedStyle(el).display === "none";
      if (isHidden) {
        this.slideDown(el, duration);
      } else {
        this.slideUp(el, duration);
      }
    },
    slideUp(el, duration = 500) {
      el.style.height = `${el.offsetHeight}px`; // Set current height
      el.style.transitionProperty = "height, margin, padding";
      el.style.transitionDuration = `${duration}ms`;
      el.style.overflow = "hidden";

      requestAnimationFrame(() => {
        el.style.height = "0";
        el.style.paddingTop = "0";
        el.style.paddingBottom = "0";
        el.style.marginTop = "0";
        el.style.marginBottom = "0";
      });

      setTimeout(() => {
        el.style.display = "none";
        el.style.removeProperty("height");
        el.style.removeProperty("padding-top");
        el.style.removeProperty("padding-bottom");
        el.style.removeProperty("margin-top");
        el.style.removeProperty("margin-bottom");
        el.style.removeProperty("overflow");
        el.style.removeProperty("transition-duration");
        el.style.removeProperty("transition-property");
      }, duration);
    },
    slideDown(el, duration = 500) {
      el.style.removeProperty("display");
      let display = window.getComputedStyle(el).display;

      if (display === "none") display = "flex";
      el.style.display = display;

      const height = el.offsetHeight; // Measure height before collapsing

      el.style.overflow = "hidden";
      el.style.height = "0";
      el.style.paddingTop = "0";
      el.style.paddingBottom = "0";
      el.style.marginTop = "0";
      el.style.marginBottom = "0";
      el.style.transitionProperty = "height, margin, padding";
      el.style.transitionDuration = `${duration}ms`;

      requestAnimationFrame(() => {
        el.style.height = `${height}px`;
        el.style.paddingTop = "";
        el.style.paddingBottom = "";
        el.style.marginTop = "";
        el.style.marginBottom = "";
      });

      setTimeout(() => {
        el.style.removeProperty("height");
        el.style.removeProperty("overflow");
        el.style.removeProperty("transition-duration");
        el.style.removeProperty("transition-property");
      }, duration);
    },
  },
};
</script>
<style scoped>
.visit-country {
  margin-top: 20px;
  margin-bottom: -20px;
}
.row1{
  
  --bs-gutter-x:1.5rem;
  --bs-gutter-y:0;
  /* display:flex; */
  flex-wrap:wrap;
  margin-top:calc(-1 * var(--bs-gutter-y));
  margin-right:calc(-.5 * var(--bs-gutter-x));
  margin-left:calc(-.5 * var(--bs-gutter-x))
  }
  .row1 h2{
    text-align: center;
  }
  .visit-country ul.page-numbers {
    text-align: center;
  }
  .section-heading{
    margin-bottom: 40px;
  }
  /* .page-numbers{
    margin-top: -20px;
  } */
</style>
