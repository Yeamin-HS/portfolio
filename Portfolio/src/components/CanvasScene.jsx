import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import RotatingText from './RotatingText';
import { Sphere, MeshWobbleMaterial } from '@react-three/drei';

// Add below Sparkles and above OrbitControls:



const CanvasScene = () => {
  return (
    <div className="w-full h-[350px] md:h-[450px] mx-auto">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        {/* ✨ Sparkles background */}
        <Sparkles
          count={50}
          scale={[10, 5, 10]}
          size={2}
          speed={0.4}
          color="#ffffff"
        />

        <RotatingText />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Sphere position={[-2, 1, -1]} args={[0.4, 32, 32]}>
  <meshStandardMaterial emissive="#9333ea" emissiveIntensity={2} />
</Sphere>

<Sphere position={[2, -1, -1]} args={[0.3, 32, 32]}>
  <meshStandardMaterial emissive="#f43f5e" emissiveIntensity={2} />
</Sphere>
    </div>
  );
};

export default CanvasScene;
