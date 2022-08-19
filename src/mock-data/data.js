// export type FinancialAccount = {
//     id: string
//     name: string
//     code: number
//     last_fetched: string
//     created_by: string
//     created_at: string
//     disabled_start: string | null
//     disabled_details: null
//   }

// export type AccountBalance = {
//   account_id: string
//   gl_balance: number | null
//   rec_balance: number | null
// }

export const accounts = [
	{
		id: 'acc_2',
		name: 'Prepaid Expenses Schedule FY2022',
		code: 220,
		last_fetched: 'Tue Aug 16 2022 05:24:09 GMT-0400 (Eastern Daylight Time)',
		created_by: 'usr_14',
		created_at: 'Wed May 18 2022 12:05:47 GMT-0400 (Eastern Daylight Time)',
		disabled_start: 'Sat Aug 13 2022 22:49:08 GMT-0400 (Eastern Daylight Time)',
		disabled_details: null,
	},
	{
		id: 'acc_1',
		name: 'Sales Tax',
		code: 160,
		last_fetched: 'Tue Aug 16 2022 20:34:28 GMT-0400 (Eastern Daylight Time)',
		created_by: 'usr_9',
		created_at: 'Wed Aug 10 2022 18:14:01 GMT-0400 (Eastern Daylight Time)',
		disabled_start: null,
		disabled_details: null,
	},

	{
		id: 'acc_3',
		name: 'Janitorial Expenses - Postage and Delivery - Bank Services - Telephone & Internet',
		code: 440,
		last_fetched: 'Tue Aug 16 2022 22:40:08 GMT-0400 (Eastern Daylight Time)',
		created_by: 'usr_3',
		created_at: 'Mon Aug 08 2022 11:18:47 GMT-0400 (Eastern Daylight Time)',
		disabled_start: null,
		disabled_details: null,
	},
	{
		id: 'acc_4',
		name: 'Accruals',
		code: 90,
		last_fetched: 'Tue Aug 16 2022 22:40:08 GMT-0400 (Eastern Daylight Time)',
		created_by: 'usr_14',
		created_at: 'Mon Aug 08 2022 11:18:47 GMT-0400 (Eastern Daylight Time)',
		disabled_start: null,
		disabled_details: null,
	},
];

export const balances = [
	{
		account_id: 'acc_3',
		gl_balance: 15383.84,
		rec_balance: 15383.84,
	},
	{
		account_id: 'acc_2',
		gl_balance: 100,
		rec_balance: -450.23,
	},
	{
		account_id: 'acc_1',
		gl_balance: 0,
		rec_balance: 1.5,
	},
];
