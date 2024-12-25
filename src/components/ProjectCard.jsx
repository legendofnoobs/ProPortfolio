
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */


const ProjectCard = (props) => {

	return (
		<div className="h-fit w-full p-2 rounded-3xl border-2 border-white/20 hover:shadow-[0px_0px_50px_20px_rgb(234,179,8,0.1)] transition ease bg-gradient-to-r from-slate-800 via-slate-400 to-slate-800">
			<div className="max-w-full h-fit p-6 bg-zinc-900 rounded-2xl flex flex-col items-start justify-start relative overflow-hidden gap-y-5 max-[450px]:p-3">
				<div className="w-96 h-96 absolute bg-red-600/80 blur-[200px] rounded-full -top-52 -right-10 z-0"></div>
				<div className="flex justify-between items-start gap-x-20 w-full z-20 max-[1200px]:flex-col max-[1200px]:gap-y-5">
					<div className="flex flex-col gap-y-5">
						<h1 className="text-3xl z-10">{props.title}</h1>
						{/* <p className="text-xl z-10 text-wrap max-[540px]:text-base ">{props.description}</p> */}
						<ul className="flex flex-wrap gap-3">
							{props.usedTech.map((tech, index) => (
								<li key={index} className="px-3 py-1 w-fit bg-white/10 rounded-full max-[540px]:text-sm">{tech}</li>
							))}
						</ul>
					</div>
					<div className="w-fit text-nowrap">
						<ul className="flex flex-col gap-y-5 max-[1200px]:flex-row max-[1200px]:gap-x-5 flex-wrap max-[540px]:flex-row">
							<li>
								<a className="text-xl px-3 py-1 bg-green-700/30 border border-green-500 backdrop-blur-lg rounded-lg max-[540px]:text-base" target="_blank" rel="noopener noreferrer" href={props.live}>
									Live Demo 🔗
								</a>
							</li>
							<li>
								<a className="text-xl px-3 py-1 bg-yellow-500/30 border border-yellow-500 backdrop-blur-lg rounded-lg max-[540px]:text-base" target="_blank" rel="noopener noreferrer" href={props.gitHUB}>
									Repository 📁
								</a>
							</li>
							<li>
								<Link
									className="text-xl px-3 py-1 bg-blue-500/30 border border-blue-500 backdrop-blur-lg rounded-lg max-[540px]:text-base"
									to={`work/highlights/${props.id}`}
								>
									Highlights ✨
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="rounded-xl z-20">
					<img src={props.imgURL} alt={props.title} className="rounded-xl w-full h-auto" loading="lazy"
						width={16}
						height={9} />
				</div>
				<div className="w-96 h-96 absolute bg-blue-700/80 blur-[200px] rounded-full -bottom-52 -left-10 z-0"></div>
			</div>
		</div>
	);
};

export default ProjectCard;
