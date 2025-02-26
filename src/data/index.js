import ReactLogo from "../assets/tech/react.svg";
import NextLogo from "../assets/tech/Next.js/Next.js_Symbol_Alternative_0.svg";
import BootstrapLogo from "../assets/tech/bootstrap.webp";
import CppLogo from "../assets/tech/C++-Logo.wine.webp";
import FigmaLogo from "../assets/tech/figma.webp";
import GitHubLogo from "../assets/tech/GitHub-Logo.webp";
import JavaLogo from "../assets/tech/java-logo-vector.webp";
import JsLogo from "../assets/tech/js.webp";
import TsLogo from "../assets/tech/typescript.svg";
import MySqlLogo from "../assets/tech/MySQL.webp";
import NodeLogo from "../assets/tech/node.webp";
import TailwindLogo from "../assets/tech/tailwindcss.webp";
import FramerMotion from "../assets/tech/framer-motion.webp";
import csharpLogo from "../assets/tech/cSharp.webp";
import pythonLogo from "../assets/tech/pythonLogo.webp";
import MSSql from "../assets/tech/microsoft-sql-server-logo.svg";
import appwritelogo from "../assets/tech/appwrite.svg"
import gitlogo from "../assets/tech/git.svg"
import convex from "../assets/tech/convex.webp"
import canva from "../assets/tech/1691829322canva-app-logo-png.png"
import vercel from "../assets/tech/Vercel_favicon.svg"
import docker from "../assets/tech/Docker.webp"
import netlify from "../assets/tech/netlify.png"
import postman from "../assets/tech/postman.svg"
import vscode from "../assets/tech/vscode.png"

export const frontendTech = [
	{
		name: "React.js",
		imgURL: ReactLogo,
		ImageBgColor: "bg-[#222222]",
		decription: "Javascript Library",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(66,135,245,0.5)]"
	},
	{
		name: "Next.js",
		imgURL: NextLogo,
		ImageBgColor: "bg-[#000000]",
		decription: "React Framework",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(255,255,255,0.5)]"
	},
	{
		name: "JavaScript",
		imgURL: JsLogo,
		ImageBgColor: "bg-yellow-300",
		decription: "Programming Language",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(240,219,79,0.5)]"
	},
	{
		name: "TypeScript",
		imgURL: TsLogo,
		ImageBgColor: "bg-blue-700/50",
		decription: "Programming Language",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(66,135,245,0.5)]"
	},
	{
		name: "Tailwind CSS",
		imgURL: TailwindLogo,
		ImageBgColor: "bg-blue-900",
		decription: "Css Library",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(66,135,245,0.5)]"
	},
	{
		name: "Framer Motion",
		imgURL: FramerMotion,
		ImageBgColor: "bg-purple-950",
		decription: "Animations Library",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(174,23,208,0.5)]"
	},
	{
		name: "Bootstrap",
		imgURL: BootstrapLogo,
		ImageBgColor: "bg-purple-950",
		decription: "Css Library",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(174,23,208,0.5)]"
	},
]

export const backendTech = [
	{
		name: "Appwrite",
		imgURL: appwritelogo,
		ImageBgColor: "bg-[#fd366e]/30",
		decription: "Backend Service",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(227,46,55,0.5)]"
	},
	{
		name: "Convex",
		imgURL: convex,
		ImageBgColor: "bg-gradient-to-r from-purple-500/30 to-red-500/50",
		decription: "Backend Service",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(227,46,55,0.5)]"
	},
	{
		name: "Node.js",
		imgURL: NodeLogo,
		ImageBgColor: "bg-green-950",
		decription: "Javascript Runtime",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(131,205,41,0.5)]"
	},
	{
		name: "MSSQL server",
		imgURL: MSSql,
		ImageBgColor: "bg-white/50",
		decription: "Database Tool",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(255,255,255,0.5)]"
	},
	{
		name: "MySql",
		imgURL: MySqlLogo,
		ImageBgColor: "bg-blue-950",
		decription: "Database Tool",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(66,135,245,0.5)]"
	},
]

