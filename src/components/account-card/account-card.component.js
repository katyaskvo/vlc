import './account-card.component.styles.scss';
import { ReactComponent as SpreadsheetIcon } from '../../assets/g-sheet-icon.svg';

const AccountCard = ({ accountData, balanceData }) => {
	const {
		name,
		disabled_start: disabledStart,
		last_fetched: lastFetch,
	} = accountData;

	console.log(accountData, balanceData);

	return (
		<div className="card-wrapper">
			<div className="card-account-info">
				<div className="card-spreadsheet-icon">
					<SpreadsheetIcon></SpreadsheetIcon>
				</div>
				<div className="card-info">
					<h5>{name}</h5>
					<p>
						{disabledStart ? (
							<span className="disconnected">Disconnected</span>
						) : (
							<span className="connected">Connected</span>
						)}
						<span className="last-refresh">Last Refresh: {}</span>
					</p>
				</div>
				<div className="card-togggle">{`<`}</div>
			</div>
			<div>
				<table>
					<th>
						<td></td>
						<td></td>
						<td></td>
					</th>
					<tr>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default AccountCard;
