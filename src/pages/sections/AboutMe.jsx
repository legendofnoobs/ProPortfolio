
const AboutMe = () => {
	return (
		<div className="w-full rounded-3xl p-2 h-fit bg-white/10 border-2 border-white/20 hover:shadow-2xl hover:shadow-yellow-600/30 transition ease relative overflow-hidden">
			<div className="w-96 h-96 absolute bg-blue-800 blur-[300px] rounded-full -top-52 -right-10 z-0"></div>
			<div className='flex flex-col justify-center items-center gap-y-10 bg-zinc-900 p-8 rounded-2xl z-10 max-[540px]:p-4'>
				<h1 className="text-7xl max-[540px]:text-5xl" style={{ textShadow: "0px 0px 10px white" }}>About Me</h1>
				<div className="w-full gap-x-5">
					<div className="w-full">
						<div className="flex flex-col gap-y-5 mb-10">
							<h1 className="text-5xl max-[540px]:text-3xl" style={{ textShadow: "0px 0px 10px white" }}>Ahmed Ali Rashed</h1>
							<p className="text-2xl font-bold max-[540px]:text-xl">Software Engineering Student.</p>
							<p className="text-xl max-[540px]:text-lg">I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
						</div>
						<div className="flex max-[1576px]:flex-col">
							<div className="w-full">
								<h1 className="text-5xl mb-5 max-[540px]:text-3xl">Additional Skills:</h1>
								<ul className=" list-disc pl-6 text-xl mb-5 max-[540px]:text-lg">
									<li>JSON</li>
									<li>Basic Git</li>
									<li>Version Control</li>
									<li>Data Structures</li>
									<li>Design Patterns</li>
									<li>SQL and Databases</li>
									<li>Basic Linux Commands</li>
									<li>Object Oriented Programming</li>
									<li>Good Knowledge of Software Process And Life Cycle</li>
									<li>Good Knowledge of Software Requirements and Specification</li>
								</ul>
							</div>
							<div className="mb-5 w-full">
								<h1 className="text-5xl mb-5 max-[540px]:text-3xl">Certifications:</h1>
								<ul className=" list-disc pl-6 text-xl max-[540px]:text-lg">
									<li>Web Design Certification - FreeCodeCamp.</li>
									<li>JavaScript Certification – FreeCodeCamp.</li>
									<li>FullStack with ASP.NET MVC Core – CLS Solutions.</li>
									<li>Software Engineering Bachelor. (In Progress)</li>
								</ul>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			<div className="w-96 h-96 absolute bg-red-800 blur-[300px] rounded-full -bottom-52 -left-10 z-0"></div>
		</div>
	)
}

export default AboutMe