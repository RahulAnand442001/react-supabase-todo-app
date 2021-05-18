import React, { useState } from "react";

//stylesheet
import "./header.styles.css";

// images
import logo from "../../assets/logo.svg";
import supabaseLogo from "../../assets/supabase.svg";

// supabase
import supabase from "../../lib/api";

const Header = () => {
	const [todo, setTodo] = useState({
		task: "",
		completed: false,
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!todo.task) return;
		else {
			insertTodo().catch((error) => console.log(error));
			setTodo({ task: "", completed: false });
		}
	};

	const insertTodo = async () => {
		const { data, error } = await supabase
			.from("todo")
			.insert(todo);
		if (error) {
			console.log(error);
		}
		console.log(data);
	};

	return (
		<header className="header">
			<div className="logo-container">
				<img
					src={logo}
					alt="logo react-logo"
					className="logo react-logo"
				/>
				<img
					src={supabaseLogo}
					alt="logo supabase-logo"
					className="logo supabase-logo"
				/>
			</div>
			<h1 className="heading">React-Supabase TODO App</h1>
			<form
				action="submit"
				className="todo-form"
				onSubmit={handleSubmit}>
				<label className="form-label">NEW TODO</label>
				<input
					type="text"
					className="form-input"
					value={todo.task}
					onChange={(e) =>
						setTodo({
							...todo,
							task: e.target.value,
						})
					}
				/>
				<button type="submit" className="form-button">
					<i className="fas fa-plus-circle fa-2x add-icon" />
				</button>
			</form>
		</header>
	);
};

export default Header;
