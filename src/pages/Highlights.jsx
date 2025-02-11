import { useParams, useNavigate } from "react-router-dom";
import { OtherProjectsData, projectsData } from "../data";
import { useEffect } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import HighlightsCard from "../components/HighlightsCard";

const Highlights = () => {
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);

	const { id } = useParams();
	const project = projectsData.find((proj) => proj.id === id) || OtherProjectsData.find((proj) => proj.id === id);

	if (!project) {
		return <div className="text-center text-xl text-red-500">Project not found.</div>;
	}

	return (
		<section className="w-full max-w-5xl flex flex-col items-start pb-28 gap-y-5 m-auto">
			{/* Back Button */}
			<div className="fixed top-10 left-7 z-30">
				<motion.button
					onClick={() => navigate(-1)}
					className="px-4 py-2 bg-white/10 backdrop-blur-2xl text-white rounded-full hover:bg-gray-600 mb-5 flex items-center justify-between "
					whileHover={{ width: '96px' }}
				>
					<span>←</span>
					<span>&nbsp;</span>
					<span>Back</span>
				</motion.button>
			</div>
			<h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">{project.title}</h1>

			<div>
				<h2 className="text-xl"><span>&#10038;</span> Overview:</h2>
				<p className="max-w-5xl">{project.description}</p>
			</div>

			<h1 className="text-xl"><span>&#10038;</span> Highlights:</h1>

			{
				project.featuresWithImages.map((feature, index) => (
					<HighlightsCard
						key={index}
						image={feature.image}
						description={feature?.description}
					/>
				))
			}


			{/* Tech Stack */}
			<div className="mb-3">
				<h1 className=" text-xl mb-3"><span>&#10038;</span> Tech Stack:</h1>
				<ul className="flex flex-wrap gap-3">
					{project.usedTech.map((tech, index) => (
						<li key={index} className="px-3 py-1 bg-white/10 rounded-full">{tech}</li>
					))}
				</ul>
			</div>


			{/* Links */}
			<ul className="flex gap-5 flex-wrap">
				<li>
					<a className="text-xl p-2 bg-green-700/30 border border-green-500 rounded-lg" target="_blank" rel="noopener noreferrer" href={project.live}>
						🔗 Live Demo
					</a>
				</li>
				<li>
					<a className="text-xl p-2 bg-yellow-500/30 border border-yellow-500 rounded-lg" target="_blank" rel="noopener noreferrer" href={project.gitHUB}>
						<FontAwesomeIcon icon={faGithub} className="size-6" />
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Highlights;
