import { useContext } from 'react';
import { AppContext } from './context/AppProvider';
import Header from './components/Header';
import Title from './components/Title';
import Board from './components/Board';
import InputName from './components/Modals/InputName';
import Result from './components/Modals/Result';
import './App.css';

function App() {
	const { gameState } = useContext(AppContext);

	return (
		<div className="app">
			{gameState === 'start' && <InputName />}
			{gameState === 'end' && <Result />}
			<div className="app-container">
				<Header />
				<Title />
			</div>
			<Board />
		</div>
	);
}

export default App;
