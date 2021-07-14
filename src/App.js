import Header from "./components/Header";
import Main from "./components/Main";
import Leftsidebar from "./components/Leftsidebar";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="contianer bg-red-100 w-full h-full">
			<Header />
			<div className="grid grid-cols-5">
				<Leftsidebar />
				<Main />
			</div>
			<Footer />
		</div>
	);
}

export default App;
