import { ScrollControls, useGLTF, useTexture } from "@react-three/drei";
import React from "react";
import { Group } from "three/examples/jsm/libs/tween.module.js";
import * as THREE from "three";

const MacContainer = () => {
  let model = useGLTF("/mac.glb");
  let tex =useTexture("./red.jpg")
  let meshes = {};
     model.scene.traverse ((e) => {
 meshes [e.name] = e;
 });

 meshes.screen.rotation.x = THREE.MathUtils.degToRad (180);
 meshes.matte.material.map = tex;
 meshes.matte.material.emissiveIntensity = 0;
 meshes.matte.material.metalness = 0;
 meshes.matte.material.roughness = 1;

 let data useScroll();

 useFrame((state, delta) => {
 meshes.screen.rotation.x = THREE.MathUtils.degToRad (180 data.offset * 90);
 });

  if (meshes.screen) {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  }

  return (
      <group position={[0, -10, 20]}>
        <primitive object={model.scene} />
      </group>
  );
};

export default MacContainer;
