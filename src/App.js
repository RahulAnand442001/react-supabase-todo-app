import logo from "./assets/logo.svg";
import supabaseLogo from "./assets/supabase.png";
import "./App.css";
import Todo from "./components/todo/todo.component";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} alt="logo" />
				<img src={supabaseLogo} alt="logo" />
				<Todo />
			</header>
		</div>
	);
}

export default App;
