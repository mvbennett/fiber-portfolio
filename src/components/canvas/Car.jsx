import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Car() {
  const gltf = useLoader(
    GLTFLoader,
    "models/car/scene.gltf"
  )

  useEffect(() => {
    gltf.scene.position.set(0, -1.17, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf])
  return <primitive object={gltf.scene} />;
}
