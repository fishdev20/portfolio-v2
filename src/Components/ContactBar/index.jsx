import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import styles from "./styles.module.css";

function ContactBar() {
	let section = useRef(null)

	useEffect(() => {
		gsap.to(section.current, {delay: 3,duration: 1, autoAlpha: 1, opacity: 1, y: -20});
	},[])
	return (
		<div className={styles.contact_bar_wrapper} ref={section}>
			<div className={styles.contact_bar}>
				<a href="/" target="_blank" className={styles.icon} >
					<LinkedInIcon  />
				</a>
				<a href="/" target="_blank" className={styles.icon} >
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
			<div className={styles.contact_bar}>
				<a href="mailto:minhnguyen.dev20@gmail.com" className={styles.email}>
					minhnguyen.dev20@gmail.com
				</a>
				<div className={styles.line}></div>
			</div>
		</div>
	);
}

export default ContactBar;
