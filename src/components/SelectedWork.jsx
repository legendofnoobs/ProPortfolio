import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data";

const SelectedWork = () => {
	return (
		<>
			<h1 className="text-4xl">⬇️ <span style={{textShadow:"0px 0px 10px white"}}>Selected Work</span></h1>
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
					/>
				))}
			</div>
		</>
	)
}

export default SelectedWork