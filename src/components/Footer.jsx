const Footer = () => {
	return (
		<div className="flex flex-col lg:flex-row gap-y-2 items-center py-20 bg-transparent border-t-[1px] border-gray-700 justify-between px-7">
			<ul className="flex justify-between gap-3 text-md">
				<li className="px-5 max-[540px]:px-2 py-2 max-[540px]:py-1 rounded-full hover:bg-white/10 transition-colors duration-300">
					<a target="_blank" href="mailto:ahmedalirashed203@gmail.com" aria-label="Mail">Mail</a>
				</li>
				<li className="px-5 max-[540px]:px-2 py-2 max-[540px]:py-1 rounded-full hover:bg-white/10 transition-colors duration-300">
					<a target="_blank" href="https://www.linkedin.com/in/ahmed-rashed-573940288/" aria-label="LinkedIn">LinkedIn</a>
				</li>
				<li className="px-5 max-[540px]:px-2 py-2 max-[540px]:py-1 rounded-full hover:bg-white/10 transition-colors duration-300">
					<a target="_blank" href="https://github.com/legendofnoobs" aria-label="GitHub">GitHub</a>
				</li>
				<li className="px-5 max-[540px]:px-2 py-2 max-[540px]:py-1 bg-white/10 text-white  rounded-full font-semibold transition-colors duration-300 hover:bg-white/20">
					<a target="_blank" href="https://drive.google.com/file/d/1BBU8BkyQ3j618yX8IIONTVcoyFKWtOWB/view?usp=sharing" aria-label="Resume">Resume</a>
				</li>
			</ul>
			<div>
				<p>© 2025 Ahmed Rashed. All Rights Reserved.</p>
				<p>Made with passion and dedication.</p>
			</div>
		</div>
	)
}

export default Footer