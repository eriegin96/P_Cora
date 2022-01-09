import React, { memo, useContext } from 'react';
import { AppContext } from '../../context/AppProvider';

export default memo(function Timer() {
	const { time } = useContext(AppContext);
	const minute = Math.floor(time / 60);
	const second = time % 60;

	return (
		<div className="timer">
			<div style={{ padding: '4px 10px' }}>{minute}</div>
			<div>:</div>
			<div style={{ padding: '4px 10px' }}>{second > 9 ? second : '0' + second}</div>
		</div>
	);
});
