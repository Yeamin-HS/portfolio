import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';

const RotatingText = () => {
  const ref = useRef();
  const [isRotating, setIsRotating] = useState(true);

  // Spacebar to toggle spinning
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        setIsRotating((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Full 360 rotation
  useFrame(({ clock }) => {
    if (ref.current && isRotating) {
      ref.current.rotation.y += 0.01; // ✅ continuous spin
      ref.current.rotation.x = 0.1;   // ✅ slight static tilt
    }
  });

  return (
    <Center position={[0.3, 0, 0]}>
      <Text3D
        ref={ref}
        font="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json"
        size={1}
        height={0.3}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.05}
        bevelSize={0.05}
        bevelOffset={0}
        bevelSegments={5}
        castShadow
        receiveShadow
        position={[4,0,0]}
      >
        Yeamin Hossain Shihab
        <meshStandardMaterial color="#3b82f6" />
      </Text3D>
    </Center>
  );
};

export default RotatingText;
