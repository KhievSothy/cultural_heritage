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
        <div class="user-icon p-2" style="cursor: pointer">
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
</template>

<script>
export default {
  data() {
    return {
      fullname: localStorage.getItem("fullname"),
    };
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