export const designTech = [
	{
		name: "Figma",
		imgURL: FigmaLogo,
		ImageBgColor: "bg-gradient-to-r from-orange-500 via-purple-500 to-green-500",
		decription: "Designing Tool",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(242,78,30,0.5)]"
	},
	{
		name: "Canva",
        imgURL: canva,
        ImageBgColor: "bg-blue-500",
        decription: "Simple Designing tool",
        hover: "hover:shadow-[0px_0px_50px_1px_rgb(66,135,245,0.5)]"
	}
]

export const cloudTech = [
	{
		name: "Vercel",
        imgURL: vercel,
        ImageBgColor: "bg-white",
        decription: "Cloud Hosting Platform",
        hover: "hover:shadow-[0px_0px_50px_1px_rgb(255,255,245,0.5)]"
	},
	{
		name: "Netlify",
        imgURL: netlify,
        ImageBgColor: "bg-blue-950",
        decription: "Cloud Hosting Platform",
        hover: "hover:shadow-[0px_0px_50px_1px_rgb(66,255,245,0.5)]"
	},
	{
		name: "Docker",
        imgURL: docker,
        ImageBgColor: "bg-blue-800",
        decription: "Virtualizer",
        hover: "hover:shadow-[0px_0px_50px_1px_rgb(66,135,245,0.5)]"
	}
]

export const devTools = [
	{
		name: "GitHub",
		imgURL: GitHubLogo,
		ImageBgColor: "bg-black",
		decription: "Code Sharibg Platform",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(255,255,255,0.5)]"
	},
	{
		name: "Git",
		imgURL: gitlogo,
		ImageBgColor: "bg-[#f1502f]/50",
		decription: "CI/CD Tool",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(242,78,30,0.5)]"
	},
	{
		name: "Postman",
		imgURL: postman,
		ImageBgColor: "bg-[#f1502f]/50",
		decription: "API Testing Tool",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(242,78,30,0.5)]"
	},
	{
		name: "Visual Studio Code",
		imgURL: vscode,
		ImageBgColor: "bg-white",
		decription: "IDE",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(63,120,245,0.5)]"
	},
]

export const progLang = [
	
	{
		name: "Python",
		imgURL: pythonLogo,
		ImageBgColor: "bg-gradient-to-r from-yellow-500/50 to-blue-500/50",
		decription: "Programming Language",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(66,135,245,0.5)]"
	},
	{
		name: "c#",
		imgURL: csharpLogo,
		ImageBgColor: "bg-purple-950",
		decription: "Programming Language",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(174,23,208,0.5)]"
	},
	{
		name: "Java",
		imgURL: JavaLogo,
		ImageBgColor: "bg-blue-950/90",
		decription: "Programming Language",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(242,78,30,0.5)]"
	},
	{
		name: "c++",
		imgURL: CppLogo,
		ImageBgColor: "bg-blue-600",
		decription: "Programming Language",
		hover: "hover:shadow-[0px_0px_50px_1px_rgb(66,135,245,0.5)]"
	},
];

