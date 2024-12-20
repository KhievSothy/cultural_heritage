<template>
  <div class="M-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4>{{ $t("discover_events") }}</h4>
          <h2>{{ $t("event") }}</h2>
        </div>
      </div>
    </div>
  </div>

  <div id="historical_site_container">
    <h3 class="text-center">{{ $t("event") }}</h3>
    <hr />
  </div>

  <div class="amazing-deals album-art">
    <section id="alt-services" class="alt-services section album-art">
      <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
          <div class="col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
          <div class="service-item position-relative">
            <div class="img">
              <router-link to="/water_festival" activeClass="link_active"><img src="assets/images/wf05.jpg" class="img-fluid" alt=""></router-link>
             </div>
              <div class="details">
                <router-link to="/water_festival" activeClass="link_active">
                  <h3 class ="h1">{{ $t("Water_Festival_Title") }}</h3>
                </router-link>
            </div>
          </div>
        </div><!-- End Service Item -->

  <div class="col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
    <div class="service-item position-relative">
      <div class="img">
        <router-link to="/pchum_ben" activeClass="link_active"><img src="assets/images/bb02.jpg" class="img-fluid" alt=""></router-link>
      </div>
      <div class="details">
        <router-link to="/pchum_ben" activeClass="link_active">
          <h3 class ="h1">{{ $t("PB_Festival_Title") }}</h3>
        </router-link>
      </div>
    </div>
  </div><!-- End Service Item -->

  <div class="col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
    <div class="service-item position-relative">
      <div class="img">
        <router-link to="/khmer_new_year" activeClass="link_active"><img src="assets/images/khny05.jpg" class="img-fluid" alt=""></router-link>
      </div>
      <div class="details">
        <router-link to="/khmer_new_year" activeClass="link_active"><h3 class ="h1">
          {{ $t("Khmer_NewY_Title") }}</h3></router-link>
      </div>
    </div>
  </div><!-- End Service Item -->

  <div class="col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="500">
    <div class="service-item position-relative">
      <div class="img">
        <router-link to="/" activeClass="link_active"><img src="assets/images/aks05.jpg" class="img-fluid" alt=""></router-link>
      </div>
      <div class="details">
        <router-link to="/" activeClass="link_active"><h3 class ="h1">
          {{ $t("Angkor_Sangkran_Title") }}</h3>
        </router-link>
      </div>
    </div>
  </div><!-- End Service Item -->

  <div class="col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="500">
    <div class="service-item position-relative">
      <div class="img">
        <router-link to="/" activeClass="link_active"><img src="assets/images/SeaF.jpg" class="img-fluid" alt=""></router-link>
      </div>
      <div class="details">
        <router-link to="/" activeClass="link_active"><h3 class ="h1">
          {{ $t("SeaF_Titla") }}</h3>
        </router-link>
      </div>
    </div>
  </div><!-- End Service Item -->

  <div class="col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="500">
    <div class="service-item position-relative">
      <div class="img">
        <router-link to="/" activeClass="link_active"><img src="assets/images/marathon.jpg" class="img-fluid" alt=""></router-link>
      </div>
      <div class="details">
        <router-link to="/detailsm" activeClass="link_active"><h3 class ="h1">
          {{ $t("Marathon") }}</h3>
        </router-link>
      </div>
    </div>
  </div><!-- End Service Item -->

</div>

</div>

</section>
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

</template> 

<script>
export default {
    
}
</script>
<style scoped>
#historical_site_container {
  margin-top: 20px; /* Updated as requested */
  text-align: center;
}
.M-heading {
  background-image: url("/public/assets/images/event.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 260px 0px 300px 0px;
  text-align: center;
}

.amazing-M .item-M .content {
  padding-top: 20px;
  padding-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

.M-heading h2 {
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 30px;
}

.amazing-M {
  margin-top: 30px;
}

.amazing-M .item-M .image {
  border-radius: 20px;
  overflow: hidden;
}

.amazing-M .item-M {
  background-color: #f7f7f7;
  border-radius: 23px;
  /* padding-right: 30px; */
  margin-bottom: 30px;
}


@media (max-width: 1199px) {

section,
.section {
scroll-margin-top: 100px;
}
}

.album-art {
margin-top: 20px;
}
/*--------------------------------------------------------------
# Global Section Titles
--------------------------------------------------------------*/
.section-title {
text-align: center;
padding-bottom: 60px;
position: relative;
}

.section-title h2 {
font-size: 32px;
font-weight: 700;
margin-bottom: 15px;
}

.section-title p {
margin-bottom: 0;
}

.h1 {
  color: white;
}

/*--------------------------------------------------------------
# Alt Services Section
--------------------------------------------------------------*/
.alt-services .img {
border-radius: 8px;
overflow: hidden;
}

.alt-services .img img {
transition: 0.6s;
}

.alt-services .details {
position: absolute;
left: 0px;
right: 100px;
bottom: 20px;
padding: 15px;
width: 100%;
transition: all ease-in-out 0.3s;
text-align: center;
border-radius: 8px;
}

.alt-services .details h3 {
font-weight: 600;
/* margin: 10px 0 10px 0; */
font-size: 22px;
transition: ease-in-out 0.3s;
}

.alt-services .details p {
color: color-mix(in srgb, var(--default-color), transparent 10%);
line-height: 24px;
font-size: 14px;
margin-bottom: 0;
}

.alt-services .service-item:hover .details h3 {
color: var(--accent-color);
}

.alt-services .service-item:hover .img img {
transform: scale(1.2);
}
.details{
background: rgba(49, 22, 122, 0.5);
box-shadow: 0px 0 25px rgba(0, 0, 0, 0.5);
}
</style>