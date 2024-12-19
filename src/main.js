import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routes/index.js";
// import pinia from '@/store/index.js'
import i18n from "@/i18m/index.js";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
//import "vue-toast-notification/dist/theme-default.css";

const app = createApp(App);
app.use(router);
// app.use(pinia)
app.use(i18n);
app.use(ToastPlugin, {
  // One of the options
  position: "top",
  duration: 2000,
});
app.mount("#app");
