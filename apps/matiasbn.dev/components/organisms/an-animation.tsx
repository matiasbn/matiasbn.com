import React from 'react';
import { motion } from 'framer-motion';

export const variants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    opacity: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
      //  ease: [0.48, 0.15, 0.25, 0.96]
    },
  },
};

export default function Animation({ children, ...restProps }) {
  return (
    <motion.div
      {...restProps}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
