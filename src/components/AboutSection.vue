<template>
  <main class="container" style="margin-top: 100px">
    <h3 class="text-center">{{ $t("about") }}</h3>
    <hr />
    <div
      id="about_container"
      class="d-flex gap-5 mt-4"
      style="justify-content: space-between"
    >
      <div class="cities-town">
        <div id="map" style="width: 550px">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3994720.5313153905!2d99.96630780713132!3d12.105698693757775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310787bfd4dc3743%3A0xe4b7bfe089f41253!2sCambodia!5e0!3m2!1sen!2skh!4v1732732916259!5m2!1sen!2skh"
            width="100%"
            height="600px"
            frameborder="0"
            style="border: 0; border-radius: 23px"
            allowfullscreen="false"
          ></iframe>
        </div>
      </div>

      <div class="about_desc">
        <p>
          {{ $t("about_us_p1") }}
        </p>
        <br />
        <p>
          {{ $t("about_us_p2") }}
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container{
  margin-bottom: -30px;
}
p {
  color: black;
  text-indent: 50px;
  text-align: justify;
}

/* Media Query for smaller screens (less than 992px) */
@media (max-width: 1200px) {
  #map {
    width: 350px !important;
  }
}

@media (max-width: 992px) {
  #about_container {
    flex-direction: column-reverse;
  }
  #map {
    width: 100% !important;
  }
}
</style>
