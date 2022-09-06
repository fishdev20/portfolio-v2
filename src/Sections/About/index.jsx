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
			<div >
				<Grid container className={styles.container}>
						<Grid item xs={12} md={6} className={styles.left}>
							<AnimationSection>
								<p className={`${styles.desc}`}>
									Lorem Ipsum is simply dummy text of the printing and typesetting
									industry. Lorem Ipsum has been the industry's standard dummy text
									ever since the 1500s, when an unknown printer took a galley of type
									and scrambled it to make a type specimen book.
								</p>
								<p className={`${styles.desc}`}>
									Lorem Ipsum is simply dummy text of the printing and typesetting
									industry. Lorem Ipsum has been the industry's standard dummy text
									ever since the 1500s, when an unknown printer took a galley of type
									and scrambled it to make a type specimen book.
								</p>
								<p className={`${styles.desc}`}>Here are a few technologies I’ve been working with recently:</p>
								<ul className={styles.skills_list}>
									{constant.recenTechnologies.map(item => {
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
			</div>
			
			
		</section>
	);
}

export default About;
