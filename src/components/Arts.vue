<template>
  <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4>{{ $t("discover_art") }}</h4>
          <h2>{{ $t("Arts") }}</h2>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="search-form">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <form id="search-form" name="gs" method="submit" role="search" action="#">
            <div class="row">
              <div class="col-lg-2">
                <h4>Sort Deals By:</h4>
              </div>
              <div class="col-lg-4">
                  <fieldset>
                      <select name="Location" class="form-select" aria-label="Default select example" id="chooseLocation" onChange="this.form.click()">
                          <option selected>Destinations</option>
                          <option type="checkbox" name="option1" value="Italy">Italy</option>
                          <option value="France">Angkor Wat</option>
                          <option value="Switzerland">Koh Ker</option>
                          <option value="Thailand">Preah Vihear Temple</option>
                          <option value="Australia">Kulen Mountain</option>
                      </select>
                  </fieldset>
              </div>
              <div class="col-lg-2">                        
                  <fieldset>
                      <button class="border-button">Search Results</button>
                  </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> -->
  <div id="historical_site_container">
    <h3 class="text-center">{{ $t("arts") }}</h3>
    <hr />
  </div>
  <div class="amazing-deals album-art">
    <section id="alt-services" class="alt-services section album-art">

<div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

<div class="row gy-4">

  <div class="col-lg-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
    <div class="service-item position-relative">
      <div class="img">
        <router-link to="/musical" activeClass="link_active">
          <img src="assets/images/art1.jpg" class="img-fluid" alt=""></router-link>
      </div>
      <div class="details">
        <router-link to="/musical" activeClass="link_active">
          <h3 class ="h1">{{ $t("Music_Title") }}</h3></router-link>
      </div>
    </div>
  </div><!-- End Service Item -->

  <div class="col-lg-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
    <div class="service-item position-relative">
      <div class="img">
        <router-link to="/theater" activeClass="link_active">
          <img src="assets/images/art2.jpg" class="img-fluid" alt=""></router-link>
      </div>
      <div class="details">
        <router-link to="/theater" activeClass="link_active">
          <h3 class ="h1">{{ $t("Theater_Title") }}</h3></router-link>
      </div>
    </div>
  </div><!-- End Service Item -->

  <div class="col-lg-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
    <div class="service-item position-relative">
      <div class="img">
        <img src="assets/images/art3.jpg" class="img-fluid" alt="">
      </div>
      <div class="details">
        <a href="#" class="stretched-link">
          <h3 class ="h1">{{ $t("Faculty_Title") }}</h3>
        </a>
      </div>
    </div>
  </div><!-- End Service Item -->

  <div class="col-lg-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="500">
    <div class="service-item position-relative">
      <div class="img">
        <img src="assets/images/art4.jpg" class="img-fluid" alt="">
      </div>
      <div class="details">
        <a href="#" class="stretched-link">
          <h3 class ="h1">{{ $t("Magical_Title") }}</h3>
        </a>
        <a href="#" class="stretched-link"></a>
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
.page-heading {
  background-image: url(../../public/assets/images/arts.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 260px 0px 300px 0px;
  text-align: center;
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
padding: 30px;
width: 100%;
transition: all ease-in-out 0.3s;
text-align: center;
border-radius: 8px;
}

.alt-services .details h3 {
font-weight: 700;
margin: 10px 0 15px 0;
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