/* eslint-disable react/prop-types */

const ProjectCard = (props) => {
	return (
		<div className="h-fit w-full p-2 bg-white/10 rounded-3xl border-2 border-white/20 hover:shadow-2xl hover:shadow-green-600/30 transition ease">
			<div className="max-w-full h-fit p-10 bg-zinc-900 rounded-2xl flex flex-col items-start justify-start relative overflow-hidden gap-y-5 max-[450px]:p-3">
				<div className="w-96 h-96 absolute bg-red-600/30 blur-3xl shadow-2xl shadow-red-500 rounded-full -top-52 -right-10 z-0"></div>
				<div className="flex justify-between items-start gap-x-20 w-full z-20 max-[1200px]:flex-col max-[1200px]:gap-y-5">
					<div className="flex flex-col gap-y-5">
						<h1 className="text-3xl z-10" style={{textShadow:"0px 0px 10px white"}}>{props.title}</h1>
						<p className="text-xl z-10 text-wrap max-[540px]:text-lg">{props.description}</p>
						<ul className="flex flex-wrap gap-3">
							{props.usedTech.map((tech, index) => (
								<li key={index} className="px-3 py-1 w-fit bg-white/10 rounded-full">{tech}</li>
							))}
						</ul>
					</div>
					<div className="w-fit text-nowrap">
						<ul className="flex flex-col gap-y-5 max-[1200px]:flex-row max-[1200px]:gap-x-5 flex-wrap">
							<li>
								<a className="text-xl px-3 py-1 bg-white/10 backdrop-blur-lg rounded-lg" target="_blank" rel="noopener noreferrer" href={props.live}>
									Live Demo 🔗
								</a>
							</li>
							<li>
								<a className="text-xl px-3 py-1 bg-white/10 backdrop-blur-lg rounded-lg" target="_blank" rel="noopener noreferrer" href={props.gitHUB}>
									Repository 📁
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="rounded-xl z-20">
					<img src={props.imgURL} alt={props.title} className="rounded-xl w-full h-auto" loading="lazy"/>
				</div>
				<div className="w-96 h-96 absolute bg-blue-700/30 blur-3xl shadow-2xl shadow-blue-700 rounded-full -bottom-52 -left-10 z-0"></div>
			</div>
		</div>
	);
};

export default ProjectCard;
