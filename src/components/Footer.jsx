
const Footer = () => {
	return (
		<div className="flex flex-col justify-center items-center pb-5">
			<h1 className="text-2xl mb-5">Contact Me</h1>
			<ul className="flex justify-start gap-2 text-md">
				<li className="p-1 rounded-md hover:bg-white/10 px-2 transition-colors duration-300">
					<a target="_blank" href="mailto:ahmedalirashed203@gmail.com" aria-label="Mail">Mail</a>
				</li>
				<li className="p-1 rounded-md hover:bg-white/10 px-2 transition-colors duration-300">
					<a target="_blank" href="https://www.linkedin.com/in/ahmed-rashed-573940288/" aria-label="LinkedIn">LinkedIn</a>
				</li>
				<li className="p-1 px-2 rounded-md hover:bg-white/10 transition-colors duration-300">
					<a target="_blank" href="https://github.com/legendofnoobs" aria-label="GitHub">GitHub</a>
				</li>
				<li className="bg-white text-black p-1 rounded-md font-semibold px-2 transition-colors duration-300 hover:bg-gray-200">
					<a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vRXb2_UZhZKpHpKVr3a-ZBqd8Z9wHggiFpYa-t2ocr9okXId8dxwtJ_Wpaff2k9W_9NWVHWX8wve-c6/pub" aria-label="Resume">Resume</a>
				</li>
			</ul>
		</div>
	)
}

export default Footer