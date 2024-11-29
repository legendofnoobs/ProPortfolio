import { useState } from "react";
import Besmellah from "../components/Besmellah";
import SelectedWork from "../components/SelectedWork";
import OtherWork from "../components/OtherWork";

const Work = () => {
	// State to manage the current section
	const [selectedSection, setSelectedSection] = useState("Selected Work");

	return (
		<section className="w-full flex flex-col items-start py-10 px-80 gap-y-10 max-[1400px]:px-60 max-[1200px]:px-48 max-[1024px]:px-36 max-[900px]:px-20 max-[430px]:px-0 max-[636px]:px-7">
			<Besmellah />

			{/* Navigation */}
			<div className="flex gap-x-4 text-md bg-white/10 backdrop-blur-xl rounded-full p-1">
				<button
					className={`px-4 py-2 rounded-full transition-colors duration-300 hover:bg-white/20 ${
						selectedSection === "Selected Work"
							? "bg-white/10 text-white"
							: ""
					}`}
					onClick={() => setSelectedSection("Selected Work")}
				>
					Selected Work
				</button>
				<button
					className={`px-4 py-2 rounded-full transition-colors duration-300 hover:bg-white/20 ${
						selectedSection === "Other Work"
							? "bg-white/10 text-white"
							: ""
					}`}
					onClick={() => setSelectedSection("Other Work")}
				>
					Other Work
				</button>
			</div>

			{/* Conditional Rendering */}
			{selectedSection === "Selected Work" ? <SelectedWork /> : <OtherWork />}
		</section>
	);
};

export default Work;
