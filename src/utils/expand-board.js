export const expandBoard = (board, expandAmount) => {
	const boardSize = board.length;

	const newBoard = board.map((row) => {
		for (let i = 0; i < expandAmount; i++) {
			row.unshift('');
			row.push('');
		}
		return row;
	});

	for (let i = 0; i < expandAmount; i++) {
		const newRows = new Array(boardSize + 2 * expandAmount).fill('');
		newBoard.unshift(newRows);
		newBoard.push([...newRows]);
	}

	return newBoard;
};
