import { Html, useProgress } from "@react-three/drei";
import { div } from "framer-motion/client";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span>{progress.toFixed(0)}%</span>
    </Html>
    );
};

export default CanvasLoader;
