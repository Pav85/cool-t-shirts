import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      position={[0, 0, 0.14]}
    >
      <RandomizedLight amount={4} />
    </AccumulativeShadows>
  );
};

export default Backdrop;
