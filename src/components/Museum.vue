<template>
  <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4>Discover Our Historical Destination</h4>
          <h2>Museum</h2>
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
              <div class="col-lg-6">
                <div class="image">
                  <img src="assets/images/deals-01.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="content">
                  <h4>Why visit Angkor Wat temple</h4>
                  <p> The most famous landmark in Cambodia, Angkor Wat is a massive temple complex built in the early 12th century. It is the largest religious monument in the world and a UNESCO World Heritage site.</p>
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
                  <img src="assets/images/deals-02.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="content">
                  <h4>Koh Ker</h4>
                  <p>Koh Ker is an ancient city located deep in the jungle. It is known for the Prasat Thom pyramid and its many other lesser-known temples. It is much less crowded than Angkor Wat.</p>
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
                  <img src="assets/images/deals-03.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="content">
                  <h4>Preah Vihear Temple</h4>
                  <p>A UNESCO World Heritage site, Preah Vihear is a Hindu temple perched on a 525-meter cliff in the Dângrêk Mountains. It offers stunning views of the surrounding landscape.</p>
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
                  <img src="assets/images/deals-04.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="content">
                  <h4>Kulen Mountain</h4>
                  <p>(also known as Phnom Kulen) is one of Cambodia’s most revered and beautiful natural landmarks, located in the northern part of Siem Reap Province, about 50 kilometers from Siem Reap city. 
                    </p>
                  <div class="main-button">
                    <a href="reservation.html">More</a>
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
  </div>
</template>

<script>
export default {
    
}
</script>