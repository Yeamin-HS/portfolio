import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Center, Text3D, Environment } from "@react-three/drei";

// Text items and links
const sections = [
  { label: "Yeamin HS", link: "#" },
  { label: "About", link: "#about" },
  { label: "Projects", link: "#projects" },
  { label: "Contact", link: "#contact" },
];

const radius = 2.5; // Increased radius for spacing
const anglePerItem = (2 * Math.PI) / (sections.length ); // Bonus: Extra space between

const RotatingText = () => {
  const groupRef = useRef();
  const startX = useRef(null);
  const [targetRotation, setTargetRotation] = useState(0);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y +=
        (targetRotation - groupRef.current.rotation.y) * 0.1;
    }
  });

  // Drag start
  const handlePointerDown = (e) => {
    startX.current = e.clientX;
  };

  // Drag end
  const handlePointerUp = (e) => {
    if (startX.current === null) return;
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > 30) {
      const direction = delta < 0 ? 1 : -1;
      setTargetRotation((prev) => prev + direction * anglePerItem);
    }
    startX.current = null;
  };

  // Click scroll behavior
  const handleClick = (link) => {
    if (link && link !== "#") {
      const section = document.querySelector(link);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <group
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      position={[0, 0, 0]}
    >
      {sections.map((section, i) => {
        const angle = i * anglePerItem;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        // Bonus: Rotate slightly more inward
        const rotationY = angle ;

        // Highlight when near front (Y ≈ 0)
        const angleToFront = Math.abs((targetRotation % (2 * Math.PI)) - angle);
        const isFront = angleToFront < anglePerItem / 2;

        return (
          <group
            key={section.label}
            position={[x, 0, z]}
            rotation={[0, rotationY, 0]}
          >
            <Center>
              <Text3D
                font="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_bold.typeface.json"
                size={0.5}
                height={0.2}
                curveSegments={8}
                bevelEnabled
                bevelThickness={0.03}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={3}
                onClick={() => handleClick(section.link)}
              >
                {section.label}
                <meshPhysicalMaterial
                  color={isFront ? "#93c5fd" : "#60a5fa"} // Glow blue if front
                  metalness={0.75}
                  roughness={0.05}
                  clearcoat={1.5}
                  clearcoatRoughness={0}
                  transmission={0.3}
                  thickness={0.5}
                />
              </Text3D>
            </Center>
          </group>
        );
      })}

      {/* Soft lighting + reflections */}
      <Environment preset="city" />
    </group>
  );
};

export default RotatingText;
