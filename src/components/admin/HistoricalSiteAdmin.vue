```vue
<template>
  <h2>ប្រវត្តិសាស្ត្រ</h2>

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
      <tr
        v-for="(item, index) in historical_site_data"
        :key="item._id"
      >
        <th scope="row">{{ index + 1 }}</th>

        <td>{{ item.site_number }}</td>

        <td>{{ item.title_kh }}</td>

        <td>{{ item.title_en }}</td>

        <td class="text-center">
          <span
            v-if="item.is_enable"
            class="badge text-bg-success"
          >
            បើក
          </span>

          <span
            v-else
            class="badge text-bg-danger"
          >
            បិទ
          </span>
        </td>

        <td>
          <button
            class="btn btn-warning btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#hsModal"
            @click="Edit(item._id)"
          >
            កែប្រែ
          </button>

          <button
            class="btn btn-danger btn-sm"
            @click="Delete(item._id)"
            style="margin-left: 5px"
          >
            លុប
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- =========================
       MODAL
  ========================== -->

  <div
    class="modal fade"
    id="hsModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="hsLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">

        <!-- HEADER -->
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="hsLabel">
            {{ isEditing ? "កែប្រែ" : "បង្កើត" }}
            ស្ថានីយប្រវត្តិសាស្ត្រ
          </h1>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="clearForm()"
          ></button>
        </div>

        <!-- BODY -->
        <div class="modal-body">

          <!-- =========================
               IMAGES
          ========================== -->

          <h5 class="mb-3">រូបភាព</h5>

          <div class="row">

            <div
              class="col-md-4 mb-3"
              v-for="(item, index) in images"
              :key="index"
            >
              <img
                v-if="item.preview"
                :src="item.preview"
                class="rounded img-fluid mb-2"
                alt="Preview"
              />

              <div class="input-group mb-2">
                <input
                  type="file"
                  accept="image/*"
                  @change="handleFileUpload($event, index)"
                  class="form-control"
                />
              </div>

              <button
                type="button"
                @click="removeImage(index)"
                class="btn btn-danger btn-sm"
                :disabled="images.length === 1"
              >
                លុបរូប
              </button>
            </div>

          </div>

          <button
            type="button"
            @click="addMoreImage"
            class="btn btn-primary mb-4"
          >
            + បន្ថែមរូបភាព
          </button>


          <!-- =========================
               BASIC INFORMATION
          ========================== -->

          <h5 class="mb-3">ព័ត៌មានទូទៅ</h5>

          <div class="row">

            <!-- Site Number -->
            <div class="col-md-4 mb-3">
              <label class="form-label">
                លេខសម្គាល់ទីតាំង
              </label>

              <input
                type="text"
                v-model="site_number"
                class="form-control"
              />
            </div>

            <!-- IK Number -->
            <div class="col-md-4 mb-3">
              <label class="form-label">
                IK Number
              </label>

              <input
                type="text"
                v-model="ik_number"
                class="form-control"
              />
            </div>

            <!-- Registered Date -->
            <div class="col-md-4 mb-3">
              <label class="form-label">
                កាលបរិច្ឆេទចុះបញ្ជី
              </label>

              <input
                type="date"
                v-model="registered_date"
                class="form-control"
              />
            </div>

            <!-- Khmer Title -->
            <div class="col-md-6 mb-3">
              <label class="form-label">
                ឈ្មោះ (Khmer) *
              </label>

              <input
                type="text"
                v-model="title_kh"
                class="form-control"
              />
            </div>

            <!-- English Title -->
            <div class="col-md-6 mb-3">
              <label class="form-label">
                ឈ្មោះ (English) *
              </label>

              <input
                type="text"
                v-model="title_en"
                class="form-control"
              />
            </div>

          </div>


          <!-- =========================
               SITE CLASSIFICATION
          ========================== -->

          <h5 class="mt-3 mb-3">
            ប្រភេទ និងចំណាត់ថ្នាក់ស្ថានីយ
          </h5>

          <div class="row">

            <!-- Category -->
            <div class="col-md-6 mb-3">

              <label class="form-label">
                ប្រភេទស្ថានីយ
              </label>

              <select
                v-model="category_site_kh"
                class="form-control"
              >
                <option value="">
                  មិនទាន់កំណត់
                </option>

                <option value="temple">
                  ប្រាសាទបុរាណ
                </option>

                <option value="cat_hill">
                  ទួលបុរាណ
                </option>

                <option value="cat_irrigation_system">
                  ប្រព័ន្ធធារាសាស្ត្របុរាណ
                </option>

                <option value="cat_Transportation">
                  គមនាគមន៍បុរាណ
                </option>

                <option value="cat_industrial_station">
                  ស្ថានីយឧស្សាហកម្មបុរាណ
                </option>

                <option value="cat_muol_village">
                  ភូមិមូលបុរាណ
                </option>

                <option value="cat_mining_site">
                  ការដ្ឋានយករ៉ែបុរាណ
                </option>

                <option value="cat_ancient_perung">
                  ពើងបុរាណ
                </option>

                <option value="cat_ancient_cave">
                  ល្អាងឬរូងភ្នំបុរាណ
                </option>

                <option value="cat_underwater_heritage">
                  បេតិកភណ្ឌក្រោមទឹក
                </option>

                <option value="Unknown_cat_site">
                  មិនទាន់កំណត់
                </option>
              </select>

            </div>


            <!-- Type -->
            <div class="col-md-6 mb-3">

              <label class="form-label">
                ស្ថានីយ
              </label>

              <select
                v-model="type_of_site_kh"
                class="form-control"
              >

                <option value="">
                  មិនទាន់កំណត់
                </option>

                <option value="type_1_1">
                  ប្រាសាទមានរូបរាង
                </option>

                <option value="type_1_2">
                  ប្រាសាទបាក់បែក ឬគ្រឹះប្រាសាទ
                </option>

                <option value="type_2_1">
                  ទួលកប់សព
                </option>

                <option value="type_2_2">
                  ទួលអ្នកតា (ទីសក្ការបូជា)
                </option>

                <option value="type_2_3">
                  ទួលមនុស្សរស់នៅ
                  (មានសំណល់របស់ប្រើប្រាស់របស់មនុស្សសម័យបុរាណ)
                </option>

                <option value="type_2_4">
                  ទួលមានសំណង់បុរាណពីលើ
                  (ផ្ទះ វត្ត ព្រះវិហារ កុដិ ចេតិយ...)
                </option>

                <option value="type_3_1">
                  ព្រែកជីកបុរាណ
                </option>

                <option value="type_3_2">
                  បារាយណ៍
                </option>

                <option value="type_3_3">
                  ស្រះបុរាណ
                </option>

                <option value="type_3_4">
                  ត្រពាំងបុរាណ
                </option>

                <option value="type_4_1">
                  ផ្លូវបុរាណ
                </option>

                <option value="type_4_2">
                  ស្ពានបុរាណ
                </option>

                <option value="type_5_1">
                  ឡដុតកុលាលភាជន៍
                </option>

                <option value="type_5_2">
                  ឡស្លលោហៈ
                </option>

                <option value="type_6">
                  ភូមិមូលបុរាណ
                </option>

                <option value="type_7_1">
                  ថ្មភក់
                </option>

                <option value="type_7_2">
                  ថ្មបាយក្រៀម
                </option>

                <option value="type_7_3">
                  លោហៈ
                </option>

                <option value="type_8_1">
                  ពើងមានគំនូរបុរេប្រវត្តិសាស្រ្ត
                </option>

                <option value="type_8_2">
                  ពើងផ្ទាំងថ្មមានចម្លាក់
                </option>

                <option value="type_8_3">
                  ពើងកប់សព
                </option>

                <option value="type_8_4">
                  ពើងទីសក្ការៈបូជា
                </option>

                <option value="type_9_1">
                  ល្អាងជាទីជម្រករបស់មនុស្ស
                </option>

                <option value="type_9_2">
                  ល្អាងជាកន្លែងកប់សព
                </option>

                <option value="type_9_3">
                  ល្អាងជាទីសក្ការៈបូជា
                </option>

                <option value="type_10">
                  បេតិកភណ្ឌក្រោមទឹក
                </option>

                <option value="Unknown_type_site">
                  មិនទាន់កំណត់
                </option>

              </select>

            </div>

          </div>


          <!-- =========================
               LOCATION
          ========================== -->

          <h5 class="mt-3 mb-3">
            ទីតាំង
          </h5>

          <div class="row">

            <!-- Village -->
            <div class="col-md-6 mb-3">
              <label class="form-label">
                ភូមិ
              </label>

              <input
                type="text"
                v-model="village_kh"
                class="form-control"
              />
            </div>

            <!-- Commune -->
            <div class="col-md-6 mb-3">
              <label class="form-label">
                ឃុំ/សង្កាត់
              </label>

              <input
                type="text"
                v-model="commune_kh"
                class="form-control"
              />
            </div>

            <!-- District -->
            <div class="col-md-6 mb-3">
              <label class="form-label">
                ស្រុក/ខណ្ឌ
              </label>

              <input
                type="text"
                v-model="district_kh"
                class="form-control"
              />
            </div>

            <!-- Province -->
            <div class="col-md-6 mb-3">
              <label class="form-label">
                ខេត្ត/រាជធានី
              </label>

              <input
                type="text"
                v-model="province_kh"
                class="form-control"
              />
            </div>

          </div>


          <!-- =========================
               COORDINATES
          ========================== -->

          <h5 class="mt-3 mb-3">
            និយាមកា
          </h5>

          <div class="row">

            <div class="col-md-4 mb-3">

              <label class="form-label">
                ប្រព័ន្ធនិយាមកា
              </label>

              <input
                type="text"
                v-model="coordinate_system"
                class="form-control"
                placeholder="ឧ. UTM"
              />

            </div>

            <div class="col-md-4 mb-3">

              <label class="form-label">
                UTM X
              </label>

              <input
                type="number"
                step="any"
                v-model.number="utm_x"
                class="form-control"
              />

            </div>

            <div class="col-md-4 mb-3">

              <label class="form-label">
                UTM Y
              </label>

              <input
                type="number"
                step="any"
                v-model.number="utm_y"
                class="form-control"
              />

            </div>

          </div>


          <!-- =========================
               HISTORICAL INFORMATION
          ========================== -->

          <h5 class="mt-3 mb-3">
            ព័ត៌មានប្រវត្តិសាស្ត្រ
          </h5>

          <div class="row">

            <!-- Period -->
            <div class="col-md-6 mb-3">

              <label class="form-label">
                កាលបរិច្ឆេទ/សម័យ
              </label>

              <input
                type="text"
                v-model="period"
                class="form-control"
                placeholder="ឧ. សម័យអង្គរ"
              />

            </div>

            <!-- Style -->
            <div class="col-md-6 mb-3">

              <label class="form-label">
                រចនាបថ
              </label>

              <input
                type="text"
                v-model="style"
                class="form-control"
              />

            </div>

            <!-- Property Code -->
            <div class="col-md-6 mb-3">

              <label class="form-label">
                លេខកូដបេតិកភណ្ឌ
              </label>

              <input
                type="text"
                v-model="code_property"
                class="form-control"
              />

            </div>

            <!-- Inscription Number -->
            <div class="col-md-6 mb-3">

              <label class="form-label">
                លេខសិលាចារឹក
              </label>

              <input
                type="text"
                v-model="inscription_number"
                class="form-control"
              />

            </div>

            <!-- Reference -->
            <div class="col-md-12 mb-3">

              <label class="form-label">
                ឯកសារយោង
              </label>

              <input
                type="text"
                v-model="refernce"
                class="form-control"
              />

            </div>

          </div>


          <!-- =========================
               DESCRIPTION
          ========================== -->

          <h5 class="mt-3 mb-3">
            ការពិពណ៌នា
          </h5>

          <div class="row">

            <div class="col-md-6 mb-3">

              <label class="form-label">
                ការពិពណ៌នា (Khmer) *
              </label>

              <textarea
                class="form-control"
                v-model="desc_kh"
                rows="10"
              ></textarea>

            </div>

            <div class="col-md-6 mb-3">

              <label class="form-label">
                ការពិពណ៌នា (English)
              </label>

              <textarea
                class="form-control"
                v-model="desc_en"
                rows="10"
              ></textarea>

            </div>

          </div>


          <!-- =========================
               ENABLE
          ========================== -->

          <div class="row mt-3">

            <div class="col-md-12">

              <label class="form-label">
                បើកដំណើរការ
              </label>

              <div class="form-check form-switch">

                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  v-model="is_enable"
                  style="padding: 10px 20px"
                />

              </div>

            </div>

          </div>

        </div>


        <!-- FOOTER -->
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

          <button
            type="button"
            class="btn btn-primary"
            @click="submitForm"
          >
            {{ isEditing ? "កែប្រែ" : "បង្កើត" }}
          </button>

        </div>

      </div>
    </div>
  </div>
</template>


<script>
import { HistoricalSiteService } from "@/services/historical_site.service";
import environment from "../../environments/environment";

export default {
  watch: {
    "$i18n.locale"(newLocale) {
      this.current_lang = newLocale;
    },
  },

  data() {
    return {
      // =========================
      // DATA
      // =========================

      historical_site_data: [],

      current_lang: this.$i18n.locale,

      isEditing: false,

      historicalSiteId: null,

      // Required
      site_number: "",
      title_kh: "",
      title_en: "",
      desc_kh: "",

      // Basic information
      ik_number: "",
      registered_date: "",

      // Classification
      category_site_kh: "",
      type_of_site_kh: "",

      // Location
      village_kh: "",
      commune_kh: "",
      district_kh: "",
      province_kh: "",

      // Coordinates
      coordinate_system: "",
      utm_x: null,
      utm_y: null,

      // Historical information
      period: "",
      style: "",
      code_property: "",
      inscription_number: "",
      refernce: "",

      // Description
      desc_en: "",

      // Status
      is_enable: true,

      // Images
      images: [
        {
          file: null,
          preview: null,
        },
      ],
    };
  },

  methods: {

    // =========================
    // ADD IMAGE
    // =========================

    addMoreImage() {
      this.images.push({
        file: null,
        preview: null,
      });
    },


    // =========================
    // GET COVER IMAGE
    // =========================

    getCoverImage(item) {
      if (!item.img || item.img.length === 0) {
        return null;
      }

      const cover = item.img.find(
        (img) => img.is_cover
      );

      return cover
        ? cover.path
        : item.img[0].path;
    },


    // =========================
    // REMOVE IMAGE
    // =========================

    removeImage(index) {
      this.images.splice(index, 1);

      if (this.images.length === 0) {
        this.addMoreImage();
      }
    },


    // =========================
    // CLEAR IMAGES
    // =========================

    ClearImage() {
      this.images = [
        {
          file: null,
          preview: null,
        },
      ];
    },


    // =========================
    // CLEAR MODAL
    // =========================

    ClearModal() {

      this.isEditing = false;
      this.historicalSiteId = null;

      this.site_number = "";
      this.title_kh = "";
      this.title_en = "";

      this.ik_number = "";

      this.category_site_kh = "";
      this.type_of_site_kh = "";

      this.village_kh = "";
      this.commune_kh = "";
      this.district_kh = "";
      this.province_kh = "";

      this.coordinate_system = "";
      this.utm_x = null;
      this.utm_y = null;

      this.period = "";
      this.style = "";
      this.code_property = "";
      this.inscription_number = "";
      this.refernce = "";

      this.registered_date = "";

      this.desc_kh = "";
      this.desc_en = "";

      this.is_enable = true;

      this.ClearImage();
    },


    // =========================
    // HANDLE FILE UPLOAD
    // =========================

    handleFileUpload(event, index) {

      const file = event.target.files[0];

      if (file) {

        this.images[index].file = file;

        this.images[index].preview =
          URL.createObjectURL(file);
      }
    },


    // =========================
    // GET ALL
    // =========================

    async GetAll() {

      try {

        this.historical_site_data =
          await HistoricalSiteService.GetAll();

      } catch (error) {

        console.log(error);

      }
    },


    // =========================
    // BUILD PAYLOAD
    // =========================

    buildPayload() {

      return {

        site_number: this.site_number,

        ik_number: this.ik_number,

        title_kh: this.title_kh,

        title_en: this.title_en,

        category_site_kh:
          this.category_site_kh,

        type_of_site_kh:
          this.type_of_site_kh,

        village_kh:
          this.village_kh,

        commune_kh:
          this.commune_kh,

        district_kh:
          this.district_kh,

        province_kh:
          this.province_kh,

        coordinate_system:
          this.coordinate_system,

        utm_x:
          this.utm_x,

        utm_y:
          this.utm_y,

        period:
          this.period,

        style:
          this.style,

        code_property:
          this.code_property,

        inscription_number:
          this.inscription_number,

        refernce:
          this.refernce,

        registered_date:
          this.registered_date || null,

        desc_kh:
          this.desc_kh,

        desc_en:
          this.desc_en,

        is_enable:
          this.is_enable,
      };
    },


    // =========================
    // SUBMIT FORM
    // =========================

    async submitForm() {

      console.log(
        "isEditing =",
        this.isEditing
      );

      console.log(
        "historicalSiteId =",
        this.historicalSiteId
      );

      const formData = new FormData();

      // Add new images only
      this.images.forEach((item) => {

        if (item.file) {

          formData.append(
            "images",
            item.file
          );

        }

      });


      try {

        const payload =
          this.buildPayload();


        // =========================
        // UPDATE
        // =========================

        if (
          this.isEditing &&
          this.historicalSiteId
        ) {

          await HistoricalSiteService.Update({

            id:
              this.historicalSiteId,

            ...payload,

          });


          // Upload new images
          if (
            this.images.some(
              (img) => img.file
            )
          ) {

            await HistoricalSiteService.UploadImage(

              this.historicalSiteId,

              formData

            );

          }


          this.$toast.success(
            "Updated successfully!"
          );


          document
            .getElementById(
              "btnCloseModal"
            )
            .click();


          this.ClearModal();

          await this.GetAll();

        }


        // =========================
        // CREATE
        // =========================

        else {

          const result =
            await HistoricalSiteService.Create(
              payload
            );


          const siteId =
            result._id ||
            result.site?._id;


          if (!siteId) {

            throw new Error(
              "Created successfully but site ID was not returned."
            );

          }


          // Upload images
          if (
            this.images.some(
              (img) => img.file
            )
          ) {

            await HistoricalSiteService.UploadImage(

              siteId,

              formData

            );

          }


          this.$toast.success(
            "Created successfully!"
          );


          document
            .getElementById(
              "btnCloseModal"
            )
            .click();


          this.ClearModal();

          await this.GetAll();

        }


      } catch (error) {

        console.log(
          "Status:",
          error.response?.status
        );

        console.log(
          "Data:",
          error.response?.data
        );

        console.log(error);


        this.$toast.error(

          error.response?.data?.message ||

          "Please check required fields."

        );

      }

    },


    // =========================
    // CLEAR FORM
    // =========================

    clearForm() {

      this.ClearModal();

    },


    // =========================
    // DELETE
    // =========================

    async Delete(id) {

      try {

        await HistoricalSiteService.DeletById(
          id
        );


        this.$toast.success(
          `Deleted Id: ${id}!`
        );


        await this.GetAll();

      } catch (error) {

        console.log(error);

        this.$toast.error(
          `Deleted Id: ${id} has failed!`
        );

      }

    },


    // =========================
    // EDIT
    // =========================

    async Edit(id) {

      this.ClearImage();


      const item =
        this.historical_site_data.find(
          (i) => i._id === id
        );


      if (!item) {
        return;
      }


      // =========================
      // BASIC
      // =========================

      this.site_number =
        item.site_number || "";

      this.title_kh =
        item.title_kh || "";

      this.title_en =
        item.title_en || "";

      this.ik_number =
        item.ik_number || "";


      // =========================
      // CLASSIFICATION
      // =========================

      this.category_site_kh =
        item.category_site_kh || "";

      this.type_of_site_kh =
        item.type_of_site_kh || "";


      // =========================
      // LOCATION
      // =========================

      this.village_kh =
        item.village_kh || "";

      this.commune_kh =
        item.commune_kh || "";

      this.district_kh =
        item.district_kh || "";

      this.province_kh =
        item.province_kh || "";


      // =========================
      // COORDINATES
      // =========================

      this.coordinate_system =
        item.coordinate_system || "";

      this.utm_x =
        item.utm_x ?? null;

      this.utm_y =
        item.utm_y ?? null;


      // =========================
      // HISTORICAL INFORMATION
      // =========================

      this.period =
        item.period || "";

      this.style =
        item.style || "";

      this.code_property =
        item.code_property || "";

      this.inscription_number =
        item.inscription_number || "";

      this.refernce =
        item.refernce || "";


      // =========================
      // REGISTERED DATE
      // =========================

      if (item.registered_date) {

        this.registered_date =
          new Date(item.registered_date)
            .toISOString()
            .split("T")[0];

      } else {

        this.registered_date = "";

      }


      // =========================
      // DESCRIPTION
      // =========================

      this.desc_kh =
        item.desc_kh || "";

      this.desc_en =
        item.desc_en || "";


      // =========================
      // STATUS
      // =========================

      this.is_enable =
        item.is_enable !== undefined
          ? item.is_enable
          : true;


      // =========================
      // ID
      // =========================

      this.historicalSiteId =
        item._id;

      this.isEditing = true;


      // =========================
      // IMAGES
      // =========================

      if (
        item.img &&
        item.img.length > 0
      ) {

        this.images =
          item.img.map((img) => ({

            file: null,

            preview:
              environment.API_BASE_URL +
              "/" +
              img.path,

          }));

      } else {

        this.images = [

          {
            file: null,
            preview: null,
          },

        ];

      }

    },

  },


  // =========================
  // MOUNTED
  // =========================

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
```
