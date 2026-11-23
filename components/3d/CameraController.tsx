
"use client";

import { OrbitControls } from "@react-three/drei";

export default function CameraController() {
  return (
    <OrbitControls
      makeDefault
      enablePan={false}
      enableDamping
      dampingFactor={0.08}
      minDistance={5}
      maxDistance={6.8}
      minPolarAngle={Math.PI / 2.8}
      maxPolarAngle={Math.PI / 2.05}
      minAzimuthAngle={-Math.PI / 5}
      maxAzimuthAngle={Math.PI / 5}
      target={[0, 0.45, 0]}
    />
  );
}
