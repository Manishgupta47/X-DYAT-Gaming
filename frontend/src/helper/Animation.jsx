import React from "react";
import { motion } from "framer-motion";

const Animation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // pehle hidden
      whileInView={{ opacity: 1, y: 0 }} // jab view me aaye to visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} 
      // once:true = ek hi baar chalega, amount=0.2 => 20% visible hote hi trigger
    >
      {children}
    </motion.div>
  );
};

export default Animation;
