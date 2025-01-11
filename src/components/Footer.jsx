import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Footer = () => {
	return (
		<div className="flex flex-col gap-y-2 items-center py-20 bg-transparent border-t-[1px] border-gray-700 justify-between px-7 lg:flex-row-reverse">
			<ul className="flex justify-between items-center gap-2 text-md max-[1100px]:hidden">
							<li className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300 flex justify-center items-center">
								<a target="_blank" href="mailto:ahmedalirashed203@gmail.com" aria-label="Mail" className="flex justify-center">
									<FontAwesomeIcon icon={faEnvelope} className="size-6" />
								</a>
							</li>
							<li className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300 flex justify-center items-center">
								<a target="_blank" href="https://www.linkedin.com/in/ahmed-rashed-573940288/" aria-label="LinkedIn" className="flex justify-center" >
									<FontAwesomeIcon icon={faLinkedin} className=" size-6" />
								</a>
							</li>
							<li className="p-2 rounded-full h-fit hover:bg-white/10 transition-colors duration-300 flex justify-center items-center">
								<a target="_blank" href="https://github.com/legendofnoobs" aria-label="GitHub" className="flex justify-center items-center">
									<FontAwesomeIcon icon={faGithub} className=" size-6" />
								</a>
							</li>
							<li className="px-5 py-2 bg-white/10 text-white  rounded-full font-semibold transition-colors duration-300 hover:bg-white/20">
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