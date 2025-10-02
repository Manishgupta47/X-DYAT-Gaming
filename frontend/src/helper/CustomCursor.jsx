import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const posX = useRef(0);
  const posY = useRef(0);

  useEffect(() => {
    const animate = () => {
      posX.current += (mouseX.current - posX.current) / 8;
      posY.current += (mouseY.current - posY.current) / 8;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${posX.current - 18}px, ${posY.current - 18}px, 0) scale(1)`;
        followerRef.current.style.opacity = "0.6";
      }
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX.current - 6}px, ${mouseY.current - 6}px, 0)`;
        cursorRef.current.style.backgroundColor = "#e6fe46";
        cursorRef.current.style.width = "12px";
        cursorRef.current.style.height = "12px";
      }
      requestAnimationFrame(animate);
    };

    animate();

    const mouseMoveHandler = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "2px solid #e6fe46",
          transition: "transform 0.15s ease-out, opacity 0.3s ease",
          zIndex: 9999,
          opacity: 0.6,
          mixBlendMode: "difference",
          willChange: "transform",
        }}
      />
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "#e6fe46",
          transition: "background-color 0.3s ease, width 0.3s ease, height 0.3s ease",
          zIndex: 99999,
          mixBlendMode: "difference",
          willChange: "transform",
        }}
      />
    </>
  );
};

export default CustomCursor;
