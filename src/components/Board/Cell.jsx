import { useContext } from 'react';
import { AppContext } from '../../context/AppProvider';
import { checkWin } from '../../utils/check-win';

export default function Cell(props) {
	const { board, setBoard, setCount, player1Turn, setPlayer1Turn, setWin, setGameState } =
		useContext(AppContext);
	const { value, row, col } = props;

	const changeValue = () => {
		if (!board[row][col]) {
			const newBoard = [...board];

			if (player1Turn) {
				newBoard[row][col] = 'O';
			} else {
				newBoard[row][col] = 'X';
			}

			setBoard(newBoard);
			setPlayer1Turn(!player1Turn);
			setCount((prev) => prev + 1);

			const isWin = checkWin(board);
			if (isWin) {
				setWin(player1Turn ? 1 : 2);
				setGameState('end');
			}
		}
	};

	return (
		<td className="cell" onClick={changeValue}>
			{value}
		</td>
	);
}
