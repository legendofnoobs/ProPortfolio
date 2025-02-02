import AboutMe from "./sections/AboutMe"
import SkillsSection from "./sections/SkillsSection copy"

const Info = () => {
	return (
		<section className="w-full flex flex-col items-center py-10 gap-y-10 max-w-5xl m-auto">
			<AboutMe />
			<SkillsSection />
		</section>
	)
}

export default Info