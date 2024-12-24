import { createRouter, createWebHistory } from "vue-router";

// import Home from "@/pages/Home.vue"
// import About from "@/pages/About.vue"
// import Deals from '@/pages/Historical_Sites.vue'
// import Contact from "@/pages/Museum.vue"
// import Login from "@/pages/Event.vue"
// import Signup from '@/pages/Arts.vue'

import Home from "@/pages/Home.vue";
import Historical_Sites from "@/pages/Historical_Sites.vue";
import Museum from "@/pages/Museum.vue";
import Event from "@/pages/Event.vue";
import Arts from "@/pages/Arts.vue";
import About from "@/pages/About.vue";
import DetailN from "@/components/DetailN.vue";
import DetailTS from "@/components/DetailTS.vue";
import DetailCE from "@/components/DetailCE.vue";
import DetailSM from "@/components/DetailSM.vue";
import Musical from "@/components/Musical.vue";
import Theater from "@/components/Theater.vue";
import DetailWF from "@/components/DetailWF.vue";
import DetailBB from "@/components/DetailBB.vue";
import DetailKNY from "@/components/DetailKNY.vue";
import AdminLogin from "@/pages/AdminLogin.vue";
import AdminDashboard from "@/pages/AdminDashboard.vue";
import PageNotFound from "@/components/PageNotFound.vue";
import HistoricalSiteAdmin from "@/components/HistoricalSiteAdmin.vue";
import Dashboard from "@/components/Dashboard.vue";
import Historical_Site_Detail from "@/components/Historical_Site_Detail.vue";

import { AuthService } from "@/services/auth.service";
import { useToast } from "vue-toast-notification";
const $toast = useToast();

const routes = [
  { path: "/", component: Home },
  {
    path: "/historical_sites",
    name: "historical_sites",
    component: Historical_Sites,
  },
  {
    path: "/historical_sites/detail",
    name: "historical_sites_detail",
    component: Historical_Site_Detail,
  },
  { path: "/museum", component: Museum },
  { path: "/event", component: Event },
  { path: "/arts", component: Arts },
  { path: "/about", component: About },
  { path: "/detailn", component: DetailN },
  { path: "/detailts", component: DetailTS },
  { path: "/detailce", component: DetailCE },
  { path: "/detailsm", component: DetailSM },
  { path: "/musical", component: Musical },
  { path: "/theater", component: Theater },
  { path: "/water_festival", component: DetailWF },
  { path: "/pchum_ben", component: DetailBB },
  { path: "/khmer_new_year", component: DetailKNY },
  { path: "/admin-login", name: "admin-login", component: AdminLogin },
  {
    path: "/admin-dashboard",
    name: "admin-dashboard",
    component: AdminDashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: "", // This works fine as the default route
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "historical-site", // Change this to a relative path
        name: "historical-site",
        component: HistoricalSiteAdmin,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*", // Catch-all route for undefined paths
    name: "404",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!AuthService.isAuthenticated()) {
      // If not authenticated, show error and redirect to login
      $toast.error("Token Expired or Invalid Token!", {
        position: "top-right",
      });
      AuthService.logout();
      next("/admin-login");
    } else {
      // Proceed to the protected route
      next();
    }
  }
  // If the user is authenticated and trying to access the login page
  else if (to.path === "/admin-login" && AuthService.isAuthenticated()) {
    console.log("Already authenticated, redirecting to the current route.");

    // Redirect to the user's current route or dashboard
    next("/admin-dashboard");
  } else {
    // Allow navigation for public routes
    next();
  }
});

export default router;
