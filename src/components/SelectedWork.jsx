import { motion } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data";

const SelectedWork = () => {
	return (
		<>
			<motion.h1 className="text-4xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "tween", duration: 1, delay: 1.5 }}>⬇️ <span style={{ textShadow: "0px 0px 10px white" }}>Selected Work</span></motion.h1>
			<div className="flex flex-col items-center gap-y-10 w-full">
				{projectsData.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						usedTech={project.usedTech}
						live={project.live}
						gitHUB={project.gitHUB}
						imgURL={project.imgURL}
						id={project.id}
					/>
				))}
			</div>
		</>
	)
}

export default SelectedWork