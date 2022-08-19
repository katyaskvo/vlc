import './account-card.styles.scss';
import { ReactComponent as SpreadsheetIcon } from '../../assets/g-sheet-icon.svg';
import { timeAgo } from '../../utils/time-ago.utils';

const AccountCard = ({ accountData, balanceData }) => {
	const {
		name,
		disabled_start: disabledStart,
		last_fetched: lastFetch,
	} = accountData;
	const timeAgoString = timeAgo(lastFetch);

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
						<span className="last-refresh">Last Refresh: {timeAgoString}</span>
					</p>
				</div>
				<div className="card-togggle">{`<`}</div>
			</div>
			<div>
				<table>
					<thead>
						<tr>
							<th></th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AccountCard;
