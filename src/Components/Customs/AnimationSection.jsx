import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import styles from "./animation.module.scss";

export default function AnimationSection({children}) {

    const boxVariant = {
		visible: { opacity: 1 , transition: { duration: 1,ease: "easeOut" },y: -50 },
		hidden: { opacity: 0 }
	  };
	  const control = useAnimation();
	  const [ref, inView] = useInView();

	  useEffect(() => {
		if (inView) {
		  control.start("visible");
		} else {
            control.start("hidden");
        }
	  }, [control, inView]);
  return (
    <motion.div
        style={{ y: 0 }}
        className={styles.box}
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
    >
        {children}
    </motion.div>
  )
}
