<template>
  <h2>វត្ថុបុរាណបាត់</h2>
  <button
    class="btn btn-primary mt-3"
    data-bs-toggle="modal"
    data-bs-target="#maModal"
    id="btnOpenModal"
    @click="ClearModal()"
  >
    <i class="fa-solid fa-plus"></i> បង្កើតថ្មី
  </button>
  <hr />
  <table class="table">
    <thead>
      <tr>
        <th scope="col">លេខរៀង</th>
        <th scope="col">លេខរបាយការណ៍</th>
        <th scope="col">ចំណងជើងភាសាខ្មែរ</th>
        <th scope="col">វត្ថុធាតុ</th>
        <th scope="col">សម័យកាល</th>
        <th scope="col">រចនាបថ</th>
        <th class="text-center" scope="col">បើកដំណើរការ</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in missing_artefact_data" :key="item.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ item.report_no }}</td>
        <td>{{ item.title_kh }}</td>
        <td>{{ item.objecttype_kh }}</td>
        <td>{{ item.period_kh }}</td>
        <td>{{ item.style_kh }}</td>
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
            data-bs-target="#maModal"
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
    id="maModal"
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
            {{ isEditing ? "កែប្រែ" : "បង្កើត" }} វត្ថុបុរាណបាត់
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
              <img
                v-if="imagePreview"
                :src="imagePreview"
                class="rounded img-fluid mb-3"
                alt="Preview"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-10">
              <div class="input-group mb-3">
                <input
                  id="input_file"
                  type="file"
                  accept="image/*"
                  @change="handleFileUpload"
                  class="form-control"
                />
                <label class="input-group-text" for="inputGroupFile02"
                  >បង្ហោះរូបភាព</label
                >
              </div>
            </div>
            <div class="col-md-2">
              <button
                @click="ClearImage()"
                class="btn btn-danger"
                v-bind:disabled="!image"
              >
                លុបរូបភាព
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >ឈ្មោះវត្ថុជាភាសាខ្មែរ</label
                >
                <input type="text" v-model="title_kh" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >Tittle</label
                >
                <input type="text" v-model="title_en" class="form-control" />
              </div>
            </div>
          </div>

          <!-- <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >ប្រភេទវត្ថុបុរាណ</label
                >
                <input type="text" v-model="objecttype_kh" class="form-control" />
              </div>
            </div>
          </div> -->
          <!-- <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >Object type</label
                >
                <input type="text" v-model="objecttype_en" class="form-control" />
              </div>
            </div>
          </div> -->
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="objectTypeSelect" class="form-label">ប្រភេទវត្ថុបុរាណ</label>
                <select v-model="objecttype_kh" class="form-control">
                  <option value="" disabled>Select Object Type</option>
                  <option value="stone">ថ្ម</option>
                  <option value="metal">លោហៈ</option>
                  <option value="wood">ឈើ</option>
                  <option value="ceramic">សេរ៉ាមិច</option>
                  <option value="bronze">សំរឹទ្ធិ</option>
                  <option value="silver">ប្រាក់</option>
                  <option value="gold">មាស</option>
                  <option value="lacquer">ខ្មុកស្មាច់</option>
                  <option value="Unknown period">មិនអាចកំណត់អត្តសញ្ញាណ</option>
                  <!-- Add more options as needed -->
                </select>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="objectTypeSelect" class="form-label">Object type</label>
                <select v-model="objecttype_en" class="form-control">
                  <option value="" disabled>Select Object Type</option>
                  <option value="stone">stone</option>
                  <option value="metal">metal</option>
                  <option value="wood">wood</option>
                  <option value="ceramic">ceramic</option>
                  <option value="bronze">bronze</option>
                  <option value="silver">silver</option>
                  <option value="gold">gold</option>
                  <option value="lacquer">lacquer</option>
                  <option value="Unknown period">Unknown Type</option>
                  <!-- Add more options as needed -->
                </select>
              </div>
            </div>
          </div>

          <!-- <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >សម័យកាល</label
                >
                <input type="text" v-model="period_kh" class="form-control" />
              </div>
            </div>
          </div> -->
          <!-- <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >Period</label
                >
                <input type="text" v-model="period_en" class="form-control" />
              </div>
            </div>
          </div> -->
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="periodSelect" class="form-label">សម័យកាល</label>
                <select v-model="period_kh" class="form-control">
                  <option value="" disabled>Select Period</option>
                  <option value="Prehistoric period">សម័យបុរេប្រវត្តិ</option>
                  <option value="Pre-Angkor period">សម័យមុនអង្គរ</option>
                  <option value="Angkor period">សម័យអង្គរ</option>
                  <option value="Post-Angkor period">សម័យក្រោយអង្គ</option>
                  <option value="Middle period">សម័យកណ្តាល</option>
                  <option value="Modern period">សម័យទំនើប</option>
                  <option value="Unknown period">មិនអាចកំណត់អត្តសញ្ញាណ</option>
                </select>
              </div>
            </div>
          </div>


          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="periodSelect" class="form-label">Period</label>
                <select v-model="period_en" class="form-control">
                  <option value="" disabled>Select Period</option>
                  <option value="Prehistoric period">Prehistoric period</option>
                  <option value="Pre-Angkor period">Pre-Angkor period</option>
                  <option value="Angkor period">Angkor period</option>
                  <option value="Post-Angkor period">Post-Angkor period</option>
                  <option value="Middle period">Middle period</option>
                  <option value="Modern period">Modern period</option>
                  <option value="Unknown period">Unknown period</option>
                </select>
              </div>
            </div>
          </div>

          <!-- <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >រចនាបថ</label
                >
                <input type="text" v-model="style_kh" class="form-control" />
              </div>
            </div>
          </div> -->
          <!-- <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >Style</label
                >
                <input type="text" v-model="style_en" class="form-control" />
              </div>
            </div>
          </div> -->

          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="styleSelect" class="form-label">រចនាបថ</label>
                <select v-model="style_kh" class="form-control">
                  <option value="" disabled>Select Style</option>
                  <option value="Phnom Da">ភ្នំដា</option>
                  <option value="Sambor Prei Kuk">សំបូរព្រៃគុក</option>
                  <option value="Prei Khmeng">ព្រៃក្មេង</option>
                  <option value="Kampong Preah">កំពង់ព្រះ</option>
                  <option value="Kulen">គូលែន</option>
                  <option value="Preah Ko">ព្រះគោ</option>
                  <option value="Bakheng">បាខែង</option>
                  <option value="Koh Ker">កោះកេរ</option>
                  <option value="Pre Rup">ប្រែរូប</option>
                  <option value="Banteay Srei">បន្ទាយស្រី</option>
                  <option value="Khleang">ឃ្លាំង</option>
                  <option value="Baphuon">បាពួន</option>
                  <option value="Angkor Wat">អង្គរវត្ត</option>
                  <option value="Bayon">បាយន្ត</option>
                  <option value="Unknown period">មិនអាចកំណត់អត្តសញ្ញាណ</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="styleSelect" class="form-label">Style</label>
                <select v-model="style_en" class="form-control">
                  <option value="" disabled>Select Style</option>
                  <option value="Phnom Da">Phnom Da</option>
                  <option value="Sambor Prei Kuk">Sambor Prei Kuk</option>
                  <option value="Prei Khmeng">Prei Khmeng</option>
                  <option value="Kampong Preah">Kampong Preah</option>
                  <option value="Kulen">Kulen</option>
                  <option value="Preah Ko">Preah Ko</option>
                  <option value="Bakheng">Bakheng</option>
                  <option value="Koh Ker">Koh Ker</option>
                  <option value="Pre Rup">Pre Rup</option>
                  <option value="Banteay Srei">Banteay Srei</option>
                  <option value="Khleang">Khleang</option>
                  <option value="Baphuon">Baphuon</option>
                  <option value="Angkor Wat">Angkor Wat</option>
                  <option value="Bayon">Bayon</option>
                  <option value="Unknown period">Unknon Style</option>
                </select>
              </div>
            </div>
          </div>


          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >រូបរាង</label
                >
                <input type="text" v-model="shape_kh" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >Shape</label
                >
                <input type="text" v-model="shape_en" class="form-control" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >កំពស់/hight</label
                >
                <input type="text" v-model="hight" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >ទទឹង/width</label
                >
                <input type="text" v-model="width" class="form-control" />
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >ជម្រៅ/depth</label
                >
                <input type="text" v-model="depth" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >អង្កត់ផ្ចឹត/diameter</label
                >
                <input type="text" v-model="diameter" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >ទំងន់/weight</label
                >
                <input type="text" v-model="weight" class="form-control" />
              </div>
            </div>
          </div>
          
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label class="form-label">ការពិពណ៌នាជាភាសាខ្មែរ</label>
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
                <label class="form-label">Description</label>
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
              <div class="form-group">
                <label class="form-label">ប្រភពវត្ថុ</label>
                <textarea
                  class="form-control"
                  v-model="provenance_kh"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label class="form-label">Provenance</label>
                <textarea
                  class="form-control"
                  v-model="provenance_en"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >របាយការណ៍លេខយោង/Report_No</label
                >
                <input type="text" v-model="report_no" class="form-control" />
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
import { MissingArtefactService } from "@/services/missing_artefact.service";
import environment from "../environments/environment";

