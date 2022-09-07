import gsap from "gsap";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

function Navbar({blur,setBlur}) {
	const [active, setActive] = useState(false)
	const activeStyle = active ? `${styles.active}` : ''

	useEffect(() => {
		if(active) {
			setBlur(false)
		} else {
			setBlur(true)
		}
	},[active])

	let tl = gsap.timeline({
		delay: 0.5	})

	useEffect(() => {
		gsap.to('#root_nav', { 
			opacity: 1,
		})
		gsap.to('#_about', {
			'clipPath': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
			opacity: 1,
			y: 0, 
			duration: 0.6,
			ease: "power3.easeOut"
		})
		gsap.to('#_experience', {
			'clipPath': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
			opacity: 1,
			y: 0, 
			duration: 0.6,
			ease: "power3.easeOut",
			delay: 0.25
		})
		gsap.to('#_work', {
			'clipPath': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
			opacity: 1,
			y: 0, 
			duration: 0.6,
			ease: "power3.easeOut",
			delay: 0.75
		})
		gsap.to('#_contact', {
			'clipPath': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
			opacity: 1,
			y: 0, 
			duration: 0.6,
			ease: "power3.easeOut",
			delay: 1
		})
		gsap.to('#resume_btn', {
			'clipPath': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
			opacity: 1,
			y: 0, 
			duration: 0.6,
			ease: "power3.easeOut",
			delay: 1.25
		})
	},[tl])
	return (
		<div className={styles.root} id='root_nav'>
			<div className={styles.nav_container}>
				<div className={styles.nav_left}>
					<a href="#home"><img src="./images/logo.png" alt="logo" style={{width: '40px'}}/></a>
				</div>
				<div className={styles.nav_right}>
					<a href="#about" id="_about" className={styles.nav_link}>
						<span>01.</span>About
					</a>
					<a href="#experience" id="_experience" className={styles.nav_link}>
						<span>02.</span>Experience
					</a>
					<a href="#work" id="_work" className={styles.nav_link}>
						<span>04.</span>Work
					</a>
					<a href="#contact" id="_contact" className={styles.nav_link}>
						<span>05.</span>Contact
					</a>
					<button id="resume_btn" className={styles.nav_resume_btn}>Resume</button>
				</div>
				<div className={styles.hamburger}>
					<Hamburger 
						toggled={active} 
						toggle={setActive} 
					/>
				</div>
				
			</div>
			<div className={`${styles.nav_mobile} ${activeStyle}`}>
				<div className={styles.menu_mobile}>
					<nav>
						<a href="#about" className={styles.nav_link} onClick={() => {setActive(false)}}>
							<span>01.</span>About
						</a>
						<a href="#experience" className={styles.nav_link} onClick={() => {setActive(false)}}>
							<span>02.</span>Experience
						</a>
						<a href="#work" className={styles.nav_link} onClick={() => {setActive(false)}}>
							<span>03.</span>Work
						</a>
						<a href="#contact" className={styles.nav_link} onClick={() => {setActive(false)}}>
							<span>04.</span>Contact
						</a>
						<button className={styles.nav_resume_btn}>Resume</button>		
					</nav>
				</div>
			</div>  
	  </div>
	);
}

export default Navbar;
