import { useParams } from "react-router-dom";
import { OtherProjectsData, projectsData } from "../data";
OtherProjectsData
import { useEffect } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Highlights = () => {

	useEffect(() => {
		const scrollToTop = () => {
			window.scrollTo({ top: 0 });
		};
		scrollToTop();
	}, [])


	const { id } = useParams();
	const project = projectsData.find((proj) => proj.id === id) || OtherProjectsData.find((proj) => proj.id === id); // Find the project

	if (!project) {
		return <div className="text-center text-xl text-red-500">Project not found.</div>;
	}

	return (
		<section className="w-full max-w-5xl flex flex-col items-start py-10 gap-y-10 m-auto">
			<h1 className="text-4xl font-bold">{project.title}</h1>
			{project.features &&
				<div>
					<h1 className="text-3xl mb-3">Features:</h1>
					<ul className="flex flex-wrap gap-3">
						{project.features?.map((tech, index) => (
							<li key={index} className="px-3 py-1 w-fit bg-white/10 rounded-full max-[540px]:text-sm">{tech}</li>
						))}
					</ul>
				</div>
			}

			{/* Gallery Section */}
			<div className="w-full flex flex-col gap-y-10">
				{project.gallery.map((image, index) => (
					<div key={index} className="relative border-2 border-white/20 rounded-xl bg-gradient-to-r from-slate-800 via-slate-400 to-slate-800 hover:shadow-[0px_0px_50px_10px_rgb(66,135,245,0.1)] hover:scale-[1.02] transition ease-linear p-2">
						<img
							src={image}
							alt={`${project.title} screenshot ${index + 1}`}
							className="shadow-lg rounded-lg aspect-video"
							width={1100}
							height={600}
						/>
					</div>
				))}
			</div>

			<div>
				<h1 className="text-3xl mb-3">Tech Stack:</h1>
				<ul className="flex flex-wrap gap-3">
					{project.usedTech.map((tech, index) => (
						<li key={index} className="px-3 py-1 w-fit bg-white/10 rounded-full max-[540px]:text-sm">{tech}</li>
					))}
				</ul>
			</div>

			<p className="text-xl max-w-5xl">{project.description}</p>

			{/* Highlights Section */}
			<ul className="flex gap-5 flex-wrap">
				<li>
					<a className="text-xl p-2 bg-green-700/30 border border-green-500 rounded-lg" target="_blank" rel="noopener noreferrer" href={project.live}>
						🔗
					</a>
				</li>
				<li>
					<a className="text-xl p-2 bg-yellow-500/30 border border-yellow-500 rounded-lg" target="_blank" rel="noopener noreferrer" href={project.gitHUB}>
						<FontAwesomeIcon icon={faGithub} className=" size-6" />
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Highlights;
