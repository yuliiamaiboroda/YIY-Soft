'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.set(0, 0, 100);

      if (typeof window !== 'undefined') {
        const geometry = new THREE.BoxGeometry(2, 3, 4);
        const boxCount = window.innerWidth > 768 ? 500 : 250;

        for (let i = 0; i < boxCount; i++) {
          const material = new THREE.MeshBasicMaterial({ color: '#0016DC' });
          const shape = new THREE.Mesh(geometry, material);
          const px = Math.random() * 100 - 50,
            py = Math.random() * 100 - 50,
            pz = Math.random() * 100 - 50;
          const rx = Math.random() * Math.PI * 2,
            ry = Math.random() * Math.PI * 2,
            rz = Math.random() * Math.PI * 2;
          const sx = Math.random() * 0.5,
            sy = Math.random() * 0.5,
            sz = Math.random() * 0.5;
          shape.position.set(px, py, pz);
          shape.rotation.set(rx, ry, rz);
          shape.scale.set(sx, sy, sz);

          scene.add(shape);
        }

        renderer.render(scene, camera);

        const animSpeed = 0.001;
        const renderScene = () => {
          const x = camera.position.x;
          const z = camera.position.z;
          camera.position.x = x * Math.cos(animSpeed) - z * Math.sin(animSpeed);
          camera.position.z = z * Math.cos(animSpeed) + x * Math.sin(animSpeed);
          camera.lookAt(scene.position);
          renderer.render(scene, camera);
          requestAnimationFrame(renderScene);
        };

        renderScene();
      }
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return <div ref={containerRef} />;
}
