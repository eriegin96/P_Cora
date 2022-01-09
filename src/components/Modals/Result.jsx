import { useContext } from 'react';
import { AppContext } from '../../context/AppProvider';

export default function Result() {
	const {
		initBoardSize,
		setBoardSize,
		initBoard,
		setBoard,
		player1Name,
		player2Name,
		win,
		setGameState,
		initTime,
		time,
		setTime,
		setCount,
		setWin,
	} = useContext(AppContext);
	const minute = Math.floor((1200 - time) / 60);
	const second = (1200 - time) % 60;

	const handleClick = () => {
		setGameState('start');
		setBoardSize(initBoardSize);
		setBoard(initBoard);
		setTime(initTime);
		setCount(0);
		setWin(0);
	};

	return (
		<div className="modal">
			<div className="modal__result">
				<div>
					<h2>Result</h2>
					{win === 0 && <h3>Draw!!</h3>}
					{win === 1 && <h3>{player1Name} win!!</h3>}
					{win === 2 && <h3>{player2Name} win!!</h3>}
					{win !== 0 && (
						<div>
							Time: {minute !== 0 && minute + 'minutes'} {second} seconds
						</div>
					)}
				</div>
				<button onClick={handleClick}>Play again</button>
			</div>
		</div>
	);
}
