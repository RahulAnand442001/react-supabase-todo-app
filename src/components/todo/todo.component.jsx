import React from "react";
import supabase from "../../lib/api";

import "./todo.styles.css";

class Todo extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [],
		};
	}

	componentDidMount() {
		this.fetchTodos().catch((error) => console.log(error));
	}

	componentDidUpdate() {
		this.fetchTodos().catch((error) => console.log(error));
	}

	fetchTodos = async () => {
		const { data: todos, error } = await supabase
			.from("todo")
			.select("id,task,completed")
			.match({ completed: false });
		if (error) console.log(error);
		this.setState({ ...todos, todos });
	};

	deleteTodo = async (id) => {
		const { data, error } = await supabase
			.from("todo")
			.delete()
			.match({ id: id });
		if (error) console.log(error);
		this.setState(
			this.state.todos.filter((todo) => todo.id !== id),
		);
	};

	markCompleteTodo = async (id) => {
		const { data, error } = await supabase
			.from("todo")
			.update({ completed: true })
			.match({ id: id });
		if (error) console.log(error);
		this.setState(
			this.state.todos.filter((todo) => todo.id !== id),
		);
	};

	render() {
		return (
			<div className="todo-preview">
				<h1 className="todo-preview-heading">MY TODOS</h1>
				<ul className="todo-list">
					{this.state.todos.map((todo) => (
						<li key={todo.id} className="todo">
							<span className="todo-task">{todo.task}</span>
							<div className="todo-options">
								<span
									className="option"
									onClick={() =>
										this.markCompleteTodo(todo.id)
									}>
									<i className="fas fa-check-circle" />
								</span>
								<span
									className="option"
									onClick={() => this.deleteTodo(todo.id)}>
									<i className="fas fa-trash-alt" />
								</span>
							</div>
						</li>
					))}
				</ul>
				
			</div>
		);
	}
}

export default Todo;