export default {
  watch: {
    "$i18n.locale"(newLocale) {
      this.current_lang = newLocale; // Sync with Vue I18n
    },
  },
  data() {
    return {
      missing_artefact_data: [],
      current_lang: this.$i18n.locale,
      isEditing: false, // To track if we are editing an existing item
      missingArtefactId: null, // To store the ID of the item being edited
      title_kh: "", // To bind the title in Khmer
      title_en: "", // To bind the title in English
      objecttype_kh: "",
      objecttype_en: "",
      period_kh: "",
      period_en: "",
      style_kh: "",
      style_en: "",
      shape_kh: "",
      shape_en: "",
      hight: "",
      width: "",
      depth: "",
      diameter: "",
      weight: "",
      desc_kh: "", // To bind the description in Khmer
      desc_en: "", // To bind the description in English
      provenance_kh: "",
      provenance_en: "",
      report_no: "",
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
        this.missing_artefact_data = await MissingArtefactService.GetAll();
        //console.log(this.missing_artefact_data);
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
          await MissingArtefactService.Update({
            id: this.missingArtefactId,
            title_kh: this.title_kh,
            title_en: this.title_en,
            objecttype_kh: this.objecttype_kh,
            objecttype_en: this.objecttype_en,
            period_kh: this.period_kh,
            period_en: this.period_en,
            style_kh: this.style_kh,
            style_en: this.style_en,
            shape_kh: this.shape_kh,
            shape_en: this.shape_en,
            hight: this.hight,
            width: this.width,
            depth: this.depth,
            diameter: this.diameter,
            weight: this.weight,
            desc_kh: this.desc_kh, // To bind the description in Khmer
            desc_en: this.desc_en, // To bind the description in English
            provenance_kh: this.provenance_kh,
            provenance_en: this.provenance_en,
            report_no: this.report_no,
            img: null,
            is_enable: this.is_enable,
          });
          this.$toast.success("Updated successfully!");

          if (this.image) {
            try {
              await MissingArtefactService.UploadImage(
                this.missingArtefactId,
                formData
              );
              this.$toast.success("Image Updated!");
            } catch (error) {
              console.log(error);
            }
          }
        } else {
          const result = await MissingArtefactService.Create({
            title_kh: this.title_kh,
            title_en: this.title_en,
            objecttype_kh: this.objecttype_kh,
            objecttype_en: this.objecttype_en,
            period_kh: this.period_kh,
            period_en: this.period_en,
            style_kh: this.style_kh,
            style_en: this.style_en,
            shape_kh: this.shape_kh,
            shape_en: this.shape_en,
            hight: this.hight,
            width: this.width,
            depth: this.depth,
            diameter: this.diameter,
            weight: this.weight,
            desc_kh: this.desc_kh, // To bind the description in Khmer
            desc_en: this.desc_en, // To bind the description in English
            provenance_kh: this.provenance_kh,
            provenance_en: this.provenance_en,
            report_no: this.report_no,
            is_enable: this.is_enable,
          });
          this.$toast.success("Created successfully!");

          if (this.image) {
            try {
              await MissingArtefactService.UploadImage(result._id, formData);
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
      this.objecttype_kh = "";
      this.objecttype_en= "";
      this.period_kh= "";
      this.period_en= "";
      this.style_kh= "";
      this.style_en= "";
      this.shape_kh= "";
      this.shape_en= "";
      this.hight= "";
      this.width= "";
      this.depth= "";
      this.diameter= "";
      this.weight= "";
      this.desc_kh= ""; // To bind the description in Khmer
      this.desc_en= ""; // To bind the description in English
      this.provenance_kh= "";
      this.provenance_en= "";
      this.report_no= "";
      this.is_enable = true;
    },
    async Delete(id) {
      try {
        await MissingArtefactService.DeletById(id);
        this.$toast.success(`Deleted Id: ${id}!`);
        await this.GetAll();
      } catch (error) {
        this.$toast.error(`Deleted Id: ${id} has failed!`);
        console.log(error);
      }
    },
    async Edit(id) {
      document.getElementById("input_file").value = "";
      const item = this.missing_artefact_data.find((i) => i._id === id);

      console.log(item);

      this.title_kh = item.title_kh;
      this.title_en = item.title_en;
      this.objecttype_kh = item.objecttype_kh;
      this.objecttype_en= item.objecttype_en;
      this.period_kh= item.period_kh;
      this.period_en= item.period_en;
      this.style_kh= item.style_kh;
      this.style_en= item.style_en;
      this.shape_kh= item.shape_kh;
      this.shape_en= item.shape_en;
      this.hight= item.hight;
      this.width= item.width;
      this.depth= item.depth;
      this.diameter= item.diameter;
      this.weight= item.weight;
      this.desc_kh= item.desc_kh; // To bind the description in Khmer
      this.desc_en= item.desc_en; // To bind the description in English
      this.provenance_kh= item.provenance_kh;
      this.provenance_en= item.provenance_en;
      this.report_no= item.report_no;
      this.is_enable = item.is_enable;
      this.missingArtefactId = item._id;
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
