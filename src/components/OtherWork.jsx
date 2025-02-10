// import OtherProjectCard from "../components/OtherProjectCard";
// import { OtherProjectsData } from "../data";

// const OtherWork = () => {
// 	return (
// 		<>
// 			<h1 className="text-4xl">⬇️ <span style={{ textShadow: "0px 0px 10px white" }}>Other Work</span></h1>
// 			<div className="flex flex-wrap items-center justify-center gap-5 w-full">
// 				{OtherProjectsData.map((project) => (
// 					<OtherProjectCard
// 						key={project.id}
// 						title={project.title}
// 						description={project.description}
// 						usedTech={project.usedTech}
// 						live={project.live}
// 						gitHUB={project.gitHUB}
// 						imgURL={project.imgURL}
// 						id={project.id}
// 						hover={project.hover}
// 						gallery={project.gallery}
// 					/>
// 				))}
// 			</div>
// 		</>
// 	)
// }

// export default OtherWork

import { useState } from "react";
import OtherProjectCard from "../components/OtherProjectCard";
import { OtherProjectsData } from "../data";

const OtherWork = () => {
	const [hoveredId, setHoveredId] = useState(null);

	return (
		<>
			<h1 className="text-4xl">⬇️ <span style={{ textShadow: "0px 0px 10px white" }}>Other Work</span></h1>
			<div className="flex flex-wrap items-center justify-center gap-5 w-full">
				{OtherProjectsData.map((project) => (
					<div
						key={project.id}
						className={`transition-all duration-300 ${
							hoveredId !== null && hoveredId !== project.id ? "blur-sm" : "opacity-100"
						}`}
						onMouseEnter={() => setHoveredId(project.id)}
						onMouseLeave={() => setHoveredId(null)}
					>
						<OtherProjectCard {...project} />
					</div>
				))}
			</div>
		</>
	);
};

export default OtherWork;
