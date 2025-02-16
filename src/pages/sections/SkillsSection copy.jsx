
import { frontendTech } from '../../data/index.js'; // Adjust the path if needed
import { backendTech } from '../../data/index.js'; // Adjust the path if needed
import { designTech } from '../../data/index.js'; // Adjust the path if needed
import { cloudTech } from '../../data/index.js'; // Adjust the path if needed
import { devTools } from '../../data/index.js'; // Adjust the path if needed
import { progLang } from '../../data/index.js'; // Adjust the path if needed
import { motion } from 'motion/react';

const SkillsSection = () => {
	return (
		<div className="w-full rounded-3xl h-fit relative mt-10">
			<div className='flex flex-col justify-center items-center gap-y-10 rounded-2xl z-10'>
				<h1 className="text-5xl md:text-7xl" style={{ textShadow: "0px 0px 10px white" }}>Technology stack</h1>
				<div className="flex flex-col justify-center gap-6 items-center w-full">
					<div className='w-fit rounded-xl border text-white shadow overflow-hidden border-neutral-600 bg-neutral-900'>
						<div className='border-b border-neutral-600 py-4 px-6 w-full text-2xl'>Frontend Development</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-3 md:p-4 w-full max-w-5xl '>
							{frontendTech.map((tech, index) => (
								<motion.div key={index} className={`rounded-xl z-10 flex gap-5 items-center border-[1px] border-gray-800 p-2  bg-zinc-950 bg-gradient-to-r via-transparent ${tech.hover} transition-shadow duration-300 ease w-72 max-[745px]:w-72`} initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 }} // Delay each card
									viewport={{ once: true }}>
									<div className={`p-2 ${tech.ImageBgColor} rounded-lg aspect-square`}>
										<img src={tech.imgURL} alt={tech.name} className=" w-9 h-9 max-[540px]:rounded-md aspect-square" />
									</div>
									<div className=' mr-10'>
										<p className='text-lg'>{tech.name}</p>
										<p className='text-sm text-gray-400'>{tech.decription}</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
					<div className='w-fit rounded-xl border text-white shadow overflow-hidden border-neutral-600 bg-neutral-900'>
						<div className='border-b border-neutral-600 py-4 px-6 w-full text-2xl'>Backend Development</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-3 md:p-4 w-full max-w-5xl '>
							{backendTech.map((tech, index) => (
								<motion.div key={index} className={`rounded-xl z-10 flex gap-5 items-center border-[1px] border-gray-800 p-2  bg-zinc-950 bg-gradient-to-r via-transparent ${tech.hover} transition-shadow duration-300 ease w-72 max-[745px]:w-72`} initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 }} // Delay each card
									viewport={{ once: true }}>
									<div className={`p-2 ${tech.ImageBgColor} rounded-lg aspect-square`}>
										<img src={tech.imgURL} alt={tech.name} className=" w-9 h-9 max-[540px]:rounded-md aspect-square" />
									</div>
									<div className=' mr-10'>
										<p className='text-lg'>{tech.name}</p>
										<p className='text-sm text-gray-400'>{tech.decription}</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					<div className='w-fit rounded-xl border text-white shadow overflow-hidden border-neutral-600 bg-neutral-900'>
						<div className='border-b border-neutral-600 py-4 px-6 w-full text-2xl'>Cloud Tools</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-3 md:p-4 w-full max-w-5xl '>
							{cloudTech.map((tech, index) => (
								<motion.div key={index} className={`rounded-xl z-10 flex gap-5 items-center border-[1px] border-gray-800 p-2  bg-zinc-950 bg-gradient-to-r via-transparent ${tech.hover} transition-shadow duration-300 ease w-72 max-[745px]:w-72`} initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 }} // Delay each card
									viewport={{ once: true }}>
									<div className={`p-2 ${tech.ImageBgColor} rounded-lg aspect-square`}>
										<img src={tech.imgURL} alt={tech.name} className=" w-9 h-9 max-[540px]:rounded-md aspect-square" />
									</div>
									<div className=' mr-10'>
										<p className='text-lg'>{tech.name}</p>
										<p className='text-sm text-gray-400'>{tech.decription}</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					<div className='w-fit rounded-xl border text-white shadow overflow-hidden border-neutral-600 bg-neutral-900'>
						<div className='border-b border-neutral-600 py-4 px-6 w-full text-2xl'>Designing Tools</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-3 md:p-4 w-full max-w-5xl '>
							{designTech.map((tech, index) => (
								<motion.div key={index} className={`rounded-xl z-10 flex gap-5 items-center border-[1px] border-gray-800 p-2  bg-zinc-950 bg-gradient-to-r via-transparent ${tech.hover} transition-shadow duration-300 ease w-72 max-[745px]:w-72`} initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 }} // Delay each card
									viewport={{ once: true }}>
									<div className={`p-2 ${tech.ImageBgColor} rounded-lg aspect-square`}>
										<img src={tech.imgURL} alt={tech.name} className=" w-9 h-9 max-[540px]:rounded-md aspect-square" />
									</div>
									<div className=' mr-10'>
										<p className='text-lg'>{tech.name}</p>
										<p className='text-sm text-gray-400'>{tech.decription}</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					<div className='w-fit rounded-xl border text-white shadow overflow-hidden border-neutral-600 bg-neutral-900'>
						<div className='border-b border-neutral-600 py-4 px-6 w-full text-2xl'>Development Tools</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-3 md:p-4 w-full max-w-5xl '>
							{devTools.map((tech, index) => (
								<motion.div key={index} className={`rounded-xl z-10 flex gap-5 items-center border-[1px] border-gray-800 p-2  bg-zinc-950 bg-gradient-to-r via-transparent ${tech.hover} transition-shadow duration-300 ease w-72 max-[745px]:w-72`} initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 }} // Delay each card
									viewport={{ once: true }}>
									<div className={`p-2 ${tech.ImageBgColor} rounded-lg aspect-square`}>
										<img src={tech.imgURL} alt={tech.name} className=" w-9 h-9 max-[540px]:rounded-md aspect-square" />
									</div>
									<div className=' mr-10'>
										<p className='text-lg'>{tech.name}</p>
										<p className='text-sm text-gray-400'>{tech.decription}</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
					<div className='w-fit rounded-xl border text-white shadow overflow-hidden border-neutral-600 bg-neutral-900'>
						<div className='border-b border-neutral-600 py-4 px-6 w-full text-2xl'>Programming Languages</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-3 md:p-4 w-full max-w-5xl '>
							{progLang.map((tech, index) => (
								<motion.div key={index} className={`rounded-xl z-10 flex gap-5 items-center border-[1px] border-gray-800 p-2  bg-zinc-950 bg-gradient-to-r via-transparent ${tech.hover} transition-shadow duration-300 ease w-72 max-[745px]:w-72`} initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 }} // Delay each card
									viewport={{ once: true }}>
									<div className={`p-2 ${tech.ImageBgColor} rounded-lg aspect-square`}>
										<img src={tech.imgURL} alt={tech.name} className=" w-9 h-9 max-[540px]:rounded-md aspect-square" />
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
			</div>
		</div>
	);
}

export default SkillsSection;
