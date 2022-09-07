import { useState } from 'react';
import "./App.scss";
import ContactLeft from './Components/ContactBars/ContactLeft';
import ContactRight from './Components/ContactBars/ContactRight';
import Footer from './Components/Footer/index';
import Navbar from "./Components/Navbar";
import About from './Sections/About/index';
import Contact from './Sections/Contact/index';
import Experience from './Sections/Experience/index';
import Home from './Sections/Home/index';
import Work from './Sections/Work/index';

function App() {
	const [blur,setBlur] = useState(false)
	
	return (
		<main className="main">
			<Navbar blur={blur} setBlur={setBlur} />
			<div className={blur ? 'app_section_container' : 'app_section_container blur'}>
				<Home />
				<About />
				<Experience />
				{/* <Skills /> */}
				<Work />
				<Contact /> 
			</div>
			{/* <ContactBar /> */}
			<ContactLeft />
			<ContactRight />
			<Footer />
		</main>
	);
}

export default App;
