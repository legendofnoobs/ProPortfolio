
import { technologies } from '../../data/index.js'; // Adjust the path if needed
import { motion } from 'motion/react';

const SkillsSection = () => {
	return (
		<div className="w-full rounded-3xl p-2 h-fit bg-white/10 border-2 border-white/20 hover:shadow-2xl hover:shadow-blue-600/30 transition ease relative overflow-hidden">
			<div className="w-96 h-96 absolute bg-green-400/20 blur-3xl shadow-2xl shadow-green-500 rounded-full -top-52 -right-10 z-0"></div>
			<div className='flex flex-col justify-center items-center gap-y-10 bg-zinc-900 p-8 rounded-2xl z-10 max-[540px]:p-3'>
				<h1 className="text-7xl" style={{ textShadow: "0px 0px 10px white" }}>Skills</h1>
				<div className="flex flex-col justify-center items-center">
					<div className="flex flex-wrap justify-center items-center gap-14 p-1">
						{technologies.map((tech, index) => (
							<motion.div key={index} className="rounded-xl z-10" initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }} // Delay each card
							viewport={{ once: true }}>
								<img src={tech.imgURL} alt={tech.name} className="rounded-xl w-24 max-[540px]:w-14 max-[540px]:rounded-md" />
							</motion.div>
						))}
					</div>
				</div>
			</div>
			<div className="w-96 h-96 absolute bg-yellow-500/20 blur-3xl shadow-2xl shadow-yellow-700 rounded-full -bottom-52 -left-10 z-0"></div>
		</div>
	);
}

export default SkillsSection;