// =================================================================
import Cover from "../assets/ProjectsAssets/Cover.webp";
import MusicPlayer from "../assets/ProjectsAssets/Music Player.webp";
import SpaceTourism from "../assets/ProjectsAssets/Space tourism.webp";
import TodoApp from "../assets/ProjectsAssets/Todo app.webp";
import WeatherApp from "../assets/ProjectsAssets/Weather app.webp";
import PortfolioV2 from "../assets/ProjectsAssets/PortfolioV2.png";
import NikeLanding from "../assets/ProjectsAssets/Nike Landing.webp";
import MoviesLand from "../assets/ProjectsAssets/MoviesLand.webp";
import GymApp from "../assets/ProjectsAssets/GymApp.webp";
import SnapGram from "../assets/ProjectsAssets/SnapGram.png";
// =====================================================================
import snapgramHighlight1 from "../assets/ProjectsAssets/Highlights/snapgram/snapgramHighlight1.webp"
import snapgramHighlight2 from "../assets/ProjectsAssets/Highlights/snapgram/snapgramHighlight2.webp"
import snapgramHighlight3 from "../assets/ProjectsAssets/Highlights/snapgram/snapgramHighlight3.webp"
import snapgramHighlight4 from "../assets/ProjectsAssets/Highlights/snapgram/snapgramHighlight4.webp"
import snapgramHighlight5 from "../assets/ProjectsAssets/Highlights/snapgram/snapgramHighlight5.webp"
import snapgramHighlight6 from "../assets/ProjectsAssets/Highlights/snapgram/snapgram6.png"
import snapgramHighlight7 from "../assets/ProjectsAssets/Highlights/snapgram/snapgram7.png"
// =====================================================================
import gym1 from "../assets/ProjectsAssets/Highlights/gymapp/gym1.webp"
import gym2 from "../assets/ProjectsAssets/Highlights/gymapp/gym2.webp"
import gym3 from "../assets/ProjectsAssets/Highlights/gymapp/gym3.webp"
import gym4 from "../assets/ProjectsAssets/Highlights/gymapp/gym4.webp"
import gym5 from "../assets/ProjectsAssets/Highlights/gymapp/gym5.webp"
// =====================================================================
// =====================================================================
import space1 from "../assets/ProjectsAssets/Highlights/space/space1.webp"
import space2 from "../assets/ProjectsAssets/Highlights/space/space2.webp"
import space3 from "../assets/ProjectsAssets/Highlights/space/space3.webp"
import space4 from "../assets/ProjectsAssets/Highlights/space/space4.webp"
// =====================================================================
import groove1 from "../assets/ProjectsAssets/Highlights/groove/1.webp"
import groove2 from "../assets/ProjectsAssets/Highlights/groove/2.webp"
import groove3 from "../assets/ProjectsAssets/Highlights/groove/3.webp"
import groove4 from "../assets/ProjectsAssets/Highlights/groove/4.webp"
import groove5 from "../assets/ProjectsAssets/Highlights/groove/5.webp"
import groove6 from "../assets/ProjectsAssets/Highlights/groove/6.webp"
import groove7 from "../assets/ProjectsAssets/Highlights/groove/7.webp"
import groove8 from "../assets/ProjectsAssets/Highlights/groove/8.webp"
import groove9 from "../assets/ProjectsAssets/Highlights/groove/9.webp"

// =====================================================================
import codeEditor from "../assets/ProjectsAssets/codeEditor.png"
import editor1 from "../assets/ProjectsAssets/Highlights/codeEditor/editor1.webp"
import editor2 from "../assets/ProjectsAssets/Highlights/codeEditor/editor2.webp"
import editor3 from "../assets/ProjectsAssets/Highlights/codeEditor/editor3.webp"
import editor5 from "../assets/ProjectsAssets/Highlights/codeEditor/editor5.webp"
import editor6 from "../assets/ProjectsAssets/Highlights/codeEditor/editor6.webp"
// =====================================================================
import image0 from "../assets/ProjectsAssets/Highlights/jiraClone/image0.webp"
import image1 from "../assets/ProjectsAssets/Highlights/jiraClone/image1.webp"
import image2 from "../assets/ProjectsAssets/Highlights/jiraClone/image2.webp"
import image3 from "../assets/ProjectsAssets/Highlights/jiraClone/image3.webp"
import image4 from "../assets/ProjectsAssets/Highlights/jiraClone/image4.webp"
import image5 from "../assets/ProjectsAssets/Highlights/jiraClone/image5.webp"
import image6 from "../assets/ProjectsAssets/Highlights/jiraClone/image6.webp"
import image7 from "../assets/ProjectsAssets/Highlights/jiraClone/image7.webp"
import image8 from "../assets/ProjectsAssets/Highlights/jiraClone/image0 (2).webp"
// =====================================================================
import layers0 from "../assets/ProjectsAssets/Highlights/Layers/image0.webp"
import layers1 from "../assets/ProjectsAssets/Highlights/Layers/image1.webp"
import layers2 from "../assets/ProjectsAssets/Highlights/Layers/image2.webp"
import layers3 from "../assets/ProjectsAssets/Highlights/Layers/image3.webp"
import layers4 from "../assets/ProjectsAssets/Highlights/Layers/image4.webp"
// =====================================================================

