import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export function Aurok1Model(props: any) {
  const { nodes, materials } = useGLTF("/models/aurok1.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Aurok1 as Mesh).geometry}
        material={materials["Material.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Aurok1001 as Mesh).geometry}
        material={materials.casing}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Aurok1002 as Mesh).geometry}
        material={materials.casing}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Aurok1003 as Mesh).geometry}
        material={materials.light}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Aurok1004 as Mesh).geometry}
        material={materials["switch"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/aurok1.glb");
