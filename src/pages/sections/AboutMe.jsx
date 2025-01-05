import { motion } from "motion/react"
const AboutMe = () => {
	return (
		<div className="flex flex-col gap-4 w-full h-fit">
			<motion.div className="w-full h-fit bg-white/10 border-2 border-white/20 hover:shadow-2xl hover:shadow-blue-600/30 transition-shadow ease relative overflow-hidden rounded-2xl p-2 grid" initial={{ y: "-50%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeInOut" }}>
				<div className="bg-zinc-900 w-full rounded-xl p-4 h-fit relative">
					<div className="w-96 h-96 absolute bg-red-800/40 blur-[100px] rounded-full -top-52 right-2/4 translate-x-2/4 z-0"></div>
					<h1 className="text-7xl max-[540px]:text-5xl text-center mb-4 z-10 relative" style={{ textShadow: "0px 0px 10px white" }}>About Me</h1>
					<h2 className="text-5xl max-[540px]:text-3xl mb-4">Ahmed Ali Rashed</h2>
					<p className="text-2xl font-bold max-[540px]:text-xl mb-4">Software Engineering Student.</p>
					<p className="text-lg max-[540px]:text-base z-10">I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
				</div>
			</motion.div>
			<div className="w-full h-fit flex justify-between gap-4 max-[1800px]:flex-col">
				<motion.div className="w-full h-fit p-2 bg-white/10 border-2 border-white/20 hover:shadow-2xl hover:shadow-red-600/30 transition-shadow ease relative overflow-hidden rounded-2xl" initial={{ x: "-50%", opacity: 0.5 }} animate={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1, ease: "easeInOut" }}>
					<div className="bg-zinc-900 w-full h-full rounded-xl p-3">
						<div className="w-96 h-96 absolute bg-green-800/40 blur-[100px] rounded-full -top-52 right-2/4 translate-x-2/4 z-0"></div>
						<h1 className="text-5xl mb-5 max-[540px]:text-3xl relative z-10">Additional Skills:</h1>
						<ul className=" list-disc pl-6 text-lg mb-5 max-[540px]:text-base">
							<li>JSON</li>
							<li>Basic Git</li>
							<li>Bash Scripting</li>
							<li>Version Control</li>
							<li>Basic Linux Commands</li>
							<li>Object Oriented Programming</li>
							<li>Good Knowledge of Software Development Life Cycle</li>
							<li>Good Knowledge of Software Requirements and Specification</li>
							<li>SQL and Databases</li>
							<li>Data Structures</li>
							<li>Design Patterns</li>
						</ul>
					</div>
				</motion.div>
				<div className="flex flex-col items-center justify-between w-full">
					<motion.div className="w-full h-fit p-2 bg-white/10 border-2 border-white/20 hover:shadow-2xl hover:shadow-green-600/30 transition-shadow ease relative overflow-hidden rounded-2xl" initial={{ x: "50%", opacity: 0.5 }} animate={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1, ease: "easeInOut" }} >
						<div className="bg-zinc-900 w-full h-full rounded-xl p-3">
							<div className="w-96 h-96 absolute bg-blue-800/40 blur-[100px] rounded-full -top-52 right-2/4 translate-x-2/4 z-0"></div>
							<h1 className="text-5xl mb-5 max-[540px]:text-3xl relative z-10">Certifications:</h1>
							<ul className=" list-disc pl-6 text-lg max-[540px]:text-base">
								<li>Web Design Certification - FreeCodeCamp.</li>
								<li>JavaScript Certification – FreeCodeCamp.</li>
								<li>FullStack with ASP.NET MVC Core – CLS Solutions.</li>
								<li>Software Engineering Bachelor. (In Progress)</li>
							</ul>
						</div>
					</motion.div>
					<div className="py-20 overflow-hidden">
						<motion.h2 className="text-3xl text-center italic px-3" style={{ textShadow: "0px 0px 10px white" }} initial={{ y: 150 }} animate={{ y: 0 }} transition={{ delay: 1.5, duration: 1 }}>Lets Create Something Together!</motion.h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutMe