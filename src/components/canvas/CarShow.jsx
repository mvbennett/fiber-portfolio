import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Car from "./Car";
import Ground from "./Ground";
import Rings from "./Rings";

export default function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach={'background'} />

      <Car />
      <Rings />

      <spotLight
        color={[1, .25, .7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadowBias={-0.0001}
      />

      <spotLight
        color={[.14, .5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadowBias={-0.0001}
      />

      <Ground />
      {/* <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={'red'} />
      </mesh> */}
    </>
  )
}
