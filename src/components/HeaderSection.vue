<template>
      <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <!-- ***** Logo Start ***** -->
                    <a href="index.html" class="logo">
                        <!-- ***** <img src="assets/images/MoCFA_logo.png" alt=""> *****-->
                    </a>
                    <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** -->
                    <ul class="nav">
                    <li class="nav-item" :class="{ active: $route.path == '/' }">
                         <router-link to="/" class="nav-link"> {{ $t("home") }} <span class="sr-only">(current)</span></router-link>
                    </li>
                
                    <li class="nav-item" :class="{ active: $route.path == '/historical_Sites' }">
                         <router-link to="/historical_Sites" class="nav-link">{{ $t("historical") }}</router-link>
                    </li>
                    <li class="nav-item" :class="{ active: $route.path == '/museum' }">
                         <router-link to="/museum" class="nav-link">{{ $t("museum") }}</router-link>
                    </li>
                    <li class="nav-item" :class="{ active: $route.path == '/event' }">
                         <router-link to="/event" class="nav-link">{{ $t("event") }}</router-link>
                    </li>
                    <li class="nav-item" :class="{ active: $route.path == '/arts' }">
                         <router-link to="/arts" class="nav-link">{{ $t("arts") }}</router-link>
                    </li>
                    <li class="nav-item" :class="{ active: $route.path == '/about' }">
                         <router-link to="/about" class="nav-link">{{ $t("about") }}</router-link>
                    </li>
                    <li><a @click="changeLng('en')" id="changeLng" style="background-color: white"><img :src="imgs[currentImage]" id="img" alt="" height="20px"/></a></li>
                    </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    <!-- ***** Menu End ***** -->
                </nav>
            </div>
        </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
</template>

<script>
export default {
  data(){
    return{
      currentImage:1,
      imgs:[
        "assets/images/EN.png","assets/images/kh.png"
      ],
    }
  },
  name: "App",
  methods: {
    changeLng() {
      console.log(this.$i18n.locale);
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "khm";
        this.currentImage=0;
      } else {
        this.$i18n.locale = "en";
        this.currentImage=1;
      }
    },
  },
};
</script>