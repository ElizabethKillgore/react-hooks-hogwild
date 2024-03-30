import React from "react";
import Nav from "./Nav";
import HogList from "./HogList"





function App() {
	return (
		<div className="App">
			<Nav />
			<HogList />
		</div>
	);
}

export default App;

























// function App() {
// 	const [search, setSearch] = useState(true)
	
	// function handleSearchedHogs() {
	// 	const searchedHogs = hogs.filter((hog) => {
	// 	if (hog.greased === true) {
	// 		return hog.greased
	// 	} else {
	// 		return null
	// 	}
	// 	})
	
	// }

// 	return (
// 		<div className="App">
// 			<Nav />
// 			<Filter hogs={hogs} />
// 			<HogList hogs={hogs}  />
// 		</div>
// 	);
// }

// export default App;



