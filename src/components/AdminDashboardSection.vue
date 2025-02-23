<template>
  <div id="app" class="d-flex">
    <!-- Sidebar -->
    <nav class="sidebar bg-dark text-white vh-100" style="min-width: 250px">
      <div class="d-flex justify-content-center mt-3">
        <router-link to="/">
          <img src="assets/images/logo.png" alt="" style="width: 100px" />
        </router-link>
      </div>

      <hr />
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link
            class="nav-link text-white py-3 px-4 d-flex align-items-center"
            to="/admin-dashboard"
            activeClass="link_active"
            exact-active-class="link_active"
          >
            <i class="fa-solid fa-table-columns"></i>
            <span style="margin-left: 20px">ផ្ទាំងគ្រប់គ្រង</span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
            class="nav-link text-white py-3 px-4 d-flex align-items-center"
            to="/admin-dashboard/historical-site"
            activeClass="link_active"
            exact-active-class="link_active"
          >
            <i class="fa-solid fa-gopuram"></i>
            <span style="margin-left: 20px">ទីតាំងប្រវត្តិសាស្ត្រ</span>
          </router-link>
        </li>
        
        <li class="nav-item">
          <router-link
            class="nav-link text-white py-3 px-4 d-flex align-items-center"
            to="/admin-dashboard/missing-artefact"
            activeClass="link_active"
            exact-active-class="link_active"
          >
            <i class="fa-solid fa-monument"></i>
            <span style="margin-left: 20px">វត្ថុបុរាណបាត់</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Main Content -->
    <div class="main-content flex-grow-1">
      <header
        class="navbar navbar-expand-lg navbar-light bg-light px-4 d-flex justify-content-between"
        style="border-bottom: 1px solid rgba(0, 0, 0, 0.2)"
      >
        <h4>
          Welcome Back
          <span style="color: goldenrod"> {{ this.fullname }}</span> !
        </h4>
        <div
          class="user-icon p-2"
          style="cursor: pointer"
          data-bs-toggle="modal"
          data-bs-target="#userModal"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
            alt=""
          />
        </div>
      </header>
      <main class="p-4">
        <!-- Dynamic Component Rendered Based on Route -->
        <router-view />
      </main>
    </div>
  </div>

  <div
    class="modal fade"
    id="userModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">User Modal</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="img-container d-flex justify-content-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
              alt=""
              style="width: 50%"
            />
          </div>

          <div class="row mt-4">
            <div class="col-md-12">
              <div class="form-group">
                <label for="">Current Password</label>
                <input type="password" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="">New Password</label>
                <input type="password" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <div class="form-group">
                <label for="">Confirm Password</label>
                <input type="password" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            @click="LogOut()"
            type="button"
            data-bs-dismiss="modal"
            class="btn btn-warning"
          >
            <i class="fa-solid fa-right-from-bracket"></i> Log Out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../routes/index";
export default {
  data() {
    return {
      fullname: localStorage.getItem("fullname"),
    };
  },
  methods: {
    LogOut() {
      localStorage.clear();
      router.push("/admin-login");
    },
  },
};
</script>

<style scoped>
#app {
  height: 100vh;
  overflow: hidden;
}
.sidebar {
  width: 250px;
  background: linear-gradient(180deg, #343a40, #212529);
}
.sidebar h3 {
  font-weight: bold;
  text-transform: uppercase;
}
.sidebar .nav-link {
  font-size: 1.1rem;
  transition: ease-in-out 0.3s ease;
}
.sidebar .nav-link:hover,
.link_active {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
}
.main-content {
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
}
.user-icon img {
  width: 40px;
  height: 40px;
}
</style>
