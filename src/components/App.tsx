import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import './App.css';

interface Todos {
	id: number;
	body: string;
	complete: boolean;
}

export function App() {
	const [input, setInput] = useState<string>('');
	const [todos, setTodo] = useState<Todos[]>([]);

	const addTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && input.length !== 0) {
			const newTask: Todos = {
				id: Math.random() * 100,
				body: input.trim(),
				complete: false,
			};

			setTodo([...todos, newTask]);
			setInput('');
		}
	};

	const rmTask = (id: number) => {
		const rmTask = todos.filter(item => item.id !== id);
		setTodo(rmTask);
	};

	return (
		<>
			<header>
				<h1 className='title'>What's the plan for today?</h1>
				<input
					className='input'
					type='text'
					placeholder='Add task'
					onChange={e => setInput(e.target.value)}
					value={input}
					onKeyPress={addTask}
				/>
			</header>
			<main className='todo-list'>
				{todos.map(item => {
					return (
						<div className='todo-item' key={item.id}>
							<div className='todo-txt'>{item.body}</div>
							<div className='actions'>
								<MdDelete
									size={20}
									className='btn-delete'
									onClick={() => rmTask(item.id)}
								/>
							</div>
						</div>
					);
				})}
			</main>
		</>
	);
}
