<template>
  <div id="header_container">
    <div
      id="nav_container"
      class="container d-flex justify-content-between align-items-center"
    >
      <div id="logo">
        <img src="assets/images/logo.png" alt="mocfa_logo" />
      </div>

      <h4 id="header_title" class="text-white">
        {{ $t("cultural_heritage") }}
      </h4>

      <div class="nav">
        <ul class="d-flex">
          <li>
            <router-link to="/" activeClass="link_active">
              {{ $t("home") }}</router-link
            >
          </li>
          <li>
            <router-link to="/historical_Sites" activeClass="link_active">
              {{ $t("historical") }}</router-link
            >
          </li>
          <li>
            <router-link to="/museum" activeClass="link_active">
              {{ $t("museum") }}</router-link
            >
          </li>
          <li>
            <router-link to="/event" activeClass="link_active">
              {{ $t("event") }}</router-link
            >
          </li>
          <li>
            <router-link to="/arts" activeClass="link_active">
              {{ $t("arts") }}</router-link
            >
          </li>
          <li>
            <router-link to="/about" activeClass="link_active">
              {{ $t("about") }}</router-link>
          </li>
          
          <li>
            <img
              @click="changeLng('en')"
              :src="imgs[currentImage]"
              id="flag_img"
            />
          </li>
        </ul>
      </div>

      <div id="toggle_btn" @click="toggleMenu()">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
    <!-- navigation -->
    <div id="nav_mobile">
      <ul class="d-flex flex-column align-items-center">
        <li>
          <router-link @click="toggleMenu()" to="/" activeClass="link_active">
            {{ $t("home") }}
          </router-link>
        </li>
        <li>
          <router-link
            @click="toggleMenu()"
            to="/historical_Sites"
            activeClass="link_active"
          >
            {{ $t("historical") }}
          </router-link>
        </li>
        <li>
          <router-link
            @click="toggleMenu()"
            to="/museum"
            activeClass="link_active"
          >
            {{ $t("museum") }}
          </router-link>
        </li>
        <li>
          <router-link
            @click="toggleMenu()"
            to="/event"
            activeClass="link_active"
          >
            {{ $t("event") }}
          </router-link>
        </li>
        <li>
          <router-link
            @click="toggleMenu()"
            to="/arts"
            activeClass="link_active"
          >
            {{ $t("arts") }}
          </router-link>
        </li>
        <li>
          <router-link
            @click="toggleMenu()"
            to="/about"
            activeClass="link_active"
          >
            {{ $t("about") }}
          </router-link>
        </li>
        <li @click="toggleMenu()">
          <img
            @click.stop="changeLng('en')"
            :src="imgs[currentImage]"
            id="flag_img"
          />
        </li>
      </ul>
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
#header_container {
  background-color: #31167a;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000000;
  opacity: 80%;
}
#nav_container {
  padding: 10px 0px;
}

#nav_mobile {
  display: none;
  justify-content: center;
}

#nav_mobile li {
  padding: 10px 0px;
}

#logo img {
  width: 65px !important;
}

li {
  padding: 0px 15px;
}

li a {
  color: white !important;
  transition: 0.3s all ease;
}

li a:hover,
#toggle_btn i:hover {
  color: rgb(165, 165, 165) !important;
}

#flag_img {
  cursor: pointer;
  width: 40px;
}

.link_active {
  border-bottom: 2px solid gold;
}

#toggle_btn i {
  color: white;
  font-size: 32px;
  transition: 0.3s all ease;
}

@media screen and (min-width: 992px) {
  #toggle_btn {
    display: none;
  }
  #nav_mobile {
    display: none !important;
  }
  #header_title {
    display: none;
  }
}

@media screen and (max-width: 992px) {
  .nav {
    display: none;
  }
  #toggle_btn {
    display: block;
  }
  #header_title {
    display: block;
  }
}

@media screen and (max-width: 576px) {
  #nav_container {
    padding: 10px;
  }
}
</style>
