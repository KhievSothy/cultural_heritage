<template>
   <div class="amazing-MN">
    <div class="container">
      <div class="row">
          <div class="col-lg-12">
          <div class="item-MN">
              <div class="col-lg-12">
                <div class="image"><img src="../../public/assets/images/khny02.jpg" alt="img01"></div>
              </div>
              <div class="col-lg-12 align-self-center">
                <div class="content">
                  <h4>{{ $t("Khmer_NewY_Title") }}</h4>
                  <p>{{ $t("Khmer_NewY_Detail") }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12">
             <div class="item-MN">
                <div class="col-lg-12">
                  <div class="image"><img src="../../public/assets/images/khny03.jpg" alt="img01"></div>
                </div>
              </div>
          </div>

          <div class="col-lg-3 col-sm-12">
             <div class="item-MN">
                <div class="col-lg-12">
                  <div class="image"><img src="../../public/assets/images/khny04.jpg" alt="img01"></div>
                </div>
              </div>
          </div>

          <div class="col-lg-3 col-sm-12">
             <div class="item-MN">
                <div class="col-lg-12">
                  <div class="image"><img src="../../public/assets/images/khny01.jpg" alt="img01"></div>
                </div>
              </div>
          </div>

          <div class="col-lg-3 col-sm-12">
             <div class="item-MN">
                <div class="col-lg-12">
                  <div class="image"><img src="../../public/assets/images/khny.jpg" alt="img01"></div>
                </div>
              </div>
          </div>
          <div class="main-button">
              <router-link to="/event" class="nav-link">{{ $t("Return") }}</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.amazing-MN .item-MN .image {
  border-radius: 20px;
  overflow: hidden;
}

.amazing-MN .item-MN {
  background-color: #f7f7f7;
  border-radius: 23px;
  /* padding-right: 30px; */
  margin-bottom: 10px;
}

.amazing-MN .item-MN span.info {
  color: #31167a;
  font-size: 15px;
  /* margin-bottom: 20px; */
  display: block;
}

.amazing-MN .item-MN h4 {
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
  /* margin-bottom: 10px;
  border-bottom: 1px solid #ddd;  */
  text-align: center;
}

.amazing-MN .item-MN i {
  color: #777;
  margin-right: 5px;
}

.amazing-MN .item-MN span.list {
  font-size: 15px;
  color: #afafaf;
  font-weight: 500;
}

.amazing-MN .item-MN .content {
  padding-top: 20px;
  padding-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

.amazing-MN .item-MN p {
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.amazing-MN ul.page-numbers {
  text-align: center;
  margin-top: 30px;
}

.amazing-MN ul.page-numbers li {
  display: inline-block;
  margin: 0px 5px;
}

.amazing-MN ul.page-numbers li a {
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

.amazing-MN ul.page-numbers li.active a,
.amazing-MN ul.page-numbers li a:hover {
  background-color: #31167a;
  color: #fff;
}

.amazing-MN ul.page-numbers li:first-child a,
.amazing-MN ul.page-numbers li:last-child a {
  border: none;
}
</style>