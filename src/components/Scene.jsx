import { Canvas } from "@react-three/fiber";
import Model from "./Model";

export default function Scene({ activeProject }) {
  return (
    <div className="fixed h-screen w-full top-0">
      <Canvas>
        <Model activeProject={activeProject} />
      </Canvas>
    </div>
  );
}
