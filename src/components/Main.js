function Main() {
	const list = [
		"https://picsum.photos/200/300",
		"https://picsum.photos/200/300",
		"https://picsum.photos/200/300",
		"https://picsum.photos/200/300",
		"https://picsum.photos/200/300",
		"https://picsum.photos/200/300",
		"https://picsum.photos/200/300",
		"https://picsum.photos/200/300",
		"https://picsum.photos/200/300",
		"https://picsum.photos/200/300",
	];
	return (
		<div className="col-span-4 sm:col-span-5">
			<h1 className="text-center text-lg font-bold">Hello world hi</h1>
			<div
				className="grid sm:grid-cols-2 md:grid-cols-3
			xl:grid-cols-4">
				{list.map((index) => {
					return (
						<img
							className={
								"text-center m-2 h-full p-3 w-full object-cover bg-" +
								index +
								"-600"
							}
							src={index}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Main;
