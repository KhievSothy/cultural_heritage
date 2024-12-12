<template>
  <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4>Discover Our Historical Destination</h4>
          <h2>Amazing Place to go &amp; More</h2>
          <div class="border-button"><a href="about.html">Discover More</a></div>
        </div>
      </div>
    </div>
  </div>

  <div class="search-form">
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
  </div>

  <div class="amazing-deals">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-6">
          <div class="item">
            <div class="row">
              <div class="col-lg-12">
                <div class="image">
                  <img src="assets/images/banner-04.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-12 align-self-center">
                <div class="content">
                  <h4>National Museum of Cambodia</h4>
                  <p> The National Museum of Cambodia is located on Street 13 in central Phnom Penh, next to the Royal Palace. The visitor's entrance to the compound and the admissions ticket booth are at the corner of Streets 13 and 178. </p>
                  <div class="main-button">
                    <a href="reservation.html">More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="item">
            <div class="row">
              <div class="col-lg-6">
                <div class="image">
                  <img src="assets/images/Tuol_Sleng_M1.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="content">
                  <h4>Tuol Sleng Genocide museum</h4>
                  <p>Tuol Sleng Genocide Museum is the memorial site of the S-21 interrogation and detention center of the Khmer Rouge regime. Located in the heart of Phnom Penh, it preserves evidence of a tragic period in Cambodian history with the aim of encouraging visitors to be messengers of peace.</p>
                  <div class="main-button">
                    <a href="reservation.html">More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="item">
            <div class="row">
              <div class="col-lg-6">
                <div class="image">
                  <img src="assets/images/Cheoung_Ek_C1.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="content">
                  <h4>Cheoung Ek Genocidal Center</h4>
                  <p>Choeung Ek is a former orchard in Dangkao, Phnom Penh, Cambodia, that was used as a Killing Field between 1975 and 1979 by the Khmer Rouge in perpetrating the Cambodian genocide. Situated about 17 kilometres south of the city centre, it was attached to the Tuol Sleng detention centre.</p>
                  <div class="main-button">
                    <a href="reservation.html">More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="item">
            <div class="row">
              <div class="col-lg-6">
                <div class="image">
                  <img src="assets/images/SSR_M1.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="content">
                  <h4>SOSORO Museum</h4>
                  <p>The SOSORO Museum is located in the heart of Phnom Penh, the capital city of Cambodia. Its protectorate style building was the former town hall residence in 1908, Phnom Penh municipality in 1920, and has been the Preah Srey Içanavarman Museum of Economy and Money since 2012.</p>
                  <div class="main-button">
                    <a href="reservation.html">More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-12">
          <ul class="page-numbers">
            <li><a href="#"><i class="fa fa-arrow-left"></i></a></li>
            <li><a href="#">1</a></li>
            <li class="active"><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#"><i class="fa fa-arrow-right"></i></a></li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>