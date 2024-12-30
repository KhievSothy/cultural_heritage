<template>
  <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4>{{ $t("discover_historical") }}</h4>
          <h2>{{ $t("historical") }}</h2>
        </div>
      </div>
    </div>
  </div>

  <main class="container" id="historical_site_container">
    <h3 class="text-center">{{ $t("historical") }}</h3>
    <hr />
    <div id="card_container">
      <div
        class="site_card"
        v-for="item in historical_site_data"
        :key="item.id"
        v-on:click="toDetail(item._id)"
      >
        <!-- Image Section -->
        <div class="img-container">
          <img
            class="rounded"
            :src="api_url + '/' + item.img"
            alt="Historical Site"
          />
        </div>
        <!-- Text Section -->
        <div class="desc_container">
          <h4 class="card_title">
            {{ current_lang == "en" ? item.title_en : item.title_kh }}
          </h4>
          <hr />
          <p class="card_desc truncate-text">
            {{ current_lang == "en" ? item.desc_en : item.desc_kh }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { HistoricalSiteService } from "@/services/historical_site.service";
import environment from "@/environments/environment";
export default {
  watch: {
    "$i18n.locale"(newLocale) {
      this.current_lang = newLocale; // Sync with Vue I18n
    },
  },
  data() {
    return {
      historical_site_data: [],
      current_lang: this.$i18n.locale,
      api_url: environment.API_BASE_URL,
    };
  },
  methods: {
    toDetail(id) {
      this.$router.push("/historical_sites/detail/" + id);
    },
    async GetAll() {
      try {
        this.historical_site_data = await HistoricalSiteService.GetEnabled();
        //console.log(this.historical_site_data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    await this.GetAll();
  },
};
</script>

<style scoped>
.truncate-text {
  display: -webkit-box;
  -webkit-line-clamp: 5; /* Limits the text to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* Main Container */
#historical_site_container {
  margin-top: 40px; /* Updated as requested */
  text-align: center;
}

#card_container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two items per row by default */
  gap: 20px;
  padding: 20px;
  align-items: stretch; /* Ensures all items are stretched */
}

/* Card Styles */
.site_card {
  display: flex;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Hover effect */
  height: 100%;
}

.site_card:hover {
  transform: scale(1.03); /* Slightly enlarge the card */
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* Deeper shadow */
  cursor: pointer;
}

/* Image Section */
.img-container {
  flex: 0 0 150px; /* Fixed width */
  height: auto; /* Image height will stretch dynamically */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image fills the container without distortion */
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

/* Description Section */
.desc_container {
  flex: 1;
  padding: 15px;
  text-align: left;
  display: flex;
  flex-direction: column; /* Align text vertically */
}

/* Title Style */
.card_title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.card_desc {
  font-size: 1rem;
  color: #555;
  margin: 0;
  line-height: 1.5; /* Improve readability */
}

/* Media Query for smaller screens (less than 992px) */
@media (max-width: 992px) {
  #card_container {
    grid-template-columns: 1fr; /* One item per row */
  }
  /* #historical_site_container {
    margin-top: 130px;
  } */
}
</style>
