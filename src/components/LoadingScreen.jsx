import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import Logo from "../static/logo.jsx";

export default function LoadingScreen({ started, onStart }) {
  const { progress } = useProgress();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(`${progress}`);
    if (progress === 100) {
      setLoading(false);
      onStart();
    }
  }, [progress]);

  return (
    <>
      <div
        className={`loading_screen ${!loading ? "loadingScreen--started" : ""}`}
      >
        <Logo />
      </div>
    </>
  );
}
