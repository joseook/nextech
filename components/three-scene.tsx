"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { motion } from "framer-motion";

export function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.background.convertSRGBToLinear();

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mountRef.current.appendChild(renderer.domElement);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      40,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);
    
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0x4169e1, 2);
    pointLight.position.set(-5, 2, -5);
    scene.add(pointLight);
    
    // Create a phone-like shape
    const phoneGroup = new THREE.Group();
    
    // Phone body
    const phoneGeometry = new THREE.BoxGeometry(1.5, 3, 0.1);
    const phoneMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x111111,
      metalness: 0.8,
      roughness: 0.2,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1,
    });
    const phoneBody = new THREE.Mesh(phoneGeometry, phoneMaterial);
    phoneGroup.add(phoneBody);
    
    // Phone screen
    const screenGeometry = new THREE.BoxGeometry(1.4, 2.8, 0.02);
    const screenMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1f1f1f,
      metalness: 0.1,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissive: 0x1a1a1a,
    });
    const phoneScreen = new THREE.Mesh(screenGeometry, screenMaterial);
    phoneScreen.position.z = 0.06;
    phoneGroup.add(phoneScreen);
    
    // Add phone to scene
    scene.add(phoneGroup);
    
    // Particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 300;
    
    const posArray = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 10;
      posArray[i + 1] = (Math.random() - 0.5) * 10;
      posArray[i + 2] = (Math.random() - 0.5) * 10;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: 0x35a5ff,
      transparent: true,
      opacity: 0.8,
    });
    
    const particleMesh = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleMesh);
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate particle system slowly
      particleMesh.rotation.x += 0.0005;
      particleMesh.rotation.y += 0.0005;
      
      // Update controls
      controls.update();
      
      // Render
      renderer.render(scene, camera);
    };
    
    animate();
    setIsLoaded(true);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      particleGeometry.dispose();
      particleMaterial.dispose();
      phoneGeometry.dispose();
      phoneMaterial.dispose();
      screenGeometry.dispose();
      screenMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="specs" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">Experience Innovation in 3D</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our cutting-edge technology brings you an immersive experience like never before. Interactive 3D models allow you to explore products from every angle.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">1</div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Aerospace-Grade Materials</h3>
                  <p className="mt-1 text-muted-foreground">Crafted from the same aluminum alloy used in spacecraft for durability without weight.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">2</div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Quantum Display Technology</h3>
                  <p className="mt-1 text-muted-foreground">Our proprietary display delivers unmatched color accuracy with 120Hz refresh rate.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">3</div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Neural Processing Unit</h3>
                  <p className="mt-1 text-muted-foreground">Advanced AI chip that learns from your usage patterns to optimize performance.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div 
              ref={mountRef} 
              className="aspect-square w-full max-w-md mx-auto rounded-xl overflow-hidden border border-border shadow-xl"
              style={{ 
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}