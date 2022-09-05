import React from 'react';
import Heading from "../../Components/Heading";
import styles from "./styles.module.scss";

export default function Skills() {
  return (
    <section className={styles.skills_section} id="skills">
			<div className={styles.heading_1}>
				<Heading index="03" heading="What's Next" />
			</div>
			<h1 className={styles.heading_2}>Get In Touch</h1>
			<p className={styles.desc}>
				Feel free to get in touch with me. I am always open to discussing new
				projects, creative ideas or opportunities to be part of your visions.
			</p>
			<a href="mailto:johnsmith@gmail.com">
				<button className={styles.btn}>Say Hello</button>
			</a>
		</section>
  )
}
