<template>
  <div>
    <div class="info"><br><br><br>
      ✦ 3D Geometric Aura ✦ |
      <span style="color:#88ccff">Drag to rotate view</span>
    </div>
    <div id="loading">Loading 3D Model...</div>
    <div ref="canvasContainer"></div>
    <!-- Artifact Information Panel -->
    <div class="artifact-card">
      <div class="artifact-header">
        <h2>Head Sculpture</h2>
        <span class="artifact-id">INV-2026-001</span>
      </div>

      <div class="artifact-field">
        <label>Medium</label>
        <p>Sandstone</p>
      </div>

      <div class="artifact-field">
        <label>Period</label>
        <p>Angkor Period (12th Century)</p>
      </div>

      <div class="artifact-field">
        <label>Style</label>
        <p>Bayon Style</p>
      </div>

      <div class="artifact-field">
        <label>Provenance</label>
        <p>Siem Reap Province, Cambodia</p>
      </div>

      <div class="artifact-field">
        <label>Description</label>
        <p>
          Sandstone head sculpture exhibiting stylistic
          characteristics of the Bayon artistic tradition.
          The artifact demonstrates refined carving
          techniques and religious symbolism associated
          with the late Angkorian period.
        </p>
      </div>
    </div>
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
.viewer-container {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.artifact-card {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);

  width: 380px;
  max-height: 80vh;

  overflow-y: auto;

  padding: 24px;

  background: rgba(10, 15, 25, 0.85);
  backdrop-filter: blur(18px);

  border: 1px solid rgba(136, 204, 255, 0.2);
  border-radius: 18px;

  color: white;
  z-index: 15;

  box-shadow:
    0 10px 40px rgba(0,0,0,.4),
    0 0 30px rgba(68,136,255,.15);
}

.artifact-header {
  border-bottom: 1px solid rgba(255,255,255,.1);
  margin-bottom: 20px;
  padding-bottom: 15px;
}

.artifact-header h2 {
  margin: 0;
  color: #88ccff;
  font-size: 1.7rem;
}

.artifact-id {
  font-size: 0.8rem;
  opacity: .6;
}

.artifact-field {
  margin-bottom: 18px;
}

.artifact-field label {
  display: block;
  color: #88ccff;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.artifact-field p {
  margin: 0;
  line-height: 1.6;
  color: #d8d8d8;
}
.viewer-container {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.artifact-card {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);

  width: 380px;
  max-height: 80vh;

  overflow-y: auto;

  padding: 24px;

  background: rgba(10, 15, 25, 0.85);
  backdrop-filter: blur(18px);

  border: 1px solid rgba(136, 204, 255, 0.2);
  border-radius: 18px;

  color: white;
  z-index: 15;

  box-shadow:
    0 10px 40px rgba(0,0,0,.4),
    0 0 30px rgba(68,136,255,.15);
}

.artifact-header {
  border-bottom: 1px solid rgba(255,255,255,.1);
  margin-bottom: 20px;
  padding-bottom: 15px;
}

.artifact-header h2 {
  margin: 0;
  color: #88ccff;
  font-size: 1.7rem;
}

.artifact-id {
  font-size: 0.8rem;
  opacity: .6;
}

.artifact-field {
  margin-bottom: 18px;
}

.artifact-field label {
  display: block;
  color: #88ccff;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.artifact-field p {
  margin: 0;
  line-height: 1.6;
  color: #d8d8d8;
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