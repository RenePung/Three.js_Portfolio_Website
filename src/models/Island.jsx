/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nimzu (https://sketchfab.com/nimzuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';

import islandScene from '../assets/3d/island.glb';

const Island = ({ isRotating, setIsRotating, ...props }) => {
  const islandRef = useRef();

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastx = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches 
     ? e.touches[0].clientX 
     : e.clientX;

     lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
  e.stopPropagation(); // Prevents the event from propagating up the DOM hierarchy
  e.preventDefault(); // Prevents the default action associated with the event
  setIsRotating(false); // Sets the state variable isRotating to false

  const clientX = e.touches 
    ? e.touches[0].clientX // Retrieves the X-coordinate of the pointer, accounting for touch events
    : e.clientX;

  const delta = (clientX - lastX.current) / viewport.width; // Calculates the change in X-coordinate since the last pointer event

  islandRef.current.rotation.y += delta * 0.01 * Math.PI; // Updates the rotation of the island based on the calculated delta
  lastX.current = clientX; // Updates the lastX.current to the current X-coordinate for the next event
  rotationSpeed.current = delta * 0.01 * Math.PI; // Updates the rotationSpeed.current based on the calculated delta
  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating) handlePointerUp(e);
  }

  useEffect(() => {

  }, [])

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}

export default Island;
