import React, { useState } from 'react';
import './App.css';

function App() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Name: ${name}, Email: ${email}`);
	};

	return (
		<div className="App">
			<header className="App-header">
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">Master Name:</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</header>
		</div>
	);
}

export default App;
