import * as React from "react";

export default function useDimension() {
  const [dimension, setDimension] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  React.useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return dimension;
}
