import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles, Stars, Environment } from '@react-three/drei';
import RotatingText from './RotatingText';
import IconOrbit from './IconOrbit';

const data = [
  {
    name: 'GitHub',
    textureURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    position: [-5, 2, -6],
    size: 1,
    orbitSpeed: 0.005,
    selfRotateSpeed: 0.0,
    link: 'https://github.com/Yeamin-HS',
  },
  {
    name: 'LinkedIn',
    textureURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    position: [4, -1, -5],
    size: 1,
    orbitSpeed: 0.007,
    selfRotateSpeed: 0.0,
    link: 'https://linkedin.com/in/yeaminhs',
  },
  {
    name: 'Gmail',
    textureURL: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png',
    position: [0, 3, -7],
    size: 1,
    orbitSpeed: 0.006,
    selfRotateSpeed: 0.0,
    link: 'mailto:yeaminhs11@gmail.com',
    radius: 2.5, 
  },
  {
    name: 'Facebook',
    textureURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
    position: [-3, -2, -6],  
    size: 1,
    orbitSpeed: 0.008,
    selfRotateSpeed: 0.0,
    link: 'https://www.facebook.com/yeaminhossainshihab/',
  },
  {
    name: 'Instagram',
    textureURL: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
    position: [2, 1, -5],
    size: 1,
    orbitSpeed: 0.009,
    selfRotateSpeed: 0.0,
    link: 'https://www.instagram.com/yeaminion_hs?',
  }
];

const CanvasScene = () => {
  return (
    <div className="w-full h-[750px] md:h-[750px] mx-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        

        <Sparkles count={60} scale={[20, 10, 20]} size={2} speed={0.4} color="#ffffff" />

        {data.map((icon) => (
          <IconOrbit key={icon.name} {...icon} />
        ))}

        <RotatingText />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default CanvasScene;
