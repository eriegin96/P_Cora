import { useContext, useRef, useState } from 'react';
import { AppContext } from '../../context/AppProvider';

export default function InputName() {
	const { setGameState, setPlayer1Name, setPlayer2Name } = useContext(AppContext);
	const name1Ref = useRef();
	const name2Ref = useRef();
	const [hasName1, setHasName1] = useState();
	const [hasName2, setHasName2] = useState();

	const checkName = () => {
		if (!name1Ref.current.value) {
			setHasName1(false);
		} else {
			setHasName1(true);
		}

		if (!name2Ref.current.value) {
			setHasName2(false);
		} else {
			setHasName2(true);
		}

		return name1Ref.current.value && name2Ref.current.value;
	};

	const submitName = () => {
		setPlayer1Name(name1Ref.current.value || 'Player 1');
		setPlayer2Name(name2Ref.current.value || 'Player 2');

		if (checkName()) {
			setGameState('play');
		}
	};

	return (
		<div className="modal">
			<div className="modal__input-name">
				<div className="modal__input-name__form">
					<div>
						<label htmlFor="player1">Player 1's name</label>
						<input type="text" id="player1" ref={name1Ref} />
						<div style={{ marginTop: '4px', color: 'red' }}>
							{hasName1 === false && 'Please input name 1'}
						</div>
					</div>
					<div>
						<label htmlFor="player2">Player 2's name</label>
						<input type="text" id="player2" ref={name2Ref} />
						<div style={{ marginTop: '4px', color: 'red' }}>
							{hasName2 === false && 'Please input name 2'}
						</div>
					</div>
					<button onClick={submitName}>Done</button>
				</div>
			</div>
		</div>
	);
}
