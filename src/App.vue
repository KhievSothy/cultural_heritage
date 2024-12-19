<template>
  <div>
    <HeaderSection v-if="!hideHeaderAndFooter" />
    <router-view></router-view>
    <FooterSection v-if="!hideHeaderAndFooter" />
  </div>
</template>

<script>
import FooterSection from "./components/FooterSection.vue";
import HeaderSection from "./components/HeaderSection.vue";

export default {
  components: {
    HeaderSection,
    FooterSection,
  },
  computed: {
    hideHeaderAndFooter() {
      const routesToHide = ["admin-login", "admin-dashboard"];
      // Check both parent route and child route
      return (
        routesToHide.includes(this.$route.name) ||
        this.$route.matched.some((record) => routesToHide.includes(record.name))
      );
    },
  },
};
</script>
