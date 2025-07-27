// ✅ src/components/IconOrbit.jsx
import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Plane, Html } from '@react-three/drei';
import * as THREE from 'three';

const IconOrbit = ({ name, textureURL, position, size = 1, orbitSpeed = 0.01, selfRotateSpeed = 0.01, link }) => {
  const planeRef = useRef();
  const groupRef = useRef();
  const texture = useLoader(THREE.TextureLoader, textureURL);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (link) window.open(link, '_blank');
  };

  useFrame(() => {
    if (planeRef.current) planeRef.current.rotation.y += selfRotateSpeed;
    if (groupRef.current) groupRef.current.rotation.y += orbitSpeed;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Plane
        args={[size, size]}
        ref={planeRef}
        position={position}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial map={texture} transparent />
        {hovered && (
          <Html distanceFactor={10} position={[0, 1.2, 0]} style={{ pointerEvents: 'none' }}>
            <div className="px-2 py-1 bg-black text-white text-xs rounded shadow-lg">
              Go to this link
            </div>
          </Html>
        )}
      </Plane>
    </group>
  );
};

export default IconOrbit;
