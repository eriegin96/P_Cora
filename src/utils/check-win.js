export const checkWin = (board) => {
	let win;
	const str5O = 'O,O,O,O,O';
	const str5X = 'X,X,X,X,X';
	const str6O = 'O,O,O,O,O,O';
	const str6X = 'X,X,X,X,X,X';
	const strO5XO = 'O,X,X,X,X,X,O';
	const strX5OX = 'X,O,O,O,O,O,X';

	// to Right
	const boardRow = board.map((row) => row.join(','));

	// to Down
	const boardColArr = [];
	for (let row = 0; row < board.length; row++) {
		const subBoard = [];
		for (let col = 0; col < board.length; col++) {
			subBoard.push(board[col][row]);
		}
		boardColArr.push(subBoard);
	}
	const boardCol = boardColArr.map((row) => row.join(','));

	// to Right Up
	const boardRightUp = [];
	for (let k = 0; k <= 2 * (board.length - 1); k++) {
		const subBoard = [];
		for (let col = board.length - 1; col >= 0; col--) {
			let row = k - col;
			if (row >= 0 && row < board[0].length) {
				subBoard.push(board[col][row]);
			}
		}
		if (subBoard.length > 0) {
			boardRightUp.push(subBoard.join(','));
		}
	}

	// to Left Up
	const boardLeftUp = [];
	for (let k = 0; k <= 2 * (board.length - 1); k++) {
		const subBoard = [];
		for (let col = board.length - 1; col >= 0; col--) {
			let row = k - (board.length - col - 1);
			if (row >= 0 && row < board[0].length) {
				subBoard.push(board[col][row]);
			}
		}
		if (subBoard.length > 0) {
			boardLeftUp.push(subBoard.join(','));
		}
	}

	const boardResult = [...boardRow, ...boardCol, ...boardLeftUp, ...boardRightUp];
	for (let i = 0; i < boardResult.length; i++) {
		const winCon = boardResult[i].includes(str5O) || boardResult[i].includes(str5X);
		const notWinCon =
			boardResult[i].includes(str6O) ||
			boardResult[i].includes(str6X) ||
			boardResult[i].includes(strO5XO) ||
			boardResult[i].includes(strX5OX);

		if (winCon && !notWinCon) {
			return (win = true);
		}
	}

	return win;
};
