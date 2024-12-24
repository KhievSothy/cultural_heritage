<template>
  <h2>ទីតាំងប្រវត្តិសាស្ត្រ</h2>
  <button
    class="btn btn-primary mt-3"
    data-bs-toggle="modal"
    data-bs-target="#hsModal"
    id="btnOpenModal"
    @click="isEditing = false"
  >
    <i class="fa-solid fa-plus"></i> បង្កើតថ្មី
  </button>
  <hr />
  <table class="table">
    <thead>
      <tr>
        <th scope="col">លេខរៀង</th>
        <th scope="col">ចំណងជើងជាភាសាខ្មែរ</th>
        <th scope="col">ចំណងជើងជាភាសាអង់គ្លេស</th>
        <th class="text-center" scope="col">បើកដំណើរការ</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in historical_site_data" :key="item.id">
        <th scope="row">{{ index + 1 }}</th>
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
          <h1 class="modal-title fs-5" id="hsLabel">ទីតាំងប្រវត្តិសាស្ត្រ</h1>
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
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >ចំណងជើងជាភាសាខ្មែរ</label
                >
                <input type="text" v-model="title_kh" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label"
                  >ចំណងជើងជាភាសាអង់គ្លេស</label
                >
                <input type="text" v-model="title_en" class="form-control" />
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
                <label class="form-label">ការពិពណ៌នាជាភាសាអង់គ្លេស</label>
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
      desc_kh: "", // To bind the description in Khmer
      desc_en: "", // To bind the description in English
      is_enable: true, // To track whether the item is enabled or not
    };
  },
  methods: {
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
      try {
        if (this.isEditing) {
          await HistoricalSiteService.Update({
            id: this.historicalSiteId,
            title_kh: this.title_kh,
            title_en: this.title_en,
            desc_kh: this.desc_kh,
            desc_en: this.desc_en,
            is_enable: this.is_enable,
          });
          this.$toast.success("Updated successfully!");
        } else {
          await HistoricalSiteService.Create({
            title_kh: this.title_kh,
            title_en: this.title_en,
            desc_kh: this.desc_kh,
            desc_en: this.desc_en,
            is_enable: this.is_enable,
          });
          this.$toast.success("Created successfully!");
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
    Edit(id) {
      const item = this.historical_site_data.find((i) => i._id === id);
      this.title_kh = item.title_kh;
      this.title_en = item.title_en;
      this.desc_kh = item.desc_kh;
      this.desc_en = item.desc_en;
      this.is_enable = item.is_enable;
      this.historicalSiteId = item._id;
      this.isEditing = true;
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
