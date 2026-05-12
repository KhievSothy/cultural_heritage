<template>
    <h2>មាតុភូមិនិវត្តន៍វត្ថុបុរាណ</h2>
  <div>
    <div v-for="(file, index) in files" :key="index" class="mb-2">
      <input type="file" @change="handleFile($event, index)" />

      <button
        v-if="files.length > 1"
        @click="removeFile(index)"
      >
        Remove
      </button>
    </div>

    <button @click="addFile">+ Add File</button>

    <br /><br />

    <button @click="uploadFiles">Upload</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      files: [null],
    };
  },

  methods: {
    addFile() {
      this.files.push(null);
    },

    removeFile(index) {
      this.files.splice(index, 1);
    },

    handleFile(event, index) {
      this.files[index] = event.target.files[0];
    },

    async uploadFiles() {
      const formData = new FormData();

      this.files.forEach((file) => {
        if (file) {
          formData.append("files", file);
        }
      });

      try {
        const response = await axios.post(
          "http://localhost:3000/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(response.data);
        alert("Upload success");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>