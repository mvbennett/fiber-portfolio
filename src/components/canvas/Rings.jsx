import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Rings() {
  const ringsRef = useRef([]);

  useFrame((state) => {
    for (let i = 0; i < ringsRef.current.length; i++) {
      let mesh = ringsRef.current[i];
      let z = (i - 7) * 3.5;
      mesh.position.set(0, 0, -z)
    }
  })

  return (
    <>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => {
        <mesh
          castShadow
          receiveShadow
          position={[0, 0, 0]}
          key={i}
          ref={(el) => (ringsRef.current[i] = el)}
        >
          <torusGeometry args={[3.35, 0.05, 16, 100]} />
          <meshStandardMaterial emissive={[4, 0.1, 0.4]} color={[0, 0, 0]} />
        </mesh>
      })}
    </>
  )
}
