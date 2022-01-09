import Cell from './Cell';

export default function Row(props) {
	const { rows, row } = props;

	return (
		<tr className="row">
			{rows.map((cell, i) => (
				<Cell key={i} value={cell} row={row} col={i} />
			))}
		</tr>
	);
}
