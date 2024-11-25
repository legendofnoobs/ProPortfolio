
const Besmellah = () => {
	return (
		<div className="h-[668px] w-full p-2 bg-white/10 rounded-3xl border-2 border-white/20 max-[540px]:h-fit">
				<div className="h-[40px] flex bg-slate-600 w-full rounded-t-2xl px-5 bg-gradient-to-r from-slate-800 via-slate-400 to-slate-800">
					<ul className="flex gap-3 items-center w-fit">
						<li className="w-3 h-3 bg-red-600 shadow-md shadow-red-600 rounded-full"></li>
						<li className="w-3 h-3 bg-yellow-500 shadow-md shadow-yellow-500 rounded-full"></li>
						<li className="w-3 h-3 bg-green-500 shadow-md shadow-green-500 rounded-full"></li>
					</ul>
				</div>
				<div className="max-w-full h-[610px] bg-zinc-900 rounded-b-2xl flex flex-col items-center justify-center gap-y-20 relative overflow-hidden max-[540px]:h-fit max-[540px]:py-5">
					<div className="w-6/12 h-4/6 absolute bg-red-600/30 blur-3xl shadow-2xl shadow-red-500 rounded-full -top-52 -right-10 z-0"></div>
					<h1 className="text-8xl px-10 z-10 max-[540px]:text-6xl max-[450px]:text-5xl" style={{textShadow:"0px 0px 10px white"}}>I Build Web Apps & Products.</h1>
					<p className="text-3xl z-10 w-full text-right pr-20 max-[540px]:text-2xl max-[540px]:p-0 max-[540px]:text-center">Student At AASTMT</p>
					<div className="w-6/12 h-4/6 absolute bg-blue-700/30 blur-3xl shadow-2xl shadow-blue-700 rounded-full -bottom-52 -left-10 z-0"></div>
				</div>
			</div>
	)
}

export default Besmellah