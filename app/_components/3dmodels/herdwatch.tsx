"use client"
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function HerdwatchModel(props: any) {
  const { nodes, materials } = useGLTF("/models/herdwatch-model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.HerdWatch3D as THREE.Mesh).geometry}
        material={materials["switch"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.HerdWatch3D001 as THREE.Mesh).geometry}
        material={materials.Casing}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.HerdWatch3D002 as THREE.Mesh).geometry}
        material={materials.Casing}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.HerdWatch3D003 as THREE.Mesh).geometry}
        material={materials.light}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/herdwatch-model.glb");
