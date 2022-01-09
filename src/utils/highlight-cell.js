export const isWinCell = (winner, row, col) => {
	let isWinCell;

	if (winner) {
		if (
			winner.direction === 'ToRight' &&
			col >= winner.col &&
			col <= winner.col + nSquareToWin - 1 &&
			row === winner.row
		) {
			return (isWinCell = true);
		}
		if (
			winner.direction === 'ToDown' &&
			row >= winner.row &&
			row <= winner.row + nSquareToWin - 1 &&
			col === winner.col
		) {
			return (isWinCell = true);
		}
		if (
			winner.direction === 'ToRightDown' &&
			col >= winner.col &&
			col <= winner.col + nSquareToWin - 1 &&
			col - winner.col === row - winner.row
		) {
			return (isWinCell = true);
		}
		if (
			winner.direction === 'ToLeftDown' &&
			col <= winner.col &&
			col >= winner.col - nSquareToWin + 1 &&
			winner.col - col === row - winner.row
		) {
			console.log(winner.col + ' ' + winner.row + ' ' + col + ' ' + row + ' ' + nSquareToWin);
			return (isWinCell = true);
		}
	}
};
