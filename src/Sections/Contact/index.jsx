import Lottie from "react-lottie";
import hand from "../../animation/hand.json";
import Heading from "../../Components/Heading";
import AnimationSection from './../../Components/Customs/AnimationSection';
import styles from "./styles.module.scss";

function Contact() {
	const defaultOptions = {
		loop: true,
		autoplay: true, 
		animationData: hand,
		rendererSettings: {
		  preserveAspectRatio: 'xMidYMid slice'
		}
	};
	return (
		<section id="contact">
			<AnimationSection className={styles.contact_section} >
				<div className={styles.heading_1}>
					<Heading index="04" heading="What's Next?" />
				</div>
				<h1 className={styles.heading_2}>Get In Touch</h1>
				<p className={styles.desc}>
					Feel free to get in touch with me. I am always open to discussing new
					projects, creative ideas or opportunities to be part of your visions.
				</p>
				<a href="mailto:minhnguyen.dev20@gmail.com">
					<button className={styles.btn}>
						<p>Say Hello!</p>
						<Lottie 
							options={defaultOptions}
							height={20}
							width={20}
						/>
					</button>
				</a>
			</AnimationSection>
		</section>
	);
}

export default Contact;
