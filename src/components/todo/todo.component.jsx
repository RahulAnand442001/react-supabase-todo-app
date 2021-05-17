import React, { useState, useEffect } from "react";
import supabase from "../../lib/api";
const Todo = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetchTodos().catch((error) => console.log(error));
	}, []);

	const fetchTodos = async () => {
		const { data: todos, error } = await supabase
			.from("todo")
			.select("*");
		if (error) console.log(error);
		setTodos(todos);
	};
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>{todo.task}</li>
			))}
		</ul>
	);
};

export default Todo;
