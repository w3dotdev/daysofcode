const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
const controls = new THREE.OrbitControls(camera, renderer.domElement);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// lights
const light = new THREE.AmbientLight("white", 0.4);
light.position.set(50, 50, 50);
const light2 = new THREE.PointLight("white", 1, 1000);
light2.position.set(-50, -50, -50);
const light3 = new THREE.PointLight("white", 1, 1000);
light2.position.set(50, -50, 50);

// geometry
const geometry = new THREE.SphereGeometry(0.7);
geometry.translate(1, 1, 1);

const geometry2 = new THREE.BoxGeometry(0.9, 0.9, 0.9);
geometry2.translate(2.5, 1.5, 1.5);

const geometry3 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
geometry3.translate(0.1, 0.2, 0);

// textures
const myTextureLoader = new THREE.TextureLoader();
let myTexture;

myTexture = myTextureLoader.load('../images/1.jpg');
const material = new THREE.MeshPhongMaterial({
  map: myTexture
});

myTexture = myTextureLoader.load('../images/2.jpg');
const material2 = new THREE.MeshPhongMaterial({
  map: myTexture
});

myTexture = myTextureLoader.load('../images/3.jpg');
const material3 = new THREE.MeshPhongMaterial({
  map: myTexture
});

// compose
const shape = new THREE.Mesh(geometry, material);
const shape2 = new THREE.Mesh(geometry2, material2);
const shape3 = new THREE.Mesh(geometry3, material3);

scene.add(shape, shape2, shape3);

camera.position.z = 5;
scene.add(light, light2, light3);

const animate = () => {
  requestAnimationFrame(animate)

  controls.update()

  shape.rotation.x += 0.0025;
  shape.rotation.y += 0.0025;

  shape2.rotation.x -= 0.005;
  shape2.rotation.y -= 0.005;

  shape3.rotation.x -= 0.01;
  shape3.rotation.y -= 0.01;

  renderer.render(scene, camera);
};
animate();
