import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import styles from "./styles.module.scss";


export default function ContactLeft() {
    let section = useRef(null)

	useEffect(() => {
		gsap.to(section.current, {delay: 3,duration: 1, autoAlpha: 1, opacity: 1, y: -20});
	},[])
  return (
    <div className={`${styles.contact_bar} ${styles.left}`} ref={section}>
				<a href="https://www.linkedin.com/in/minh-nguyen20/" target="_blank" className={styles.icon} rel="noreferrer" >
					<LinkedInIcon  />
				</a>
				<a href="https://github.com/fishdev20" target="_blank" className={styles.icon} rel="noreferrer" >
					<GitHubIcon  />
				</a>
				<a href="/" target="_blank" className={styles.icon} >
					<InstagramIcon  />
				</a>
				<a href="/" target="_blank" className={styles.icon} >
					<TwitterIcon  />
				</a>
				<div className={styles.line}></div>
			</div>
  )
}
