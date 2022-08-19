import './account-card.styles.scss';
import { ReactComponent as SpreadsheetIcon } from '../../assets/g-sheet-icon.svg';
import { timeAgo } from '../../utils/time-ago.utils';

const AccountCard = ({ accountData, balanceData = {} }) => {
	const {
		name,
		disabled_start: disabledStart,
		last_fetched: lastFetch,
	} = accountData;
	console.log(balanceData);

	const {
		gl_balance: glBalance = undefined,
		rec_balance: recBalance = undefined,
	} = balanceData;
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
			<div className="balance-table">
				<table>
					<thead>
						<tr>
							<th>GL Balance</th>
							<th>Rec. Balance</th>
							<th>Variance</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(balanceData).length > 0 && (
							<tr>
								<td>
									{glBalance.toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD',
									})}
								</td>
								<td>
									{recBalance.toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD',
									})}
								</td>
								<td
									style={{
										color: glBalance - recBalance !== 0 ? '#C70707' : '#0F9D58',
									}}
								>
									{(Math.round((glBalance - recBalance) * 100) / 100).toFixed(
										2
									)}
								</td>
							</tr>
						)}
						{!Object.keys(balanceData).length && (
							<tr>
								<td className="no-balance-data" colSpan="3">
									Data is not available.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AccountCard;
