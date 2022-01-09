import React, { createContext, useEffect, useState } from 'react';
import { expandBoard } from '../utils/expand-board';

export const AppContext = createContext();

export default function AppProvider({ children }) {
	const initBoardSize = 30;
	const [boardSize, setBoardSize] = useState(initBoardSize);

	const initBoard = new Array(initBoardSize);
	for (let i = 0; i < initBoardSize; i++) {
		const rows = new Array(initBoardSize).fill('');
		initBoard[i] = rows;
	}
	const [board, setBoard] = useState(initBoard);

	const [count, setCount] = useState(0);

	const initTime = 20 * 60;
	const [time, setTime] = useState(initTime);

	const [gameState, setGameState] = useState('start');
	const [player1Name, setPlayer1Name] = useState('Player 1');
	const [player2Name, setPlayer2Name] = useState('Player 2');
	const [player1Turn, setPlayer1Turn] = useState(true);
	const [win, setWin] = useState(0);

	useEffect(() => {
		const expandAmount = 5;
		if (count >= Math.floor((boardSize ** 2 * 80) / 100)) {
			setBoardSize(initBoardSize + 2 * expandAmount);
			setBoard(expandBoard(board, expandAmount));
		}
	}, [count, board, boardSize]);

	useEffect(() => {
		if (gameState === 'play') {
			if (time === 0) {
				setGameState('end');
			}

			const timer = setInterval(() => {
				setTime((prev) => prev - 1);
			}, 1000);

			return () => {
				clearInterval(timer);
			};
		}
	}, [gameState, time]);

	const value = {
		initBoardSize,
		boardSize,
		setBoardSize,
		initBoard,
		board,
		setBoard,
		count,
		setCount,
		gameState,
		setGameState,
		initTime,
		time,
		setTime,
		player1Turn,
		setPlayer1Turn,
		player1Name,
		setPlayer1Name,
		player2Name,
		setPlayer2Name,
		win,
		setWin,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
