<template>
  <div class="login-container">
    <div class="row g-0 w-100 h-100 shadow-lg">
      <div
        class="col-lg-6 form-container d-flex align-items-center justify-content-center"
      >
        <div
          class="w-75 d-flex justify-content-center"
          style="flex-direction: column"
        >
          <img
            src="http://www.mcfa.gov.kh/template/site/css/images/logo.png"
            alt="mcfa"
            style="max-width: 500px; margin: 0 auto"
          />
          <h2 class="text-center mt-5" style="color: goldenrod">
            Cultural Heritage
          </h2>
          <h3 class="text-center mt-3 mb-4" style="color: goldenrod">
            ចូលគ្រប់គ្រងគេហទំព័រ
          </h3>
          <hr />
          <form @submit.prevent="handleSubmit">
            <div class="mt-2">
              <label for="email" class="form-label text-white"
                >Email address</label
              >
              <input
                type="email"
                class="form-control form-control-lg"
                id="email"
                v-model="email"
                placeholder="Enter email"
              />
            </div>
            <div class="mt-3">
              <label for="password" class="form-label text-white"
                >Password</label
              >
              <input
                type="password"
                class="form-control form-control-lg"
                id="password"
                v-model="password"
                placeholder="Enter password"
              />
            </div>
            <div class="d-grid mt-4">
              <button type="submit" class="btn btn-warning btn-lg">
                <i class="fa-solid fa-right-to-bracket"></i> ចូលប្រើប្រាស់
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-6 login-image d-none d-lg-block"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.email !== "admin@example.com" && this.password !== "123") {
        this.$toast.error("Incorrect Username Or Password!");
        return;
      }
      this.$router.push({ path: `admin-dashboard` });
    },
  },
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-container {
  background: #292929;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.login-image {
  height: 100%;
  background: url("https://withlocals-com-res.cloudinary.com/image/upload/w_412,h_400,c_fill,g_auto,q_auto,dpr_3.0,f_auto/657ebebb96d93ca77a5b697364ef7348")
    no-repeat center center;
  background-size: cover;
}
</style>
