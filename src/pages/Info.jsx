import AboutMe from "./sections/AboutMe"
import SkillsSection from "./sections/SkillsSection"

const Info = () => {
	return (
		<section className="w-full flex flex-col items-center py-10 px-80 gap-y-10 max-[1400px]:px-60 max-[1200px]:px-48 max-[1024px]:px-36 max-[900px]:px-20 max-[540px]:px-0 max-[636px]:px-7">
			<SkillsSection />
			<AboutMe />
		</section>
	)
}

export default Info