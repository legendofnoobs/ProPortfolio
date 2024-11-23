import Besmellah from "../components/Besmellah";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data";

const Work = () => {
	return (
		<section className="w-full flex flex-col items-center py-10 px-80 gap-y-10 max-[1400px]:px-60 max-[1200px]:px-48 max-[1024px]:px-36 max-[900px]:px-20 max-[430px]:px-0 max-[636px]:px-7">
			<Besmellah />
			
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
		</section>
	);
};

export default Work;
