import { useState, useEffect } from 'react';
import './reconciliation.styles.scss';
import { accounts, balances } from '../../mock-data/data.js';
import AccountCard from '../account-card/account-card.component';

const ReconciliationComponent = () => {
	const [accountsData, setAccountsData] = useState([]);
	const [balancesData, setBalancesData] = useState([]);

	useEffect(() => {
		const accountsData = accounts;
		const balancesData = balances;

		console.log(accountsData, balancesData);
		setAccountsData(accountsData);
		setBalancesData(balancesData);
	}, []);

	return (
		<div className="reconciliation-wrapper">
			<h3>Reconciliation</h3>
			{accountsData.length &&
				accountsData.map((account) => {
					return (
						<AccountCard
							accountData={account}
							balanceData={balancesData.find(
								(data) => data.account_id === account.id
							)}
						></AccountCard>
					);
				})}
		</div>
	);
};

export default ReconciliationComponent;
