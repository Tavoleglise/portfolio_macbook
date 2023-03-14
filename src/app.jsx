import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import LoadingScreen from "./components/LoadingScreen";
import { Suspense, useState, useEffect } from "react";

export default function App() {
  const [start, setStart] = useState(false);
  return (
    <>
      <LoadingScreen started={start} onStart={() => setStart(true)} />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4],
        }}
        style={{ zIndex: 0 }}
      >
        <Experience started={start} />
      </Canvas>
    </>
  );
}
