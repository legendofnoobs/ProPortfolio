
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

/* eslint-disable react/prop-types */


const ProjectCard = (props) => {

	return (
		<motion.div className="h-fit w-[500px] p-2 rounded-3xl border-2 border-white/20 hover:shadow-[0px_0px_550px_10px_rgb(66,135,245,0.1)] transition-shadow duration-300 ease bg-gradient-to-r from-slate-800 via-slate-400 to-slate-800 group max-[1075px]:w-full" initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "tween", duration: 0.5 }} viewport={{ once: true, amount: 0.3 }}>
			<div className="max-w-full h-fit p-6 bg-zinc-900 rounded-2xl flex flex-col items-start justify-start relative overflow-hidden gap-1 max-[450px]:p-3 max-[768px]:bg-gradient-to-b max-[768px]:from-red-600/50 max-[768px]:via-zinc-900 max-[768px]:to-blue-600/50">
				<div className={`w-full h-full absolute bg-transparent transition-all ease-linear duration-300 rounded-full -top-72 z-0 ${props.hover}  max-[540px]:hidden`}></div>
				<div className="flex flex-col justify-between items-start gap-5 w-full z-20 max-[1200px]:flex-col max-[1200px]:gap-y-5">
					<div className="flex flex-row justify-between items-center w-full">
						<h1 className="text-3xl z-10 text-nowrap">{props.title}</h1>
						{/* <p className="text-xl z-10 text-wrap max-[540px]:text-base ">{props.description}</p> */}
						{/* <ul className="flex flex-row gap-5 max-[1200px]:flex-row max-[1200px]:gap-x-5 flex-wrap max-[540px]:flex-row justify-end max-[1655px]:hidden">
							<li>
								<a className="text-lg p-2 bg-green-700/40 border border-transparent transition-all hover:border-green-500 backdrop-blur-lg rounded-lg max-[540px]:text-base" target="_blank" rel="noopener noreferrer" href={props.live}>
									🔗
								</a>
							</li>
							<li>
								<a className="text-lg p-2 bg-yellow-500/40 border border-transparent transition-all hover:border-yellow-500 backdrop-blur-lg rounded-lg max-[540px]:text-base" target="_blank" rel="noopener noreferrer" href={props.gitHUB}>
									<FontAwesomeIcon icon={faGithub} className=" size-6 translate-y-1" />
								</a>
							</li>
							{props.gallery &&
								<li>
									<Link
										className="text-lg p-2 bg-blue-500/40 border border-transparent transition-all hover:border-blue-500 backdrop-blur-lg rounded-lg max-[540px]:text-base"
										to={`work/highlights/${props.id}`}
									>
										Highlights ✨
									</Link>
								</li>
							}
						</ul> */}
					</div>
					<div className="w-full text-nowrap flex flex-col gap-5 mb-5">
						<ul className="flex flex-wrap gap-3">
							{props.usedTech.map((tech, index) => (
								<li key={index} className="px-3 py-1 w-fit bg-white/10 rounded-full max-[540px]:text-sm">{tech}</li>
							))}
						</ul>
						<ul className="flex flex-row gap-3 flex-wrap justify-start
						
						items-center w-fit h-auto">
							<li className="w-fit h-auto">
								<a className="text-lg p-2 bg-green-700/40 border border-transparent transition-all hover:border-green-500 backdrop-blur-lg rounded-lg max-[540px]:text-base" target="_blank" rel="noopener noreferrer" href={props.live}>
									<FontAwesomeIcon icon={faLink} className="size-6 translate-y-1"/>
								</a>
							</li>
							<li className="w-fit h-auto">
								<a className="text-lg p-2 bg-yellow-500/40 border border-transparent transition-all hover:border-yellow-500 backdrop-blur-lg rounded-lg max-[540px]:text-base" target="_blank" rel="noopener noreferrer" href={props.gitHUB}>
									<FontAwesomeIcon icon={faGithub} className=" size-6 translate-y-1" />
								</a>
							</li>
							{props.gallery &&
								<li>
									<Link
										className="text-lg p-2 bg-blue-500/40 border border-transparent transition-all hover:border-blue-500 backdrop-blur-lg rounded-lg max-[540px]:text-base"
										to={`work/highlights/${props.id}`}
									>
										Highlights ✨
									</Link>
								</li>
							}
						</ul>
					</div>
				</div>
				<div className="rounded-xl z-20 relative">
					<img src={props.imgURL} alt={props.title} className="rounded-xl w-full h-auto relative top-16 group-hover:top-0 transition-all duration-300 max-[768px]:top-0 aspect-video" loading="lazy"
						width={16}
						height={9} />
				</div>
				{/* <div className="w-96 h-96 absolute bg-blue-700/80 blur-[100px] rounded-full -bottom-52 -left-10 z-0"></div> */}
			</div>
		</motion.div>
	);
};

export default ProjectCard;
