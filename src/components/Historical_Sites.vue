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
          <h4 class="card_title">{{ item.title }}</h4>
          <hr />
          <p class="card_desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      historical_site_data: [
        {
          id: "1",
          title: "ឧទ្យានវប្បធម៌ប្រវត្តិសាស្រ្ដអង្គរវត្ត",
          desc: "ប្រាសាទអង្គរវត្តគឺជាសម្បត្តិវប្បធម៌ដ៏ល្អប្រណីតរបស់ប្រជាជនខ្មែរ។ វាបានកសាងឡើងនៅសតវត្សទី 12 ដោយបុរេប្រវត្តិសាស្ត្រ និងជាស្នាដៃវិស្វករមាស។",
          img: "/assets/images/banner-01.jpg",
        },
        {
          id: "2",
          title: "រមណីយដ្ឋានប្រាសាទព្រះវិហារ",
          desc: "ខេត្តព្រះវិហារ គឺជាខេត្តដែលស្ថិតនៅភាគខាងជើងបំផុតនៃប្រទេសកម្ពុជា ខេត្តនេះមានផ្ទៃដីធំជាងគេលំដាប់ទី២ និងមានប្រជាជនរស់នៅតិចនៅតំបន់ភ្នំ និងខ្ពង់រាប ដែលជាខេត្តមានលក្ខណៈវប្បធម៌ប្រវត្តិសាស្ត្រនឹងធម្មជាតិ។",
          img: "/assets/images/deals-03.jpg",
        },
        {
          id: "3",
          title: "រមណីយដ្ឋានប្រាសាទសំបូរព្រៃគុក",
          desc: "ប្រាសាទសម្បូរព្រៃគុក. ឈ្មោះ: ប្រាសាទសម្បូរព្រៃគុក. អ្នកកសាង: ព្រះបាទឥសានវរ្ម័នទី១. កាលបរិច្ឆេទកសាង: សតវត្សរ៍ទី៧. ឧទ្ទិសថ្វាយ: ព្រហ្មញ្ញសាសនា. ស្ថាបត្យកម្ម: រចនាបថសម្បូរ. ទីតាំង: ភូមិសម្បូរ ឃុំសម្បូរ ស្រុកសម្បូរ ខេត្តកំពង់ធំ។",
          img: "/assets/images/SomborprieKuk1.jpg",
        },
        {
          id: "4",
          title: "រមណីយដ្ឋានប្រាសាទកោះកេរ",
          desc: "ភ្នំគូលែន ឬ ព្រះមហិន្ទ្រាបវ៌ត ឬ ភ្នំជាទីសក្ការៈ មានកម្ពស់ជិត ៥០០ម៉ែត្រ គឺជាភ្នំមួយដ៏ធំល្មមប្រកបដោយ សិលាលាយឡំនឹង ព្រៃស៊ុបទ្រុប។ ភ្លៀងដែលធ្លាក់នៅទីនោះបានផុសចេញជាប្រភពទឹកហូរធ្លាក់ចុះមកបំពេញស្ទឹងសៀមរាប បង្កើតបានជាទឹកជ្រោះដ៏ស្រស់ស្អាត។ តាំងពីបុរាណមកគេមានជំនឿថា ទឹកជ្រោះភ្នំគូលែននេះជាទឹកបង្កើតលោក ហើយបានក្លាយជាតំបន់ទេសចរណ៍ដ៏ទាក់ទាញ។",
          img: "/assets/images/deals-02.jpg",
        },
        {
          id: "5",
          title: "រមណីយដ្ឋានប្រាសាទបន្ទាយឆ្នា",
          desc: "ប្រាសាទបន្ទាយឆ្មារជាប្រាសាទដែលត្រូវបានកសាងឡើងពីចុងសតវត្សរ៍ទី១២ដល់ដើមសតវត្សរ៍ទី១៣ ក្នុងរជ្ជកាលព្រះបាទជ័យវរ្ម័នទី៧ ដើម្បីឧទ្ទិសដល់បុត្រា និងមេទ័ព៤នាក់របស់ព្រះអង្គដែលបានពលីនៅក្នុងសមរភូមិដេញចាមនៅឆ្នាំ១១៧៧។ ",
          img: "/assets/images/bantheaCat.jpg",
        },
        {
          id: "6",
          title: "រមណីយដ្ឋានទឹកជ្រោះភ្នំកូលេន",
          desc: "ទឹកជ្រោះកុលេនមានទេសភាពធម្មជាតិស្រស់ស្អាត។ ជួរភ្នំគូលែន មានទីតាំងទេសចរណ៍ធម្មជាតិ និងវប្បធម៌ប្រវត្តិសាស្ត្រជាច្រើនកន្លែង។ ក្នុងចំណោមទីតាំងទេសចរណ៍ល្បីៗ ទឹកធ្លាក់ភ្នំគូលែន ទាក់ទាញទេសចរច្រើនជាងគេ ដ្បិតថា ទីនេះ មាន",
          img: "/assets/images/kulen.jpg",
        },
        {
          id: "7",
          title: "រមណីយដ្ឋានប្រាសាទបាយ័ន",
          desc: "ប្រាសាទបាយ័ន គឺជា​ប្រាសាទ​ខ្មែរ​ដែលប្រកបដោយក្បូចក្បាច់រចនាល្អវិសេសទាក់ទងនឹងពុទ្ធសាសនាក្នុងប្រទេសកម្ពុជា។ ប្រាសាទបាយ័នត្រូវបានសាងសង់ឡើងនៅចុងសតវត្សទី១២ ឬដើមសតវត្សទី១៣ កសាងដោយព្រះបាទជ័យវរ្ម័នទី៧ ប្រាសាទនេះកសាងសម្រាប់ឧទ្ទិសថ្វាយដល់ព្រះពុទ្ធសាសនាមហាយាន មានទីតាំងស្ថិតនៅក្រុងអង្គរធំ។",
          img: "/assets/images/bayoun.jpg",
        },
        {
          id: "8",
          title: "រមណីយដ្ឋានភ្នំជីសូរ",
          desc: "ភ្នំជីសូរ ស្ថិតនៅភូមិ ភូមិដក់ពរ ឃុំរៀង ស្រុកសំរោង ខេត្តតាកែវ។ បើធ្វើដំណើរតាមរថយន្ត ពីភ្នំពេញតាមផ្លូវជាតិលេខ២ កាត់តាមស្រុកបាទី និង ប្រាសាទនាងខ្មៅ មានចំងាយ៦២គ.ម ដោយប្រើរយៈពេលប្រហែលមួយម៉ោង រួចបត់ស្តាំចូលតាមផ្លូវលំមួយ មានចំងាយ៥គ.ម ពីផ្លូវជាតិ។ បើធ្វើដំណើរពីទីរួមខេត្ត​មានចំងាយ២៧គ.ម។ ភ្នំជីសូរមានកំពស់ ១៣០ម។ ",
          img: "/assets/images/ChiSo.jpg",
        },
      ],
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
