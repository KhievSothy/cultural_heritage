<template>
  <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4>Discover Our Historical Destination</h4>
          <h2>Historical</h2>
          <div class="border-button">
            <a href="about.html">Discover More</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="search-form">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <form
            id="search-form"
            name="gs"
            method="submit"
            role="search"
            action="#"
          >
            <div class="row">
              <div class="col-lg-2">
                <h4>Sort Deals By:</h4>
              </div>
              <div class="col-lg-4">
                <fieldset>
                  <select
                    name="Location"
                    class="form-select"
                    aria-label="Default select example"
                    id="chooseLocation"
                    onChange="this.form.click()"
                  >
                    <option selected>Destinations</option>
                    <option type="checkbox" name="option1" value="Italy">
                      Italy
                    </option>
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

  <main class="container" id="historical_site_container">
    <h3 class="text-center">{{ $t("historical") }}</h3>
    <hr />
    <div id="card_container">
      <div
        class="site_card"
        v-for="item in historical_site_data"
        :key="item.id"
      >
        <!-- Image Section -->
        <div class="img-container">
          <img class="rounded" :src="item.img" alt="Historical Site" />
        </div>
        <!-- Text Section -->
        <div class="desc_container">
          <h4 class="card_title">
            {{ current_lang == "en" ? item.title_en : item.title_kh }}
          </h4>
          <hr />
          <p class="card_desc">
            {{ current_lang == "en" ? item.desc_en : item.desc_kh }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  watch: {
    "$i18n.locale"(newLocale) {
      this.current_lang = newLocale; // Sync with Vue I18n
    },
  },
  data() {
    return {
      historical_site_data: [
        {
          id: "1",
          title_kh: "ឧទ្យានវប្បធម៌ប្រវត្តិសាស្រ្ដអង្គរវត្ត",
          title_en: "Angkor Wat Cultural and Historical Park",
          desc_kh:
            "ប្រាសាទអង្គរវត្តគឺជាសម្បត្តិវប្បធម៌ដ៏ល្អប្រណីតរបស់ប្រជាជនខ្មែរ។ វាបានកសាងឡើងនៅសតវត្សទី 12 ដោយបុរេប្រវត្តិសាស្ត្រ និងជាស្នាដៃវិស្វករមាស។",
          desc_en:
            "Angkor Wat is a magnificent cultural treasure of the Khmer people. It was built in the 12th century by prehistoric people and is a masterpiece of gold engineering.",
          img: "/assets/images/banner-01.jpg",
        },
        {
          id: "2",
          title_kh: "រមណីយដ្ឋានប្រាសាទព្រះវិហារ",
          title_en: "Preah Vihear Temple Resort",
          desc_kh:
            "ខេត្តព្រះវិហារ គឺជាខេត្តដែលស្ថិតនៅភាគខាងជើងបំផុតនៃប្រទេសកម្ពុជា ខេត្តនេះមានផ្ទៃដីធំជាងគេលំដាប់ទី២ និងមានប្រជាជនរស់នៅតិចនៅតំបន់ភ្នំ និងខ្ពង់រាប ដែលជាខេត្តមានលក្ខណៈវប្បធម៌ប្រវត្តិសាស្ត្រនឹងធម្មជាតិ។",
          desc_en:
            "Preah Vihear Province is the northernmost province in Cambodia. It is the second largest province in terms of land area and has a sparse population living in mountainous and plateau areas. It is a province with unique cultural, historical, and natural features.",
          img: "/assets/images/deals-03.jpg",
        },
        {
          id: "3",
          title_kh: "រមណីយដ្ឋានប្រាសាទសំបូរព្រៃគុក",
          title_en: "Sambor Prei Kuk Temple Resort",
          desc_kh:
            "ប្រាសាទសម្បូរព្រៃគុក. ឈ្មោះ: ប្រាសាទសម្បូរព្រៃគុក. អ្នកកសាង: ព្រះបាទឥសានវរ្ម័នទី១. កាលបរិច្ឆេទកសាង: សតវត្សរ៍ទី៧. ឧទ្ទិសថ្វាយ: ព្រហ្មញ្ញសាសនា. ស្ថាបត្យកម្ម: រចនាបថសម្បូរ. ទីតាំង: ភូមិសម្បូរ ឃុំសម្បូរ ស្រុកសម្បូរ ខេត្តកំពង់ធំ។",
          desc_en:
            "Sambor Prei Kuk Temple. Name: Sambor Prei Kuk Temple. Builder: King Isanvarman I. Date of construction: 7th century. Devotion: Hinduism. Architecture: Sambor style. Location: Sambor village, Sambor commune, Sambor district, Kampong Thom province.",
          img: "/assets/images/SomborprieKuk1.jpg",
        },
        {
          id: "4",
          title_kh: "រមណីយដ្ឋានប្រាសាទកោះកេរ",
          title_en: "Koh Ker Temple Resort",
          desc_kh:
            "ភ្នំគូលែន ឬ ព្រះមហិន្ទ្រាបវ៌ត ឬ ភ្នំជាទីសក្ការៈ មានកម្ពស់ជិត ៥០០ម៉ែត្រ គឺជាភ្នំមួយដ៏ធំល្មមប្រកបដោយ សិលាលាយឡំនឹង ព្រៃស៊ុបទ្រុប។ ភ្លៀងដែលធ្លាក់នៅទីនោះបានផុសចេញជាប្រភពទឹកហូរធ្លាក់ចុះមកបំពេញស្ទឹងសៀមរាប បង្កើតបានជាទឹកជ្រោះដ៏ស្រស់ស្អាត។ តាំងពីបុរាណមកគេមានជំនឿថា ទឹកជ្រោះភ្នំគូលែននេះជាទឹកបង្កើតលោក ហើយបានក្លាយជាតំបន់ទេសចរណ៍ដ៏ទាក់ទាញ។",
          desc_en:
            "Phnom Kulen or Preah Mahindraewat or the Sacred Mountain is nearly 500 meters high and is a fairly large mountain with rocks mixed with dense forests. The rain that falls there emerges as a spring flowing down to fill the Siem Reap River, creating a beautiful waterfall. Since ancient times, it has been believed that Phnom Kulen Waterfall is the water that created the world and has become an attractive tourist destination.",
          img: "/assets/images/deals-02.jpg",
        },
        {
          id: "5",
          title_kh: "រមណីយដ្ឋានប្រាសាទបន្ទាយឆ្នា",
          title_en: "Banteay Chhmar Temple Resort",
          desc_kh:
            "ប្រាសាទបន្ទាយឆ្មារជាប្រាសាទដែលត្រូវបានកសាងឡើងពីចុងសតវត្សរ៍ទី១២ដល់ដើមសតវត្សរ៍ទី១៣ ក្នុងរជ្ជកាលព្រះបាទជ័យវរ្ម័នទី៧ ដើម្បីឧទ្ទិសដល់បុត្រា និងមេទ័ព៤នាក់របស់ព្រះអង្គដែលបានពលីនៅក្នុងសមរភូមិដេញចាមនៅឆ្នាំ១១៧៧។ ",
          desc_en:
            "Banteay Chhmar Temple was built from the late 12th to early 13th centuries during the reign of King Jayavarman VII to commemorate his son and four generals who were killed in the Battle of Chaks Cham in 1177.",
          img: "/assets/images/bantheaCat.jpg",
        },
        {
          id: "6",
          title_kh: "រមណីយដ្ឋានទឹកជ្រោះភ្នំកូលេន",
          title_en: "Kolen Mountain Waterfall Resort",
          desc_kh:
            "ទឹកជ្រោះកុលេនមានទេសភាពធម្មជាតិស្រស់ស្អាត។ ជួរភ្នំគូលែន មានទីតាំងទេសចរណ៍ធម្មជាតិ និងវប្បធម៌ប្រវត្តិសាស្ត្រជាច្រើនកន្លែង។ ក្នុងចំណោមទីតាំងទេសចរណ៍ល្បីៗ ទឹកធ្លាក់ភ្នំគូលែន ទាក់ទាញទេសចរច្រើនជាងគេ ដ្បិតថា ទីនេះ មាន",
          desc_en:
            "Kulen Waterfall has beautiful natural scenery. Kulen Mountain Range has many natural and cultural historical tourist sites. Among the famous tourist sites, Kulen Waterfall attracts the most tourists because here there are ...",
          img: "/assets/images/kulen.jpg",
        },
        {
          id: "7",
          title_kh: "រមណីយដ្ឋានប្រាសាទបាយ័ន",
          title_en: "Bayon Temple Resort",
          desc_kh:
            "ប្រាសាទបាយ័ន គឺជា​ប្រាសាទ​ខ្មែរ​ដែលប្រកបដោយក្បូចក្បាច់រចនាល្អវិសេសទាក់ទងនឹងពុទ្ធសាសនាក្នុងប្រទេសកម្ពុជា។ ប្រាសាទបាយ័នត្រូវបានសាងសង់ឡើងនៅចុងសតវត្សទី១២ ឬដើមសតវត្សទី១៣ កសាងដោយព្រះបាទជ័យវរ្ម័នទី៧ ប្រាសាទនេះកសាងសម្រាប់ឧទ្ទិសថ្វាយដល់ព្រះពុទ្ធសាសនាមហាយាន មានទីតាំងស្ថិតនៅក្រុងអង្គរធំ។",
          desc_en:
            "Bayon Temple is a Khmer temple with exquisite architectural features related to Buddhism in Cambodia. Bayon Temple was built in the late 12th or early 13th century by King Jayavarman VII. The temple was built for Mahayana Buddhism and is located in Angkor Thom.",
          img: "/assets/images/bayoun.jpg",
        },
        {
          id: "8",
          title_kh: "រមណីយដ្ឋានភ្នំជីសូរ",
          title_en: "Phnom Chisor Resort",
          desc_kh:
            "ភ្នំជីសូរ ស្ថិតនៅភូមិ ភូមិដក់ពរ ឃុំរៀង ស្រុកសំរោង ខេត្តតាកែវ។ បើធ្វើដំណើរតាមរថយន្ត ពីភ្នំពេញតាមផ្លូវជាតិលេខ២ កាត់តាមស្រុកបាទី និង ប្រាសាទនាងខ្មៅ មានចំងាយ៦២គ.ម ដោយប្រើរយៈពេលប្រហែលមួយម៉ោង រួចបត់ស្តាំចូលតាមផ្លូវលំមួយ មានចំងាយ៥គ.ម ពីផ្លូវជាតិ។ បើធ្វើដំណើរពីទីរួមខេត្ត​មានចំងាយ២៧គ.ម។ ភ្នំជីសូរមានកំពស់ ១៣០ម។ ",
          desc_en:
            "Chisor Mountain is located in Dok Por Village, Rieng Commune, Samrong District, Takeo Province. If you travel by car from Phnom Penh on National Road 2, through Bati District and Neang Khmao Temple, it is 62 km away, taking about an hour, then turn right onto a dirt road, 5 km away from the national road. If you travel from the provincial capital, it is 27 km away. Chisor Mountain is 130 m high.",
          img: "/assets/images/ChiSo.jpg",
        },
      ],
      current_lang: this.$i18n.locale,
    };
  },
};
</script>

<style scoped>
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
