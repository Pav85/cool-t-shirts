import { proxy } from "valtio";

const state = prox({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png", // check that later
  fullDecal: "./threejs.png",
});

export default state;
