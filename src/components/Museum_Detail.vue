<template>
  <div class="amazing-MN" style="margin-top: 100px">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="item-MN">
            <div class="col-lg-12">
              <div class="image">
                <img :src="api_url + '/' + item.img" alt="img01" />
              </div>
            </div>
            <div class="col-lg-12 align-self-center">
              <div class="content">
                <h4>
                  {{ current_lang == "en" ? item.title_en : item.title_kh }}
                </h4>
                <p>{{ current_lang == "en" ? item.desc_en : item.desc_kh }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="main-button">
          <router-link to="/museum" class="nav-link">{{
            $t("Return")
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MuseumService } from "@/services/museum.service";
import environment from "@/environments/environment";
import router from "../routes/index";
export default {
  watch: {
    "$i18n.locale"(newLocale) {
      this.current_lang = newLocale; // Sync with Vue I18n
    },
  },
  data() {
    return {
      item: {},
      current_lang: this.$i18n.locale,
      api_url: environment.API_BASE_URL,
    };
  },
  methods: {
    async GetById(id) {
      try {
        this.item = await MuseumService.GetById(id);
        //console.log(this.historical_site_data);
      } catch (error) {
        //console.log(error);
        router.push("/not-found");
      }
    },
  },
  async mounted() {
    console.log(this.$router);
    await this.GetById(this.$route.params.id);
  },
};
</script>

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
  transition: all 0.3s;
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
