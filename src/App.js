function App() {
	const list = [
		"red",
		"green",
		"indigo",
		"purple",
		"yellow",
		"red",
		"green",
		"indigo",
		"purple",
		"yellow",
	];
	return (
		<div className="bg-red-100 h-screen">
			<h1 className="text-center text-lg font-bold">Hello world hi</h1>
			<div
				className="grid sm:grid-cols-2 md:grid-cols-3
			xl:grid-cols-4">
				{list.map((index) => {
					return (
						<div className={"text-center m-2 h-28 w-28 bg-" + index + "-600"}>
							{index}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
