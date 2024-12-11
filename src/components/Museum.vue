<template>
  <div class="M-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>{{ $t("Welcome") }}</h2>
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
                      <button class="border-button">Search Result</button>
                  </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="amazing-M">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-12">
          <div class="item-M">
            <div class="row">
              <div class="col-lg-12">
                <div class="image">
                  <router-link to="/detailn" class="nav-link"><img src="../../public/assets/images/NM_Cover.jpg" alt=""></router-link>
                </div>
              </div>
              <div class="col-lg-12 align-self-center">
                <div class="content">
                  <h4>{{ $t("National_Museum_Title") }}</h4>
                  <p>{{ $t("National_Museum") }}</p>
                  <div class="main-button">
                    <router-link to="/detailn" class="nav-link">{{ $t("More") }}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-sm-12">
          <div class="item-M">
            <div class="row">
              <div class="col-lg-12">
                <div class="image">
                  <router-link to="/detailts" class="nav-link"><img src="assets/images/Tuol_Sleng_M1.jpg" alt=""></router-link>
                </div>
              </div>
              <div class="col-lg-12 align-self-center">
                <div class="content">
                  <h4>{{ $t("Tuol_Sleng_Title") }}</h4>
                  <p>{{ $t("Tuol_Sleng") }}</p>
                  <div class="main-button">
                    <router-link to="/detailts" class="nav-link">{{ $t("More") }}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-sm-12">
          <div class="item-M">
            <div class="row">
              <div class="col-lg-12">
                <div class="image">
                  <router-link to="/detailce" class="nav-link"><img src="assets/images/Cheoung-Ek.jpg" alt=""></router-link>
                </div>
              </div>
              <div class="col-lg-12 align-self-center">
                <div class="content">
                  <h4>{{ $t("Cheoung_Ek_Title") }}</h4>
                  <p>{{ $t("Cheoung_Ek") }}</p>
                  <div class="main-button">
                    <router-link to="/detailce" class="nav-link">{{ $t("More") }}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-sm-12">
          <div class="item-M">
            <div class="row">
              <div class="col-lg-12">
                <div class="image">
                  <router-link to="/detailsm" class="nav-link"><img src="assets/images/SSR_M1.jpg" alt=""></router-link>
                </div>
              </div>
              <div class="col-lg-12 align-self-center">
                <div class="content">
                  <h4>{{ $t("SOSORO_Museum_Title") }}</h4>
                  <p>{{ $t("SOSORO_Musuem") }}</p>
                  <div class="main-button">
                    <router-link to="/detailsm" class="nav-link">{{ $t("More") }}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.M-heading {
  background-image: url("/public/assets/images/NM_Cover.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 260px 0px 300px 0px;
  text-align: center;
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

.amazing-M .item-M span.info {
  color: #31167a;
  font-size: 15px;
  /* margin-bottom: 20px; */
  display: block;
}

.amazing-M .item-M h4 {
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
  /* margin-bottom: 10px;
  border-bottom: 1px solid #ddd;  */
  text-align: center;
}

.amazing-M .item-M i {
  color: #777;
  margin-right: 5px;
}

.amazing-M .item-M span.list {
  font-size: 15px;
  color: #afafaf;
  font-weight: 500;
}

.amazing-M .item-M .content {
  padding-top: 20px;
  padding-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

.amazing-M .item-M .content .main-button{
  text-align: center;
}

.amazing-M .item-M p {
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid #ddd;
  margin-bottom: 10px;
}

.amazing-M ul.page-numbers {
  text-align: center;
  margin-top: 30px;
}

.amazing-M ul.page-numbers li {
  display: inline-block;
  margin: 0px 5px;
}

.amazing-M ul.page-numbers li a {
  display: inline-block;
  width: 46px;
  height: 46px;
  border: 1px solid #31167a;
  line-height: 44px;
  color: #31167a;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  border-radius: 50%;
  transition: all .3s;
}

.amazing-M ul.page-numbers li.active a,
.amazing-M ul.page-numbers li a:hover {
  background-color: #31167a;
  color: #fff;
}

.amazing-M ul.page-numbers li:first-child a,
.amazing-M ul.page-numbers li:last-child a {
  border: none;
}
</style>