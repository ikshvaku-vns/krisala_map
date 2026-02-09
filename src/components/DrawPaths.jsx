import React, { useEffect, useRef, useState } from "react";
import DrawLine from "./DrawLine";

export default function DrawPaths({ children }) {
  const ref = useRef();

  const [pathAttributes, setPathAttributes] = useState([]);

  useEffect(() => {
    if (ref.current) {
      let paths = [];
      Array.from(ref.current.children).forEach((child) => {
        // check if is path element
        if (child.tagName === "path") {
          const attributes = {};
          Array.from(child.attributes).forEach((attr) => {
            attributes[attr.name] = attr.value;
          });
          paths.push(attributes);
        }
      });
      setPathAttributes(paths);
    }
  }, [ref]);

  return (
    <>
      <g ref={ref} className="hidden">
        {children}
      </g>
      {pathAttributes.map((attributes) => (
        <DrawLine>
          <path {...attributes} />
        </DrawLine>
      ))}
    </>
  );
}