import groovePdf from "../assets/pdf/GrooveMusicApp.pdf"

export const cvLink = "https://docs.google.com/document/d/e/2PACX-1vRXb2_UZhZKpHpKVr3a-ZBqd8Z9wHggiFpYa-t2ocr9okXId8dxwtJ_Wpaff2k9W_9NWVHWX8wve-c6/pub"


export const projectsData = [
	{
		id: "14",
		imgURL: layers0,
		title: "Layers Landing",
		description: "Layers landing page is a fully animated experience, bringing design to life with smooth transitions and interactive motion effects. Every scroll showcases the app’s features dynamically, making the introduction as engaging as the design process itself.",
		live: "https://layers-design-tool.netlify.app/",
		gitHUB: "https://github.com/legendofnoobs/layers",
		usedTech: ["Next.js", "Typescript", "Tailwind.css", "Framer Motion"],
		featuresWithImages: [
			{
				description: "2 draggable designs (left and right)",
				image: layers0,
			},
			{
				description: "A moving logoticker and a text-based scroll animation",
				image: layers1,
			},
			{
				description: "Cards with multible effects and animations",
				image: layers2,
			},
			{
				description: "A single logoticker component with 2 directions passed as a property",
				image: layers3,
			},
			{
				description: "Accordions with beautiful animations",
				image: layers4,
			},
		],
		hover: "group-hover:bg-lime-600/50 group-hover:blur-[150px]",
	},
	{
		id: "13",
		imgURL: image1,
		title: "Jira Clone",
		description: "Enjoy a better project management experience with my new Jira Clone. It comes with a clean and modern design. The app uses Next.js, TypeScript, Tailwind CSS, and a custom API to fetch and display project data. You can easily create, edit, and delete projects, as well as add tasks to them. Keep track of your progress with a detailed statistics dashboard.",
		live: "https://jira-clone-gamma-cyan.vercel.app/",
		gitHUB: "https://github.com/legendofnoobs/jira_clone",
		usedTech: ["Next.js", "Typescript", "Appwrite", "Tailwind.css", "Hono.js", "Shadcn ui", "Tanstack query"],
		featuresWithImages: [
			{
				description: "Simple Authentication",
				image: image0,
			},
			{
				description: "A dashboard to see and manage tasks, projects and members with workspaces",
				image: image8,
			},
			{
				description: "My tasks page for managing tasks accross all projects",
				image: image1,
			},
			{
				description: "A kanban board for managing tasks easily",
				image: image5,
			},
			{
				description: "Calendar view for better visualization about datelines",
				image: image6,
			},
			{
				description: "Deatailed Task page to add discription",
				image: image7,
			},
			{
				description: "Task creaction Modal",
				image: image2,
			},
			{
				description: "Workspace settings with invite system",
				image: image3,
			},
			{
				description: "A members list which can be used to set admins and regular members",
				image: image4,
			},
		],
		hover: "group-hover:bg-red-600/50 group-hover:blur-[150px]",
	},
	{
		id: "12",
		imgURL: codeEditor,
		title: "Code Editor",
		description: "Enjoy a better coding experience with my new code editor. It comes with colorful themes like those in VSCode and supports 10 different programming languages. Keep track of your work with a personal profile that shows your code history, and easily see if your code runs successfully or has errors. Find what you need quickly with advanced search and filtering features. Share your code with others in our community and see your progress with a detailed statistics dashboard. Plus, you can adjust the font size to make your coding environment just right for you.",
		live: "https://code-editor-nine-chi.vercel.app/",
		gitHUB: "https://github.com/legendofnoobs/code_editor",
		usedTech: ["Next.js", "Typescript", "Tailwind.css", "Clerk", "Convex", "Framer Motion", "Zustand"],
		featuresWithImages: [
			{
				description: "A Simple Code Editor",
				image: codeEditor,
			},
			{
				description: "Different text sizes",
				image: editor1,
			},
			{
				description: "multi-language support (10 languages)",
				image: editor2,
			},
			{
				description: "Community-driven code sharing system",
				image: editor3,
			},
			{
				description: "Comments for the snippets",
				image: editor5,
			},
			{
				description: "Comprehensive statistics dashboard",
				image: editor6,
			},
		],
		hover: "group-hover:bg-blue-600/50 group-hover:blur-[150px]",
	},
	{
		id: "1",
		imgURL: SnapGram,
		title: "SnapGram",
		description: "Build a modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance. It is Fully functional and responsive",
		live: "https://snap-graam.netlify.app/",
		gitHUB: "https://github.com/legendofnoobs/SnapGram",
		usedTech: ["React.js", "Tailwind.css", "Typescript", "Shadcn/ui", "TanStack", "Appwrite"],
		featuresWithImages: [
			{
				description: "Simple Authentication",
				image: snapgramHighlight1,
			},
			{
				description: "Homepage with sidebar navigation and top creator to follow",
				image: SnapGram,
			},
			{
				description: "Explore with search functionality",
				image: snapgramHighlight4,
			},
			{
				description: "Users page to follow",
				image: snapgramHighlight5,
			},
			{
				description: "Saving posts functionality",
				image: snapgramHighlight2,
			},
			{
				description: "post creation with uploading photos",
				image: snapgramHighlight3,
			},
			{
				description: "Profile editing page",
				image: snapgramHighlight6,
			},
			{
				description: "Profile page with viewing posted posts",
				image: snapgramHighlight7,
			},
		],
		hover: "group-hover:bg-pink-600/50 group-hover:blur-[150px]",
	},
	{
		id: "3",
		imgURL: Cover,
		title: "Music App Design",
		description: "For Human Computer Interaction's course, I worked on this project with my colleagues to make a good looking UI inspired by Apple music and Spotify.",
		live: "https://www.figma.com/design/SzKp1UwvKAnQsD3bWHa3bO/Music-App?node-id=0-1&t=59wQ2QfPncoLflLg-1",
		gitHUB: groovePdf,
		usedTech: ["Figma"],
		featuresWithImages: [
			{
				description: "",
				image: Cover,
			},
			{
				description: "",
				image: groove1,
			},
			{
				description: "",
				image: groove2,
			},
			{
				description: "",
				image: groove3,
			},
			{
				description: "",
				image: groove4,
			},
			{
				description: "",
				image: groove5,
			},
			{
				description: "",
				image: groove6,
			},
			{
				description: "",
				image: groove7,
			},
			{
				description: "",
				image: groove8,
			},
			{
				description: "",
				image: groove9,
			},
		],
		hover: "group-hover:bg-purple-600/50 group-hover:blur-[150px]"
	},
]


