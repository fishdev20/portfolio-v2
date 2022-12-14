import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from './styles.module.scss';

function Footer() {
    return (
        <footer className={styles.footer_container} >
            <div className={styles.links}>
                <a href="https://www.linkedin.com/in/minh-nguyen20/" target="_blank" className={styles.icon} rel="noreferrer" >
					<LinkedInIcon  />
				</a>
				<a href="https://github.com/fishdev20" target="_blank" className={styles.icon} rel="noreferrer" >
					<GitHubIcon  />
				</a>
				<a href="/" target="_blank" className={styles.icon} >
					<InstagramIcon  />
				</a>
				<a href="/" target="_blank" className={styles.icon} >
					<TwitterIcon  />
				</a>
            </div>
            <h1 className={styles.text}>Inspired by Brittany Chiang</h1>
            <h1 className={styles.text} >Built by Minh Nguyen</h1>
        </footer>
    )
};

export default Footer;