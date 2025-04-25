import { useState } from "react";
import OtherProjectCard from "../components/OtherProjectCard";
import { OtherProjectsData } from "../data";

const OtherWork = () => {
	const [hoveredId, setHoveredId] = useState(null);

	return (
		<>
			<h1 className="text-4xl">⬇️ <span style={{ textShadow: "0px 0px 10px white" }}>Other Work</span></h1>
			<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 w-full">
				{OtherProjectsData.map((project, index) => ( // Add index here
					<div
						key={project.id}
						className={`transition-all duration-300 ${
							hoveredId !== null && hoveredId !== project.id ? "blur-sm" : "opacity-100"
						}`}
						onMouseEnter={() => setHoveredId(project.id)}
						onMouseLeave={() => setHoveredId(null)}
					>
						<OtherProjectCard {...project} index={index} /> {/* Pass index as a prop */}
					</div>
				))}
			</div>
		</>
	);
};

export default OtherWork;
