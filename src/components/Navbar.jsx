import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
	const location = useLocation(); // Get the current URL path
	const [activePath, setActivePath] = useState("/");

	// Update the active path when the location changes
	useEffect(() => {
		setActivePath(location.pathname);
	}, [location]);

	return (
		<nav className="bg-transparent flex justify-between items-center p-7 max-[1400px]:bg-black/30 max-[1400px]:backdrop-blur-2xl">
			<div className="w-80">
				<h1 className="text-2xl max-[430px]:text-lg">Ahmed Rashed</h1>
				<p className="text-white/50 max-[430px]:text-sm">Software Engineer</p>
			</div>
			<ul className="flex justify-between gap-3 bg-white/10 backdrop-blur-xl rounded-full p-1">
				<li
					className={`px-5 py-2 rounded-full text-md transition-colors duration-300 hover:bg-white/20 w-[82px] ${activePath === "/" ? "bg-white/10 text-white" : ""
						}`}
				>
					<Link to="/">Work</Link>
				</li>
				<li
					className={`px-5 py-2 rounded-full text-md transition-colors duration-300 hover:bg-white/20 w-[82px] flex justify-center ${activePath === "/info" ? "bg-white/10 text-white" : ""
						}`}
				>
					<Link to="/info">Info</Link>
				</li>
			</ul>
			<ul className="flex justify-between gap-5 text-md max-[768px]:hidden">
				<li className="p-1 rounded-md hover:bg-white/10 px-2 transition-colors duration-300">
					<a target="_blank" href="mailto:ahmedalirashed203@gmail.com" aria-label="Mail">Mail</a>
				</li>
				<li className="p-1 rounded-md hover:bg-white/10 px-2 transition-colors duration-300">
					<a target="_blank" href="https://www.linkedin.com/in/ahmed-rashed-573940288/" aria-label="LinkedIn">LinkedIn</a>
				</li>
				<li className="p-1 px-2 rounded-md hover:bg-white/10 transition-colors duration-300">
					<a target="_blank" href="https://github.com/legendofnoobs" aria-label="GitHub">GitHub</a>
				</li>
				<li className="bg-white text-black p-1 rounded-md font-semibold px-2 transition-colors duration-300 hover:bg-gray-200">
					<a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vRXb2_UZhZKpHpKVr3a-ZBqd8Z9wHggiFpYa-t2ocr9okXId8dxwtJ_Wpaff2k9W_9NWVHWX8wve-c6/pub" aria-label="Resume">Resume</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
