<template>
      <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <!-- ***** Logo Start ***** -->
                    <a href="index.html" class="logo">
                        <!-- ***** <img src="assets/images/MoCFA_logo.png" alt=""> *****-->
                    </a>
                    <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** -->
                    <ul class="nav">
                        <li class="nav-item" :class="{ active: $route.path == '/' }">
                         <router-link to="/" class="nav-link"> Home 3 <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item" :class="{ active: $route.path == '/about' }">
                         <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                    <li class="nav-item" :class="{ active: $route.path == '/deals' }">
                         <router-link to="/deals" class="nav-link">Historical Sites</router-link>
                    </li>
                    <li class="nav-item" :class="{ active: $route.path == '/contact' }">
                         <router-link to="/contact" class="nav-link">Museum</router-link>
                    </li>
                    <li class="nav-item" :class="{ active: $route.path == '/login' }">
                         <router-link to="/login" class="nav-link">Event</router-link>
                    </li>
                    <li class="nav-item" :class="{ active: $route.path == '/signup' }">
                         <router-link to="/signup" class="nav-link">Legal Document</router-link>
                    </li>
                    </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    <!-- ***** Menu End ***** -->
                </nav>
            </div>
        </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
</template>

<script>
export default {

}
</script>