import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cubo central (Azul)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, 0);
scene.add(cube);

// Cubo izquierdo (Verde)
const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.set(-2, 0, 0);
scene.add(cube2);

// Cubo derecho (Rojo)
const geometry3 = new THREE.BoxGeometry(1, 1, 1);
const material3 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cube3 = new THREE.Mesh(geometry3, material3);
cube3.position.set(2, 0, 0);
scene.add(cube3);

// Agregar luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Ajustar renderizador si cambia el tamaño de la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Función de animación con rotación a distintas velocidades
function animate() {
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.03;

    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;

    cube3.rotation.x += 0.06;
    cube3.rotation.y += 0.06;

    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);