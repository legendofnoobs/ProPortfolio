import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
	const location = useLocation(); // Get the current URL path
	const [activePath, setActivePath] = useState("/");

	// Update the active path when the location changes
	useEffect(() => {
		setActivePath(location.pathname);
	}, [location]);

	const scrollToTop = () => {
		window.scrollTo({ top: 0 });
	};

	return (
		<nav className="bg-transparent flex justify-between items-center p-7 max-[1400px]:bg-black/30 max-[1400px]:backdrop-blur-2xl">
			<div className="w-96 max-[360px]:hidden text-nowrap">
				<Link to={`/`}>
					<h1 className="text-2xl max-[430px]:text-lg">Ahmed Rashed</h1>
				</Link>
				<p className="text-white/50 max-[430px]:text-sm">Software Engineer</p>
			</div>
			<ul className="flex justify-between gap-3 bg-white/10 backdrop-blur-xl rounded-full p-1">
				<li>
					<Link className={`px-5 py-2 rounded-full text-md transition-colors duration-300 hover:bg-white/20 w-[82px] flex justify-center ${activePath === "/" ? "bg-white/10 text-white" : ""
						}`} to="/" onClick={scrollToTop}>Work</Link>
				</li>
				<li>
					<Link className={`px-5 py-2 rounded-full text-md transition-colors duration-300 hover:bg-white/20 w-[82px] flex justify-center ${activePath === "/info" ? "bg-white/10 text-white" : ""
						}`} to="/info" onClick={scrollToTop}>Info</Link>
				</li>
			</ul>
			<ul className="flex justify-between gap-2 text-md max-[1100px]:hidden">
				<li className="px-5 py-2 rounded-full hover:bg-white/10 transition-colors duration-300">
					<a target="_blank" href="mailto:ahmedalirashed203@gmail.com" aria-label="Mail">Mail</a>
				</li>
				<li className="px-5 py-2 rounded-full hover:bg-white/10 transition-colors duration-300">
					<a target="_blank" href="https://www.linkedin.com/in/ahmed-rashed-573940288/" aria-label="LinkedIn">LinkedIn</a>
				</li>
				<li className="px-5 py-2 rounded-full hover:bg-white/10 transition-colors duration-300">
					<a target="_blank" href="https://github.com/legendofnoobs" aria-label="GitHub">GitHub</a>
				</li>
				<li className="px-5 py-2 bg-white/10 text-white  rounded-full font-semibold transition-colors duration-300 hover:bg-white/20">
					<a target="_blank" href="https://drive.google.com/file/d/1BBU8BkyQ3j618yX8IIONTVcoyFKWtOWB/view?usp=sharing" aria-label="Resume">Resume</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
