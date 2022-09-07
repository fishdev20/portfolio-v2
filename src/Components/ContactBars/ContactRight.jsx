import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import styles from "./styles.module.scss";

export default function ContactRight() {
    let section = useRef(null)

	useEffect(() => {
		gsap.to(section.current, {delay: 3,duration: 1, autoAlpha: 1, opacity: 1, y: -20});
	},[])
  return (
    <div className={`${styles.contact_bar} ${styles.right}`} ref={section}>
				<a href="mailto:minhnguyen.dev20@gmail.com" className={styles.email}>
					minhnguyen.dev20@gmail.com
				</a>
				<div className={styles.line}></div>
			</div>
  )
}
