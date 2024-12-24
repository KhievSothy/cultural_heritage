<template>
  <!-- Add this in your App.vue or index.html -->
  <div
    id="global-loader"
    style="
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      z-index: 100000;
    "
  >
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<style>
/* Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fade-in {
  animation: fadeIn 1s forwards; /* Match duration with JavaScript */
}

.fade-out {
  animation: fadeOut 1s forwards;
}
</style>
