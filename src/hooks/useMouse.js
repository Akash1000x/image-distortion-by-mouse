import { useMotionValue } from "framer-motion";
import * as React from "react";
export default function useMouse() {
  // const [mouse, setMouse] = useState({x: 0, y: 0});

  // const mouseMove = (e) => {
  //   const { clientX, clientY } = e;
  //   setMouse({
  //       x: clientX,
  //       y: clientY
  //   })
  // }
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mouse;
}
