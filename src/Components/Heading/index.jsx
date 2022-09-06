import styles from "./styles.module.scss";

function Heading({ index, heading }) {
	return (
		<div className={styles.container}>
			<p className={styles.index}>{index}.</p>
			<h1 className={styles.heading}>{heading}</h1>
			<div className={styles.line}></div>
		</div>
	);
}

export default Heading;
