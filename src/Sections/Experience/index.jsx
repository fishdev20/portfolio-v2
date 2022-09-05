import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";
import AnimationSection from "../../Components/Customs/AnimationSection";
import Heading from "./../../Components/Heading";
import constant from "./../../constant.json";
import styles from "./styles.module.scss";

function Experience() {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<section id="experience">
			<Heading index="02" heading="Where I’ve Worked" />
			<AnimationSection>
				<div className={styles.container}>
					<div className={styles.left}>
						{constant.experiences.map((experience, index) => (
							<div
								className={
									index === currentIndex
										? `${styles.tab} ${styles.active_tab}`
										: `${styles.tab}`
								}
								onClick={() => setCurrentIndex(index)}
							>
								{experience.company}
							</div>
						))}
					</div>
					<div className={styles.right}>
						<h1 className={styles.title}>
							{constant.experiences[currentIndex].title}{" "}
							<a
								href={constant.experiences[currentIndex].link}
								target="_blank"
								rel="noreferrer"
							>
								@ {constant.experiences[currentIndex].company}
							</a>
						</h1>
						<p className={styles.duration}>
							{constant.experiences[currentIndex].duration}
						</p>
						{constant.experiences[currentIndex].desc.map((point) => (
							<p className={styles.desc}>
								<PlayArrowIcon /> {point}
							</p>
						))}
					</div>
				</div>
			</AnimationSection>
				
		</section>
	);
}

export default Experience;
