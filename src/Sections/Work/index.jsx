import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import useWindowDimensions from "../../common/index.js";
import AnimationSection from "../../Components/Customs/AnimationSection";
import constant from "../../constant.json";
import Heading from "./../../Components/Heading";
import styles from "./styles.module.scss";

function Work() {
	const { width } = useWindowDimensions();
	return (
		<section id="work">
			<Heading index="04" heading="Some Things I’ve Built" />
			{width > 780 ? 
			<div className={styles.container}>
				{constant.projects.map((project, index) =>
					index % 2 === 0 ? (
						<AnimationSection>
							<div className={styles.project}>
								<div className={styles.left}>
									<a href={project.link} target="__blank">
										<img
											src={project.image}
											className={styles.img}
											alt="project_img"
										/>
									</a>
								</div>
								<div className={styles.right}>
									<a href={project.link} className={styles.heading}>
										{project.title}
									</a>
									<p className={styles.desc}>{project.desc}</p>
									<div className={styles.skill_container}>
										{project.skills.map((skill) => (
											<p>{skill}</p>
										))}
									</div>
									<div>
										<a href="/" className={styles.link}>
											<GitHubIcon />
										</a>
										<a href="/" className={styles.link}>
											<OpenInNewIcon />
										</a>
									</div>
								</div>
							</div>
						</AnimationSection>
					) : (
						<AnimationSection>
							<div className={styles.project}>
								<div className={styles.left}>
									<a href={project.link} className={styles.heading}>
										{project.title}
									</a>
									<p className={styles.desc}>{project.desc}</p>
									<div className={styles.skill_container}>
										{project.skills.map((skill) => (
											<p>{skill}</p>
										))}
									</div>
									<div>
										<a href="/" className={styles.link}>
											<GitHubIcon />
										</a>
										<a href="/" className={styles.link}>
											<OpenInNewIcon />
										</a>
									</div>
								</div>
								<div className={styles.right}>
									<a href={project.link} target="__blank">
										<img
											src={project.image}
											className={styles.img}
											alt="project_img"
										/>
									</a>
								</div>
							</div>
						</AnimationSection>
						
					)
				)}
			</div> :
			<div className={styles.mobile_container}>
				{constant.projects.map((project, index) => {
					return (
						<AnimationSection>
							<div className={styles.mobile_project}>
								<img
									style={{width: '100%'}}
									src={project.image}
									className={styles.mobile_img}
									alt="project_img"
								/>
									
								<div className={styles.mobile_info}>
									<div style={{padding: 30}}>
										<a href={project.link} className={styles.mobile_heading}>
											{project.title}
										</a>
										<p className={styles.mobile_desc}>{project.desc}</p>
										<div className={styles.mobile_skills}>
											{project.skills.map((skill) => (
												<p>{skill}</p>
											))}
										</div>
										<div>
											<a href="/" className={styles.link}>
												<GitHubIcon />
											</a>
											<a href="/" className={styles.link}>
												<OpenInNewIcon />
											</a>
										</div>
									</div>
									
								</div>
							</div>
						</AnimationSection>
					)
				})}

			</div>
			}
		</section>
	);
}

export default Work;
