import { useState, useEffect } from "react"; // Import useEffect
// import Besmellah from "../components/Besmellah";
import SelectedWork from "../components/SelectedWork";
import OtherWork from "../components/OtherWork";
import { motion } from "motion/react";
import BesmellahEdit from "../components/Besmellah copy";
import layersImage from "../assets/ProjectsAssets/Highlights/Layers/image0.webp"
import space from "../assets/ProjectsAssets/Highlights/space/space1.webp"

const floatAnimation = {
	y: [0, -20, 0], // Moves the element up and down
	transition: {
		duration: 2, // Duration of one loop
		repeat: Infinity, // Loop indefinitely
		ease: "easeInOut", // Smooth easing
	},
};

const Work = () => {
	// State to manage the current section
	const [selectedSection, setSelectedSection] = useState("Selected Work");

	// Load the selected section from localStorage when the component mounts
	useEffect(() => {
		const savedSection = localStorage.getItem("selectedSection");
		if (savedSection) {
			setSelectedSection(savedSection);
		}
	}, []);

	// Update localStorage whenever the selected section changes
	const handleSectionChange = (section) => {
		setSelectedSection(section);
		localStorage.setItem("selectedSection", section);
	};

	return (
		<section className="w-full max-w-5xl xl:max-w-4xl 2xl:max-w-5xl m-auto flex flex-col items-start pt-10 pb-44 gap-y-10">
			<div className="relative mb-20 m-auto flex flex-col justify-center items-center ">
				<motion.img
					src={layersImage} drag
					dragConstraints={{ top: -50, bottom: 500, left: -1050, right: 300 }}
					className="absolute -right-10 top-0 rounded-lg w-96 h-auto z-40 hidden xl:block" alt="lool"
					initial={{ opacity: 0, y: 400, x: 0, filter: "blur(10px)" }}
					animate={{ opacity: 1, y: 100, x: 200, filter: "blur(0px)" }}
					transition={{ type: "tween", duration: 1, delay: 0.8 }}
				/>
				<motion.img
					src={space} drag
					dragConstraints={{ top: -50, bottom: 500, left: -100, right: 1100 }}
					className="absolute -left-56 top-10 rounded-lg w-96 h-auto z-40 hidden xl:block" alt="lool"
					initial={{ opacity: 0, y: 400, x: 200, filter: "blur(10px)" }}
					animate={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
					transition={{ type: "tween", duration: 1, delay: 0.8 }}
				/>
				<motion.a href="mailto:ahmedalirashed203@gmail.com" className="relative w-fit h-fit mt-12 bg-green-600/30 py-2 px-4 border border-green-600 rounded-full flex gap-2 justify-center items-center overflow-hidden"
					initial={{ y: "10%", opacity: 0, filter: "blur(10px)" }}
					animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
					transition={{ type: "tween", duration: 1, delay: 0.5 }}
				>
					{/* Shimmer Effect */}
					<motion.div
						className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
						initial={{ x: "-100%" }}
						animate={{ x: "100%" }}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "linear",
						}}
					/>
					{/* Content */}
					<div className="w-2 h-2 rounded-full bg-green-500" />
					<div className="flex items-center justify-center text-white italic">
						let&apos;s connect
					</div>
				</motion.a>

				<BesmellahEdit />
				<motion.div animate={floatAnimation} className="w-fit h-fit bg-transparent border-[1px] rounded-full m-auto mt-16 p-2">
					<p className="text-5xl">↓</p>
				</motion.div>
			</div>

			{/* Navigation */}
			<motion.div className="flex gap-x-4 text-md bg-white/10 backdrop-blur-xl rounded-full p-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "tween", duration: 1, delay: 1 }}>
				<button
					className={`px-4 py-2 rounded-full transition-colors duration-300 hover:bg-white/20 ${selectedSection === "Selected Work"
						? "bg-white/10 text-white"
						: ""
						}`}
					onClick={() => handleSectionChange("Selected Work")}
				>
					Selected Work
				</button>
				<button
					className={`px-4 py-2 rounded-full transition-colors duration-300 hover:bg-white/20 ${selectedSection === "Other Work"
						? "bg-white/10 text-white"
						: ""
						}`}
					onClick={() => handleSectionChange("Other Work")}
				>
					Other Work
				</button>
			</motion.div>

			{/* Conditional Rendering */}
			{selectedSection === "Selected Work" ? <SelectedWork /> : <OtherWork />}
		</section>
	);
};

export default Work;