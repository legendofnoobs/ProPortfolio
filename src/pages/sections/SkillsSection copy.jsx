/* eslint-disable react/prop-types */
import { frontendTech, backendTech, designTech, cloudTech, devTools, progLang } from '../../data/index.js';
import { motion } from 'motion/react';

const categories = [
    { title: "Frontend Development", data: frontendTech },
    { title: "Backend Development", data: backendTech },
    { title: "Cloud Tools", data: cloudTech },
    { title: "Designing Tools", data: designTech },
    { title: "Development Tools", data: devTools },
    { title: "Programming Languages", data: progLang }
];

const TechCategory = ({ title, data }) => (
    <div className='w-fit rounded-xl border text-white shadow overflow-hidden border-neutral-600 bg-neutral-900'>
        <div className='border-b border-neutral-600 py-4 px-3 w-full text-2xl'>{title}</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 w-full max-w-5xl'>
            {data.map((tech, index) => (
                <motion.div key={index} className={`rounded-xl z-10 flex gap-5 items-center border-[1px] border-gray-800 p-2 bg-zinc-950 bg-gradient-to-r via-transparent ${tech.hover} transition-shadow duration-300 ease w-72 md:w-72`} initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    drag
                    dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}>
                    <div className={`p-2 ${tech.ImageBgColor} rounded-lg aspect-square`}>
                        <img src={tech.imgURL} alt={tech.name} className="w-9 h-9 max-[540px]:rounded-md aspect-square" />
                    </div>
                    <div className='mr-10'>
                        <p className='text-lg'>{tech.name}</p>
                        <p className='text-sm text-gray-400'>{tech.decription}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

const SkillsSection = () => {
    return (
        <div className="w-full rounded-3xl h-fit relative mt-10">
            <div className='flex flex-col justify-center items-center gap-y-10 rounded-2xl z-10'>
                <h1 className="text-5xl md:text-7xl" style={{ textShadow: "0px 0px 10px white" }}>Technology Stack</h1>
                <div className="flex flex-col justify-center gap-6 items-center w-full">
                    {categories.map((category, index) => (
                        <TechCategory key={index} title={category.title} data={category.data} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SkillsSection;
