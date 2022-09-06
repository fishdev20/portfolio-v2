import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Grid } from "@mui/material";
import React from 'react';
import Heading from "../../Components/Heading";
import constant from "./../../constant.json";
import styles from "./styles.module.scss";

export default function Skills() {
	const frontendSkill = constant.skills.frontEnd
	const backendSkill = constant.skills.backEnd
	const language = constant.skills.language
	const uiFramework = constant.skills.uiFramework

  return (
    <section id="skills">
			<Heading index="03" heading="My skills" />
			<Grid container rowGap={2} columnGap={2} className={styles.skills_container}>
				<Grid item md={4} xs={12} className={styles.skill}>
					<div className={styles.skill_heading}>Front-end</div>
					<ul>
						{frontendSkill.map((skill,index) => {
							return (
								<li key={index}><PlayArrowIcon /> {skill}</li>
							)
						})}
					</ul>
				</Grid>
				<Grid item md={4} xs={12} className={styles.skill}>
					<div className={styles.skill_heading}>Back-end</div>
					<ul>
						{backendSkill.map((skill,index) => {
							return (
								<li key={index}><PlayArrowIcon /> {skill}</li>
							)
						})}
					</ul>
				</Grid>
				<Grid item md={4} xs={12} className={styles.skill}>
					<div className={styles.skill_heading}>UI Framework</div>
					<ul>
						{uiFramework.map((skill,index) => {
							return (
								<li key={index}><PlayArrowIcon /> {skill}</li>
							)
						})}
					</ul>
				</Grid>
			</Grid>
		</section>
  )
}
