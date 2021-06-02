import Intro from "./LandingPage/Intro";
import Card from "./LandingPage/Card";
import Section from "./LandingPage/Section";
import About from "./LandingPage/About";
import Header from "./Header";
import Footer from "./Footer";

export default function Main() {
	return (
		<>
			<title>HEY YOU.</title>
			<Header />
			<Intro />
			<Card />
			<Section />
			<About />
			<Footer />
		</>
	);
}
