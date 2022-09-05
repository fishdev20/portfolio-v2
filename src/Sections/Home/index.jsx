import { Grid } from "@mui/material";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import computer from "../../animation/computer.json";
import styles from "./styles.module.scss";

function Home() {
	let app = useRef(null)
	const defaultOptions = {
		loop: true,
		autoplay: true, 
		animationData: computer,
		rendererSettings: {
		  preserveAspectRatio: 'xMidYMid slice'
		}
	};
	let tl = gsap.timeline({
		delay: 1.5	})

	useEffect(() => {
		gsap.to(app.current, {duration: 0.5, autoAlpha: 1, delay: 0});
		tl.to('#greet', {
			'clipPath': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
			opacity: 1,
			y: 0, 
			duration: 0.6,
			ease: "power3.easeOut"
		})
		tl.to(['#heading_1','#heading_2'], {
			'clipPath': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
			opacity: 1,
			y: 0, 
			duration:  0.6,
			ease: "power3.easeOut"
		})
		gsap.to('#lottie', {
			delay: 1.5,
			opacity: 1,
			y: 100, 
			duration: 2.5,
			// scale: 1.2,
			ease: "power3.easeOut"
		})
		tl.to('#desc', {
			'clipPath': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
			opacity: 1,
			y: 0, 
			duration:  0.6,
			ease: "power3.easeOut"
		})
		tl.to('#btn', {
			'clipPath': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
			opacity: 1,
			y: 0, 
			duration:  0.6,
			ease: "power3.easeOut"
		})
	},[tl])
	return (
		<section className={styles.home_section} id="home" ref={app}>
			<Grid container className={styles.container}>
				<Grid item xs={12} md={6}>
					<p id="greet" className={styles.greet}>Hi, my name is</p>
					<h1 id="heading_1" className={styles.heading_1}>Minh Nguyen.</h1>
					<h1 id="heading_2" className={styles.heading_2}>I build things for web.</h1>
					<p className={styles.desc} id="desc">
						I am a progressive junior Software developer with high-self
						motivation. A friendly Vietnamese based in Finland. Currently, I'm focused on building products at 
						<span>
							<a style={{color: '#fff'}} href="#" onClick={() => window.open('https://www.kassavirtanen.fi/en/')}> Kassavirtanen Oy, Finland.</a>
						</span>
					</p>
					<div id="btn" className={styles.btn_container}>
						<a href="#work">
							<button className={styles.btn}>Check out my work !</button>
						</a>
					</div>
					
				</Grid>
				<Grid item xs={12} md={6} className={styles.animationContainer}>
					<div id="lottie" className={styles.lottie}>
						<Lottie 
							options={defaultOptions}
							// height={500}
							// width={500}
						/>
					</div>
					
				</Grid>
			</Grid>
			
		</section>
	);
}

export default Home;
