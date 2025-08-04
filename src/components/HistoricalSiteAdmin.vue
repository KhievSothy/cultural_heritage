<template>
  <h2>ទីតាំងស្ថានីយប្រវត្តិសាស្ត្រ</h2>
  <button
    class="btn btn-primary mt-3"
    data-bs-toggle="modal"
    data-bs-target="#hsModal"
    id="btnOpenModal"
    @click="ClearModal()"
  >
    <i class="fa-solid fa-plus"></i> បង្កើតថ្មី
  </button>
  <hr />
  <table class="table">
    <thead>
      <tr>
        <th scope="col">No</th>
        <th scope="col">លេខចុះបញ្ជី</th>
        <th scope="col">ឈ្មោះ(Khmer)</th>
        <th scope="col">ឈ្មោះ(English)</th>
        <th class="text-center" scope="col">បើកដំណើរការ</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in historical_site_data" :key="item.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ item.site_number }}</td>
        <td>{{ item.title_kh }}</td>
        <td>{{ item.title_en }}</td>
        <td class="text-center">
          <h6>
            <span v-if="item.is_enable" class="badge text-bg-success">បើក</span>
          </h6>
          <h6>
            <span v-if="!item.is_enable" class="badge text-bg-danger">បិទ</span>
          </h6>
        </td>
        <td>
          <button
            class="btn btn-warning btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#hsModal"
            v-on:click="Edit(item._id)"
          >
            កែប្រែ
          </button>
          <button
            class="btn btn-danger btn-sm"
            v-on:click="Delete(item._id)"
            style="margin-left: 5px"
          >
            លុប
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Modal -->

  <div
    v-show="isEditing"
    class="modal fade"
    id="hsModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="hsLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="hsLabel">
            {{ isEditing ? "កែប្រែ" : "បង្កើត" }} ទីតាំងស្ថានីយប្រវត្តិសាស្ត្រ
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="clearForm()"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <img v-if="imagePreview" :src="imagePreview" class="rounded img-fluid mb-3" alt="Preview" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-10">
              <div class="input-group mb-3">
                <input id="input_file" type="file" accept="image/*" @change="handleFileUpload" class="form-control"/>
                <label class="input-group-text" for="inputGroupFile02">បញ្ចូលរូបភាព</label>
              </div>
            </div>
            <div class="col-md-2">
              <button @click="ClearImage()" class="btn btn-danger" v-bind:disabled="!image"> លុបរូប </button>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label">ឈ្មោះ(Khmer)</label>
                <input type="text" v-model="title_kh" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label">ឈ្មោះ(Egnlish)</label>
                <input type="text" v-model="title_en" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label">លេខសម្គាល់ទីតាំង</label>
                <input type="text" v-model="site_number" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label">IK Number</label>
                <input type="text" v-model="ik_number" class="form-control" />
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="objectTypeSelect" class="form-label">ប្រភេទស្ថានីយ</label>
                <select v-model="category_site_kh" class="form-control">
                  <option value="" disabled>Select Object Type</option>
                  <option value="temple">ប្រាសាទបុរាណ</option>
                  <option value="cat_hill">ទួលបុរាណ</option>
                  <option value="cat_irrigation_system">ប្រព័ន្ធធារាសាស្ត្របុរាណ</option>
                  <option value="cat_Transportation">គមនាគមន៍បុរាណ</option>
                  <option value="cat_industrial_station">ស្ថានីយឧស្សាហកម្មបុរាណ</option>
                  <option value="cat_muol_village">ភូមិមូលបុរាណ</option>
                  <option value="cat_mining_site">ការដ្ឋានយករ៉ែបុរាណ</option>
                  <option value="cat_ancient_perung">ពើងបុរាណ</option>
                  <option value="cat_ancient_cave">ល្អាងឬរូងភ្នំបុរាណ</option>
                  <option value="cat_underwater_heritage">បេតិកភណ្ឌក្រោមទឹក</option>
                  <option value="Unknown_cat_site">មិនទាន់កំណត់</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="objectTypeSelect" class="form-label">ស្ថានីយ</label>
                <select v-model="type_of_site_kh" class="form-control">
                  <option value="" disabled>Select Object Type</option>
                  <option value="type_1_1">ប្រាសាទមានរូបរាង</option>
                  <option value="type_1_2">ប្រាសាទបាក់បែក ឬគ្រឹះប្រាសាទ</option>
                  <option value="type_2_1">ទួលកប់សព</option>
                  <option value="type_2_2">ទួលអ្នកតា (ទីសក្ការបូជា)</option>
                  <option value="type_2_3">ទួលមនុស្សរស់នៅ(មានសំណល់របស់ប្រើប្រាស់របស់មនុស្សសម័យបុរាណ)</option>
                  <option value="type_2_4">ទួលមានសំណង់បុរាណពីលើ(ផ្ទះ វត្ត ព្រះវិហារ កុដិ ចេតិយ...)</option>
                  <option value="type_3_1">ព្រែកជីកបុរាណ</option>
                  <option value="type_3_2">បារាយណ៍</option>
                  <option value="type_3_3">ស្រះបុរាណ</option>
                  <option value="type_3_4">ត្រពាំងបុរាណ</option>
                  <option value="type_4_1">ផ្លូវបុរាណ</option>
                  <option value="type_4_2">ស្ពានបុរាណ</option>
                  <option value="type_5_1">ឡដុតកុលាលភាជន៍</option>
                  <option value="type_5_2">ឡស្លលោហៈ</option>
                  <option value="type_6">ភូមិមូលបុរាណ</option>
                  <option value="type_7_1">ថ្មភក់</option>
                  <option value="type_7_2">ថ្មបាយក្រៀម</option>
                  <option value="type_7_3">លោហៈ</option>
                  <option value="type_8_1">ពើងមានគំនូរបុរេប្រវត្តិសាស្រ្ត</option>
                  <option value="type_8_2">ពើងផ្ទាំងថ្មមានចម្លាក់</option>
                  <option value="type_8_3">ពើងកប់សព</option>
                  <option value="type_8_4">ពើងទីសក្ការៈបូជា</option>
                  <option value="type_9_1">ល្អាងជាទីជម្រកទបស់មនុស្ស</option>
                  <option value="type_9_2">ល្អាងជាកន្លែងកប់សព</option>
                  <option value="type_9_3">ល្អាងជាទីសក្ការៈបូរជា</option>
                  <option value="type_10">បេតិកភណ្ឌក្រោមទឹក</option>
                  <option value="Unknown_type_site">មិនទាន់កំណត់</option>
                </select>
              </div>
            </div>
          </div>
          
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label">ភូមិ</label>
                <input type="text" v-model="village_kh" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label">ឃុំ/សង្កាត់</label>
                <input type="text" v-model="commune_kh" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label">ស្រុក/ក្រុង/ខណ្ឌ</label>
                <input type="text" v-model="district_kh" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label">ខេត្ត/រាជធានី</label>
                <input type="text" v-model="province_kh" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label">លេខនិយាមកា</label>
                <input type="text" v-model="coordinate_system" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label">UTM_X</label>
                <input type="text" v-model="utm_x" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label">UTM_Y</label>
                <input type="text" v-model="utm_y" class="form-control" />
              </div>
            </div>
          </div>


          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label class="form-label">ការពិពណ៌នា(Khmer)</label>
                <textarea
                  class="form-control"
                  v-model="desc_kh"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label class="form-label">ការពិពណ៌នា(English)</label>
                <textarea
                  class="form-control"
                  v-model="desc_en"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label for="">បើកដំណើរការ</label>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  v-model="is_enable"
                  checked
                  style="padding: 10px 20px"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            id="btnCloseModal"
            @click="clearForm()"
          >
            បិទ
          </button>

          <button type="button" class="btn btn-primary" @click="submitForm">
            {{ isEditing ? "កែប្រែ" : "បង្កើត" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HistoricalSiteService } from "@/services/historical_site.service";
import environment from "../environments/environment";

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
      isEditing: false, // To track if we are editing an existing item
      historicalSiteId: null, // To store the ID of the item being edited
      title_kh: "", // To bind the title in Khmer
      title_en: "", // To bind the title in English
      site_number: "",
      ik_number: "",
      desc_kh: "", // To bind the description in Khmer
      desc_en: "", // To bind the description in English
      is_enable: true, // To track whether the item is enabled or not
      image: null,
      imagePreview: null,
    };
  },
  methods: {
    async downloadImage(imageUrl) {
      try {
        // Fetch the image
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        // Extract the file name from the URL
        const fileName = imageUrl.split("/").pop(); // Get the last part of the URL

        // Create a file from the blob
        const file = new File([blob], fileName, { type: blob.type });

        // Assign the file to this.image (to handle it in your form or other logic)
        this.image = file;
      } catch (error) {
        console.error("Error downloading image:", error);
      }
    },
    ClearImage() {
      this.imagePreview = null;
      this.image = null;
      document.getElementById("input_file").value = "";
    },
    ClearModal() {
      this.isEditing = false;
      this.imagePreview = null;
      this.image = null;
      document.getElementById("input_file").value = "";
    },
    handleFileUpload(event) {
      this.image = event.target.files[0];
      if (this.image) {
        this.imagePreview = URL.createObjectURL(this.image);
      }
    },
    async GetAll() {
      try {
        this.historical_site_data = await HistoricalSiteService.GetAll();
        //console.log(this.historical_site_data);
      } catch (error) {
        console.log(error);
      }
    },
    async submitForm() {
      // Add logic to create or update the historical site data
      const formData = new FormData();

      if (this.image) {
        formData.append("image", this.image);
      }

      try {
        if (this.isEditing) {
          await HistoricalSiteService.Update({
            id: this.historicalSiteId,
            title_kh: this.title_kh,
            title_en: this.title_en,
            site_number: this.site_number,
            ik_number: this.ik_number,
            desc_kh: this.desc_kh,
            desc_en: this.desc_en,
            img: null,
            is_enable: this.is_enable,
          });
          this.$toast.success("Updated successfully!");

          if (this.image) {
            try {
              await HistoricalSiteService.UploadImage(
                this.historicalSiteId,
                formData
              );
              this.$toast.success("Image Updated!");
            } catch (error) {
              console.log(error);
            }
          }
        } else {
          const result = await HistoricalSiteService.Create({
            title_kh: this.title_kh,
            title_en: this.title_en,
            site_number: this.site_number,
            ik_number: this.ik_number,
            desc_kh: this.desc_kh,
            desc_en: this.desc_en,
            is_enable: this.is_enable,
          });
          this.$toast.success("Created successfully!");

          if (this.image) {
            try {
              await HistoricalSiteService.UploadImage(result._id, formData);
              this.$toast.success("Image Uploaded!");
            } catch (error) {
              console.log(error);
            }
          }
        }
        document.getElementById("btnCloseModal").click();

        this.clearForm(); // Optionally clear form after submission
        await this.GetAll();
      } catch (error) {
        this.$toast.error("An error occurred.");
      }
    },
    clearForm() {
      this.title_kh = "";
      this.title_en = "";
      this.site_number = "";
      this.ik_number = "";
      this.desc_kh = "";
      this.desc_en = "";
      this.is_enable = true;
    },
    async Delete(id) {
      try {
        await HistoricalSiteService.DeletById(id);
        this.$toast.success(`Deleted Id: ${id}!`);
        await this.GetAll();
      } catch (error) {
        this.$toast.error(`Deleted Id: ${id} has failed!`);
        console.log(error);
      }
    },
    async Edit(id) {
      document.getElementById("input_file").value = "";
      const item = this.historical_site_data.find((i) => i._id === id);

      console.log(item);

      this.title_kh = item.title_kh;
      this.title_en = item.title_en;
      this.site_number = item.site_number;
      this.ik_number = item.ik_number;
      this.desc_kh = item.desc_kh;
      this.desc_en = item.desc_en;
      this.is_enable = item.is_enable;
      this.historicalSiteId = item._id;
      this.isEditing = true;
      if (item.img) {
        this.imagePreview = environment.API_BASE_URL + `/${item.img}`;
        await this.downloadImage(environment.API_BASE_URL + `/${item.img}`);
      } else {
        this.ClearImage();
      }
    },
  },
  async mounted() {
    await this.GetAll();
  },
};
</script>

<style>
table,
tr,
th,
td {
  vertical-align: middle;
}
</style>
