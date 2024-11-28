<template>
  <main class="container" id="historical_site_container">
    <h3 class="text-center">ទីតាំងប្រវត្តិសាស្រ្ត</h3>
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
          title: "ប្រាសាទអង្គរវត្ត",
          desc: "ប្រាសាទអង្គរវត្តគឺជាសម្បត្តិវប្បធម៌ដ៏ល្អប្រណីតរបស់ប្រជាជនខ្មែរ។ វាបានកសាងឡើងនៅសតវត្សទី 12 ដោយបុរេប្រវត្តិសាស្ត្រ និងជាស្នាដៃវិស្វករមាស។",
          img: "https://cdn.britannica.com/56/122156-050-F5B469C8/overview-complex-Angkor-Wat-Cambodia.jpg",
        },
        {
          id: "2",
          title: "ប្រាសាទបាយ័ន",
          desc: "ប្រាសាទបាយ័នស្ថិតនៅចំណុចកណ្ដាលនៃក្រុងអង្គរធំ ដោយសម្បូរទៅដោយរូបសំណាកមុខមនុស្ស 54 មុខ សញ្ញាដែលស្នាក់នៅក្នុងសត្វសាសនាកម្ពុជាព្រហ្មញ្ញបណ្ឌិត។",
          img: "https://demo.cambodia.gov.kh/wp-content/uploads/2021/06/%E1%9E%94%E1%9F%92%E1%9E%9A%E1%9E%B6%E1%9E%9F%E1%9E%B6%E1%9E%91%E1%9E%94%E1%9E%B6%E1%9E%99%E1%9F%90%E1%9E%93.jpg",
        },
        {
          id: "3",
          title: "ប្រាសាទប្រាសាទប្រាង្គ",
          desc: "ប្រាសាទប្រាង្គតូចប៉ុន្តែមិនត្រូវអាម៉ាស់។ ប្រាសាទប្រាង្គ ឬប្រាសាទធំ ត្រូវបានស្ថាបនាឡើងដើម្បីឧទ្ទិសថ្វាយព្រះសិវៈ ឬព្រះឥស្វរៈ ឬព្រះឥសូរ តំណាងដោយព្រះសិវលិង្គឈ្មោះ «ត្រីភូវនេស្វរៈ»។ ព្រះអង្គក៏បានកសាងប្រាសាទសម្រាប់អាទិទេពផ្សេងទៀតផងដែរ តួយ៉ាងនៅប៉ែកអាគ្នេយ៍នៃប្រាសាទប្រាង្គ គឺមានប្រាសាទ",
          img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Prang_Sam_Yot.jpg",
        },
        {
          id: "4",
          title: "ទឹកជ្រោះកុលេន",
          desc: "ទឹកជ្រោះកុលេនមានទេសភាពធម្មជាតិស្រស់ស្អាត។ ជួរភ្នំគូលែន មានទីតាំងទេសចរណ៍ធម្មជាតិ និងវប្បធម៌ប្រវត្តិសាស្ត្រជាច្រើនកន្លែង។ ក្នុងចំណោមទីតាំងទេសចរណ៍ល្បីៗ ទឹកធ្លាក់ភ្នំគូលែន ទាក់ទាញទេសចរច្រើនជាងគេ ដ្បិតថា ទីនេះ មាន",
          img: "https://cdn.britannica.com/56/122156-050-F5B469C8/overview-complex-Angkor-Wat-Cambodia.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Main Container */
#historical_site_container {
  margin-top: 100px; /* Updated as requested */
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
  #historical_site_container {
    margin-top: 130px;
  }
}
</style>
