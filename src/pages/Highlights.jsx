import { useParams } from "react-router-dom";
import { projectsData } from "../data";
import { useEffect } from "react";

const Highlights = () => {

	useEffect(() => {
		const scrollToTop = () => {
			window.scrollTo({ top: 0 });
		};
		scrollToTop();
	},[])


	const { id } = useParams();
	const project = projectsData.find((proj) => proj.id === id); // Find the project

	if (!project) {
		return <div className="text-center text-xl text-red-500">Project not found.</div>;
	}

	return (
		<section className="w-full flex flex-col items-start py-10 px-80 gap-y-10 max-[1400px]:px-60 max-[1200px]:px-48 max-[1024px]:px-36 max-[900px]:px-20 max-[430px]:px-0 max-[636px]:px-7">
			<h1 className="text-4xl font-bold">{project.title}</h1>
			<p className="text-xl max-w-4xl">{project.description}</p>

			<ul className="flex flex-wrap gap-3">
							{project.usedTech.map((tech, index) => (
								<li key={index} className="px-3 py-1 w-fit bg-white/10 rounded-full max-[540px]:text-sm">{tech}</li>
							))}
						</ul>

			{/* Gallery Section */}
			<div className="w-full flex flex-col gap-y-10">
				{project.gallery.map((image, index) => (
					<div key={index} className="relative border-2 border-white/20 rounded-xl bg-gradient-to-r from-slate-800 via-slate-400 to-slate-800 hover:shadow-2xl hover:scale-[1.02] transition ease-linear p-2">
						<img
							src={image}
							alt={`${project.title} screenshot ${index + 1}`}
							className="shadow-lg rounded-lg"
						/>
					</div>
				))}
			</div>

			{/* Highlights Section */}
			<ul className="flex gap-5 max-[1200px]:flex-row max-[1200px]:gap-x-5 flex-wrap max-[540px]:flex-row">
				<li>
					<a className="text-xl px-3 py-1 bg-green-700/30 border border-green-500 backdrop-blur-lg rounded-lg max-[540px]:text-base" target="_blank" rel="noopener noreferrer" href={project.live}>
						Live Demo 🔗
					</a>
				</li>
				<li>
					<a className="text-xl px-3 py-1 bg-yellow-500/30 border border-yellow-500 backdrop-blur-lg rounded-lg max-[540px]:text-base" target="_blank" rel="noopener noreferrer" href={project.gitHUB}>
						Repository 📁
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Highlights;
