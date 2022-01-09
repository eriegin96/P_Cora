import React, { useContext } from 'react';
import Timer from '../Timer';
import { AppContext } from '../../context/AppProvider';

export default function Title() {
	const { player1Turn, player1Name, player2Name } = useContext(AppContext);

	return (
		<div className="title">
			<div className="player">
				{player1Turn ? `${player1Name}'s turn` : `${player1Name} is waiting`}
				<span style={{ marginLeft: '16px', color: 'red', fontWeight: 'bold' }}>O</span>
			</div>
			<Timer />
			<div className="player">
				{!player1Turn ? `${player2Name}'s turn` : `${player2Name} is waiting`}
				<span style={{ marginLeft: '16px', color: 'red', fontWeight: 'bold' }}>X</span>
			</div>
		</div>
	);
}
