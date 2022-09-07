import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Grid } from "@mui/material";
import AnimationSection from "../../Components/Customs/AnimationSection";
import Heading from "../../Components/Heading";
import constant from "./../../constant.json";
import styles from "./styles.module.scss";


function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
				<Grid container className={styles.container}>
						<Grid item xs={12} md={6} className={styles.left}>
							<AnimationSection>
								<p className={`${styles.desc}`}>
									My name is Minh Nguyen, born in Vietnam, moved to Finland
									for studying in 2019 and working as a software developer currently.
									My major was Information Technology at Centria University of Applied Sciences, Kokkola.
								</p>
								<p className={`${styles.desc}`}>
									In addition to my knowledge base, I actively seek out new technologies
									and stay up to date on industry trends and advancements. 
									This has allowed me to stay ahead of the curve and deliver exceptional work
									to all I have worked on a project basic. Until now, I have 1 year experience hands on
									working in Web development.
								</p>
								<p className={`${styles.desc}`}>Here are a few technologies I’ve been working with recently:</p>
								<ul className={styles.skills_list}>
									{constant.recenTechnologies.map(item => {
									return (
										<li item xs={6} className={styles.skills}><PlayArrowIcon />{item} </li>
									)})}
								</ul>
								<p className={`${styles.desc}`}>Beside, I also have some experience with these technologies:</p>
								<ul className={styles.skills_list}>
									{constant.otherTech.map(item => {
									return (
										<li item xs={6} className={styles.skills}><PlayArrowIcon />{item} </li>
									)})}
								</ul>		
							</AnimationSection>
							
						</Grid>
						<Grid item xs={12} md={6} className={styles.right}>
								<AnimationSection className={styles.image_container}>
									<img
										src="./images/profile.jpg"
										alt="profile"
										className={styles.profile_img}
									/>
									<div className={styles.img_border}></div>
								</AnimationSection>	
						</Grid>	
				</Grid>	
		</section>
	);
}

export default About;
