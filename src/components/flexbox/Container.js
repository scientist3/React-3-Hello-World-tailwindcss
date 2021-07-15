import Chat from "./Chat";

// import
export default function Container() {
	return (
		<div className="grid grid-cols-5">
			<div className="m-4 col-span-4 rounded-lg bg-indigo-200 text-black">
				<section className="mx-8 my-8 ">
					<h2 className="text-3xl font-bold">Responsive</h2>
					<p className="text-lg">
						Responsive modifiers enable specifying different column sizes,
						offsets, alignment and distribution at xs, sm, md & lg viewport
						widths.
					</p>
					<div className="mt-8 ">
						<div className="bg-blue-600 w-full h-4 my-4"></div>
						<div className="bg-blue-600 w-full h-4 my-4"></div>
						<div className="bg-blue-600 w-full h-4 my-4"></div>
					</div>
					{/* <pre className="bg-white mt-8">
					<code>
						"
						<div>
							<div class="">
								<div class="">Responsive</div>
							</div>
						</div>
						"
					</code>
				</pre> */}
				</section>
				<section className="mx-8 my-8">
					<h2 className="text-3xl font-bold">Fluid</h2>
					<p className="text-lg">
						Percent based widths allow fluid resizing of columns and rows.
					</p>
					<div className="mt-8 ">
						<div className="bg-blue-600 w-full h-4 my-4"></div>
						<div className="bg-blue-600 w-full h-4 my-4"></div>
						<div className="bg-blue-600 w-full h-4 my-4"></div>
					</div>
					{/* <pre className="bg-white mt-8">
					<code>
						"
						<div>
							<div class="">
								<div class="">Responsive</div>
							</div>
						</div>
						"
					</code>
				</pre> */}
				</section>
			</div>
			<Chat />
		</div>
	);
}
