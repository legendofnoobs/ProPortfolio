import { motion } from "motion/react"

const BesmellahEdit = () => {
	return (
		<motion.div
			className="w-full xl:max-w-4xl 2xl:max-w-5xl"
			initial={{ y: "10%", opacity: 0, filter: "blur(10px)" }}
			animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
			transition={{ type: "tween", duration: 1, delay: 0.5 }}>
			<div className="max-w-full h-fit flex flex-col items-center justify-center py-16 md:py-32 lg:py-40 xl:py-16 2xl:py-36 gap-20">
				<h1
					className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl z-10 group text-center"
					style={{
						fontFamily: "Arial, sans-serif",
						textShadow: "rgba(255,255,255,0.8) 0px 0px 7px",
					}}
				>
					{["Pixels,", "Code", "&", "Passion", "–", "Let's", "Build", "Tomorrow’s", "Web", "⚡"].map((word, index) => (
						<span
							key={index}
							className="inline-block transition-transform duration-300 ease-in-out group-hover:hover:-translate-y-2"
						>
							{word}&nbsp;
						</span>
					))}
				</h1>
			</div>
		</motion.div>
	)
}

export default BesmellahEdit