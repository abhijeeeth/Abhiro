"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tilt({ children, className = "" }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    // Calculate rotation angles (max 8 degrees for elegant look)
    const factor = 8;
    const rY = (x / (width / 2)) * factor;
    const rX = -(y / (height / 2)) * factor;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      style={{ transformStyle: "preserve-3d" }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
