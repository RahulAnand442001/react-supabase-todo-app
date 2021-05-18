import "./App.css";
import Header from "./components/header/header.component";
import Todo from "./components/todo/todo.component";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Todo />
		</div>
	);
};

export default App;