export const OtherProjectsData = [
	{
		id: "2",
		imgURL: GymApp,
		title: "Gym App",
		description: "A simple Gym app to demonstrate React.js, Material UI and API skills. Made with a Freemium API so do not panic if the app do not load any exersices. It is Fully functional and responsive",
		live: "https://minegymandexercisesapp.netlify.app/",
		gitHUB: "https://github.com/legendofnoobs/gym-app",
		usedTech: ["React.js", "RapidAPI", "MaterialUI"],
		featuresWithImages: [
			{
				description: "",
				image: GymApp,
			},
			{
				description: "",
				image: gym1,
			},
			{
				description: "",
				image: gym2,
			},
			{
				description: "",
				image: gym3,
			},
			{
				description: "",
				image: gym4,
			},
			{
				description: "",
				image: gym5,
			}
		],
		hover: "group-hover:bg-red-600/50 group-hover:blur-[150px]"
	},
	{
		id: "5",
		imgURL: SpaceTourism,
		title: "Space Tourism website",
		description: "Space tourism website to demonstrate skills. It was a challenge on Frontend Mentor. It is Fully functional and responsive",
		live: "https://space-tourism-ahmed-rashed.netlify.app/",
		gitHUB: "https://github.com/legendofnoobs/space-tourism-revisited",
		usedTech: ["React.js", "Tailwind.css", "Framer Motion"],
		featuresWithImages: [
			{
				description: "",
				image: space1,
			},
			{
				description: "",
				image: space2,
			},
			{
				description: "",
				image: space3,
			},
			{
				description: "",
				image: space4,
			},
		],
		hover: "group-hover:bg-blue-600/50 group-hover:blur-[150px]"
	},
	{
		id: "6",
		imgURL: MusicPlayer,
		title: "Music Player",
		description: "A simple Music app to demonstrate my skills in JavaScript and CSS. Some music to chill and keep calm. It is Fully functional and responsive",
		live: "https://musicplayerlegendofnoobs.netlify.app/",
		gitHUB: "https://github.com/legendofnoobs/music-player",
		usedTech: ["HTML", "CSS", "JavaScript"],
		hover: "group-hover:bg-yellow-600/50 group-hover:blur-[150px]"
	},
	{
		id: "7",
		imgURL: PortfolioV2,
		title: "PortfolioV2",
		description: "A simple PortfolioV2 to demonstrate React.js, Tailwind.css, and Framer Motion skills. It is Fully functional and responsive",
		live: "https://ahmedalirashedv2.netlify.app/#Home",
		gitHUB: "https://github.com/legendofnoobs/React-Portfolio",
		usedTech: ["React.js", "Tailwind.css", "Framer Motion"],
		hover: "group-hover:bg-blue-600/50 group-hover:blur-[150px]"
	},
	{
		id: "8",
		imgURL: WeatherApp,
		title: "Weather App",
		description: "A simple Weather app to demonstrate JavaScript skills. Made this app as an individual project before college requested a web development course's project and just handed it 💀. It is Fully functional and responsive",
		live: "https://weatherapplegendofnoobs.netlify.app/",
		gitHUB: "https://github.com/legendofnoobs/WeatherApp",
		usedTech: ["HTML", "CSS", "JavaScript", "API"],
		hover: "group-hover:bg-violet-600/50 group-hover:blur-[150px]"
	},
	{
		id: "9",
		imgURL: NikeLanding,
		title: "Nike Landing website",
		description: "A simple Nike Landing page to demonstrate Tailwind.css and React skills. It is fully functional and responsive.",
		live: "https://nikelandingnoob.netlify.app/",
		gitHUB: "https://github.com/legendofnoobs/Nike-landing",
		usedTech: ["React.js", "Tailwind.css"],
		hover: "group-hover:bg-orange-600/50 group-hover:blur-[150px]"
	},
	{
		id: "10",
		imgURL: MoviesLand,
		title: "MoviesLand Website",
		description: "A simple movies website to demonstrate React.js, css, and API skills. It is Fully functional and responsive",
		live: "https://movieslandlegendofnoobs.netlify.app/",
		gitHUB: "https://github.com/legendofnoobs/movie-app",
		usedTech: ["React.js", "CSS", "API"],
		hover: "group-hover:bg-yellow-600/50 group-hover:blur-[150px]"
	},
	{
		id: "11",
		imgURL: TodoApp,
		title: "Todo App",
		description: "A simple Todo app to demonstrate JavaScript and React skills. It is Fully functional and responsive",
		live: "https://todoappahemdali.netlify.app/",
		gitHUB: "https://github.com/legendofnoobs/todo-app",
		usedTech: ["React.js", "CSS", "Local Storage"],
		hover: "group-hover:bg-red-600/50 group-hover:blur-[150px]"
	},

]