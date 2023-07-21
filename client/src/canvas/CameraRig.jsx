import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "../store";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snapshot = useSnapshot(state);

  //   set model rotation smoothly

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
