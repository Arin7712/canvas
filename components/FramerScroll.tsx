'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const images = ["/t1.jpeg", "/t2.jpeg", "/t3.jpeg"];

const ScrollRotateChange = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]); // Rotate from 0 to 360 degrees
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      const index = Math.min(images.length - 1, Math.floor(value * images.length));
      setCurrentImage(index);
    });
  }, [scrollYProgress]);

  return (
    <div className="h-[200vh] flex items-center justify-center">
      <motion.img
        src={images[currentImage]}
        alt="Rotating Changing Image"
        className="w-40 h-40"
        style={{ rotate }}
      />
    </div>
  );
};

export default ScrollRotateChange;
