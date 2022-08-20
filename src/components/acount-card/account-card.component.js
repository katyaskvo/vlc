import './account-card.styles.scss';
import { useState } from 'react';
import { ReactComponent as SpreadsheetIcon } from '../../assets/g-sheet-icon.svg';
import { ReactComponent as CaretIcon } from '../../assets/caret.svg';
import { timeAgo } from '../../utils/time-ago.utils';

const AccountCard = ({ accountData, balanceData = {} }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const {
		name,
		disabled_start: disabledStart,
		last_fetched: lastFetch,
	} = accountData;

	const {
		gl_balance: glBalance = undefined,
		rec_balance: recBalance = undefined,
	} = balanceData;
	const timeAgoString = timeAgo(lastFetch);

	const toggleExpandCollapse = (e) => {
		e.preventDefault();
		setIsExpanded(!isExpanded);
	};

	const calculateVariancePercentage = () => {
		let percentage = ((glBalance - recBalance) / glBalance) * 100; //calculate percentage

		//check if not infinite
		if (isFinite(percentage)) {
			percentage = (Math.round(percentage * 100) / 100).toFixed(1); //round percentage value to 1 decimal
			return `(${percentage}%)`;
		} else {
			//if infinite don't display percentage
			return '';
		}
	};

	return (
		<div className="card-wrapper">
			<div className="card-account-info">
				<div className="card-spreadsheet-icon">
					<SpreadsheetIcon />
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
				<div className="card-togggle">
					<button
						className="caret-button"
						onClick={toggleExpandCollapse}
						style={{ transform: isExpanded ? 'rotate(-90deg)' : '' }}
					>
						<CaretIcon />
					</button>
				</div>
			</div>
			<div
				className="balance-table"
				style={{ display: isExpanded ? 'block' : 'none' }}
			>
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
									)}{' '}
									{calculateVariancePercentage()}
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
