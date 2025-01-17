import { useState } from "react";
import Besmellah from "../components/Besmellah";
import SelectedWork from "../components/SelectedWork";
import OtherWork from "../components/OtherWork";
import { motion } from "motion/react";

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

	return (
		<section className="w-full max-w-[1743px] m-auto flex flex-col items-start pt-10 pb-44 px-64 gap-y-10 max-[1400px]:px-60 max-[1200px]:px-48 max-[1024px]:px-36 max-[900px]:px-20 max-[430px]:px-0 max-[636px]:px-7 fle ">
			<div className=" mb-20 m-auto flex flex-col justify-center items-center">
				<Besmellah />
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
					onClick={() => setSelectedSection("Selected Work")}
				>
					Selected Work
				</button>
				<button
					className={`px-4 py-2 rounded-full transition-colors duration-300 hover:bg-white/20 ${selectedSection === "Other Work"
						? "bg-white/10 text-white"
						: ""
						}`}
					onClick={() => setSelectedSection("Other Work")}
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
