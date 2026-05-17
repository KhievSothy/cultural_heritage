<template>
    <div class="M-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h4>3D of Returned Object</h4>
          <h2>Khmer Missing Artefacts</h2>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="info">
      ✦ 3D Geometric Aura ✦ |
      <span style="color:#88ccff">Drag to rotate view</span>
    </div>

    <div id="loading">Loading 3D Model...</div>

    <div ref="canvasContainer"></div>
  </div>
</template>

<script>
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  name: "AuraScene",

  mounted() {

    // ---------------- SCENE ----------------

    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0x050816);

    // ---------------- CAMERA ----------------

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.set(0, 1.5, 4);

    // ---------------- RENDERER ----------------

    const renderer = new THREE.WebGLRenderer({
      antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setPixelRatio(window.devicePixelRatio);

    this.$refs.canvasContainer.appendChild(
      renderer.domElement
    );

    // ---------------- CONTROLS ----------------

    const controls = new OrbitControls(
      camera,
      renderer.domElement
    );

    controls.enableDamping = true;

    controls.autoRotate = true;

    controls.autoRotateSpeed = 1;

    // ---------------- LIGHTS ----------------

    const ambientLight =
      new THREE.AmbientLight(0xffffff, 0.8);

    scene.add(ambientLight);

    const dirLight =
      new THREE.DirectionalLight(0xffffff, 2);

    dirLight.position.set(5, 5, 5);

    scene.add(dirLight);

    const blueLight =
      new THREE.PointLight(0x4488ff, 10, 20);

    blueLight.position.set(-2, 1, 2);

    scene.add(blueLight);

    // ---------------- FLOOR ----------------

    const floorGeometry =
      new THREE.CircleGeometry(5, 64);

    const floorMaterial =
      new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.8,
        metalness: 0.2
      });

    const floor = new THREE.Mesh(
      floorGeometry,
      floorMaterial
    );

    floor.rotation.x = -Math.PI / 2;

    floor.position.y = -3.2;

    scene.add(floor);

    // ---------------- LOAD MODEL ----------------

    const loader = new GLTFLoader();

    loader.load(
      "/models/headg.glb",

      (gltf) => {

        const model = gltf.scene;

        model.scale.set(2, 2, 2);

        scene.add(model);

        hideLoading();

        animate(model);
      },

      // progress

      (xhr) => {

        const loading =
          document.getElementById("loading");

        if (loading && xhr.total) {

          const percent =
            (xhr.loaded / xhr.total) * 100;

          loading.innerHTML =
            "Loading 3D Model... " +
            percent.toFixed(0) +
            "%";
        }
      },

      // error

      (error) => {

        console.error(error);

        const loading =
          document.getElementById("loading");

        if (loading) {

          loading.innerHTML =
            "Failed to load model";
        }
      }
    );

    // ---------------- ANIMATE ----------------

    function animate(model) {

      function render() {

        requestAnimationFrame(render);

        model.rotation.y += 0.003;

        controls.update();

        renderer.render(scene, camera);
      }

      render();
    }

    // ---------------- HIDE LOADING ----------------

    function hideLoading() {

      const loading =
        document.getElementById("loading");

      if (loading) {

        loading.style.opacity = "0";

        setTimeout(() => {

          loading.remove();

        }, 1000);
      }
    }

    // ---------------- RESIZE ----------------

    window.addEventListener(
      "resize",
      () => {

        camera.aspect =
          window.innerWidth /
          window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
          window.innerWidth,
          window.innerHeight
        );
      }
    );
  }
};
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
  background: #050816;
}

.info {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  color: white;
  font-family: sans-serif;
}

#loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 20;
  transition: opacity 1s;
}
</style>