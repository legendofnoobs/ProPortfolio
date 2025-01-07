
import { Link } from "react-router-dom";
import { motion } from "motion/react";

/* eslint-disable react/prop-types */


const ProjectCard = (props) => {

	return (
		<motion.div className="h-fit w-full p-2 rounded-3xl border-2 border-white/20 hover:shadow-[0px_0px_550px_100px_rgb(66,135,245,0.1)] transition-shadow duration-300 ease bg-gradient-to-r from-slate-800 via-slate-400 to-slate-800 group" initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "tween", duration: 0.5 }} viewport={{ once: true, amount: 0.3 }}>
			<div className="max-w-full h-fit p-6 bg-zinc-900 bg-gradient-to-tr from-blue-900 via-zinc-900 to-red-900 rounded-2xl flex flex-col items-start justify-start relative overflow-hidden gap-y-5 max-[450px]:p-3 max-[450px]:bg-gradient-to-t">
				{/* <div className={`w-96 h-96 absolute bg-red-600/50 blur-[100px] rounded-full -top-52 -right-10 z-0`}></div> */}
				<div className="flex flex-col justify-between items-start gap-5 w-full z-20 max-[1200px]:flex-col max-[1200px]:gap-y-5">
					<div className="flex flex-row justify-between items-center w-full">
						<h1 className="text-3xl z-10 text-nowrap">{props.title}</h1>
						{/* <p className="text-xl z-10 text-wrap max-[540px]:text-base ">{props.description}</p> */}
						<ul className="flex flex-row gap-5 max-[1200px]:flex-row max-[1200px]:gap-x-5 flex-wrap max-[540px]:flex-row justify-end max-[1500px]:hidden">
							<li>
								<a className="text-lg px-3 py-1 bg-green-700/40 border border-transparent transition-all hover:border-green-500 backdrop-blur-lg rounded-lg max-[540px]:text-base" target="_blank" rel="noopener noreferrer" href={props.live}>
									Live Demo 🔗
								</a>
							</li>
							<li>
								<a className="text-lg px-3 py-1 bg-yellow-500/40 border border-transparent transition-all hover:border-yellow-500 backdrop-blur-lg rounded-lg max-[540px]:text-base" target="_blank" rel="noopener noreferrer" href={props.gitHUB}>
									Repository 📁
								</a>
							</li>
							<li>
								<Link
									className="text-lg px-3 py-1 bg-blue-500/40 border border-transparent transition-all hover:border-blue-500 backdrop-blur-lg rounded-lg max-[540px]:text-base"
									to={`work/highlights/${props.id}`}
								>
									Highlights ✨
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full bg-violet-600 text-nowrap">
						<ul className="flex flex-wrap gap-3 mb-5">
							{props.usedTech.map((tech, index) => (
								<li key={index} className="px-3 py-1 w-fit bg-white/10 rounded-full max-[540px]:text-sm">{tech}</li>
							))}
						</ul>
						<ul className="flex flex-row gap-3 max-[1200px]:flex-row max-[1200px]:gap-5 flex-wrap max-[540px]:flex-row justify-center min-[1501px]:hidden max-[768px]:justify-start">
							<li>
								<a className="text-lg px-3 py-1 bg-green-700/40 border border-transparent transition-all hover:border-green-500 backdrop-blur-lg rounded-lg max-[540px]:text-base" target="_blank" rel="noopener noreferrer" href={props.live}>
									Live Demo 🔗
								</a>
							</li>
							<li>
								<a className="text-lg px-3 py-1 bg-yellow-500/40 border border-transparent transition-all hover:border-yellow-500 backdrop-blur-lg rounded-lg max-[540px]:text-base" target="_blank" rel="noopener noreferrer" href={props.gitHUB}>
									Repository 📁
								</a>
							</li>
							<li>
								<Link
									className="text-lg px-3 py-1 bg-blue-500/40 border border-transparent transition-all hover:border-blue-500 backdrop-blur-lg rounded-lg max-[540px]:text-base"
									to={`work/highlights/${props.id}`}
								>
									Highlights ✨
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="rounded-xl z-20 relative">
					<img src={props.imgURL} alt={props.title} className="rounded-xl w-full h-auto relative top-16 group-hover:top-0 transition-all duration-300 max-[768px]:top-0" loading="lazy"
						width={16}
						height={9} />
				</div>
				{/* <div className="w-96 h-96 absolute bg-blue-700/80 blur-[100px] rounded-full -bottom-52 -left-10 z-0"></div> */}
			</div>
		</motion.div>
	);
};

export default ProjectCard;
