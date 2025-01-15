
import { technologies } from '../../data/index.js'; // Adjust the path if needed
import { motion } from 'motion/react';

const SkillsSection = () => {
	return (
		<div className="w-full rounded-3xl p-2 h-fit relative">
			{/* <div className="w-96 h-96 absolute bg-green-700/30 blur-[100px] rounded-full -top-52 -right-10 z-0"></div> */}
			<div className='flex flex-col justify-center items-center gap-y-10  p-8 rounded-2xl z-10 max-[540px]:p-3'>
				<h1 className="text-7xl" style={{ textShadow: "0px 0px 10px white" }}>Skills</h1>
				<div className="flex flex-col justify-center items-center">
					<div className="flex flex-wrap justify-center items-center gap-8 p-1">
						{technologies.map((tech, index) => (
							<motion.div key={index} className={`rounded-xl z-10 flex gap-5 items-center border-[1px] border-gray-800 p-2  bg-zinc-900 bg-gradient-to-r via-transparent ${tech.hover} transition-shadow duration-300 ease w-fit max-[745px]:w-72`} initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2 }} // Delay each card
								viewport={{ once: true }}>
								<div className={`p-2 ${tech.ImageBgColor} rounded-lg`}>
									<img src={tech.imgURL} alt={tech.name} className=" w-9 h-9 max-[540px]:rounded-md" />
								</div>
								<div className=' mr-10'>
									<p className='text-lg'>{tech.name}</p>
									<p className='text-sm text-gray-400'>{tech.decription}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
			{/* <div className="w-96 h-96 absolute bg-yellow-500/30 blur-[100px] rounded-full -bottom-52 -left-10 z-0"></div> */}
		</div>
	);
}

export default SkillsSection;
