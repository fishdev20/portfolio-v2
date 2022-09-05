import { useState } from 'react';
import "./App.css";
import ContactBar from "./Components/ContactBar";
import Footer from './Components/Footer/index';
import Navbar from "./Components/Navbar";
import About from './Sections/About/index';
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
				{/* <Skills/> */}
				<Work />
				{/* <Contact />  */}
			</div>
			<ContactBar />
			<Footer />
		</main>
	);
}

export default App;
