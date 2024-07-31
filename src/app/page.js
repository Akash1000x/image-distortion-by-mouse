"use client";
import * as React from "react";
import Scene from "@/components/Scene";
import Projects from "@/components/Projects";
import Lenis from "lenis";
export default function Home() {
  const [activeProject, setActiveProject] = React.useState(null);
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <div className="h-[30vh]"></div>
      <Projects setActiveProject={setActiveProject} />
      <Scene activeProject={activeProject} />
      <div className="h-[50vh]"></div>
    </main>
  );
}
