export default function Header() {
	return (
		<div className="p-8 bg-white block">
			<div className="font-bold mb-8 sm:text-5xl text-8xl text-center ">
				Flexbox Grid
			</div>
			<div className="text-center text-lg text-xl mb-8 ">
				A grid system based on the{" "}
				<span className="text-blue-500 font-bold"> flex </span>
				display property.
			</div>
			<div className="flex justify-center mb-8">
				<a
					className="hidden md:block mx-4 border border-blue-500 px-8 text-xl font-bold text-blue-500"
					href="#downlaoad">
					Download
				</a>
				<a
					className="mx-4 border border-blue-500 px-12 text-xl  font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white py-3"
					href="#github">
					Github
				</a>
			</div>
		</div>
	);
}
