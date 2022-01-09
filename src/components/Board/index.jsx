import { useContext } from 'react';
import { AppContext } from '../../context/AppProvider';
import Row from './Row';

export default function Board() {
	const { board } = useContext(AppContext);

	return (
		<table className="board" border="1">
			<tbody>
				{board.map((row, i) => (
					<Row key={i} rows={row} row={i} />
				))}
			</tbody>
		</table>
	);
}
