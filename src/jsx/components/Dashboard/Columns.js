export const COLUMNS = [
	{
		Header : 'Order #',
		Footer : 'Order #',
		accessor: 'bpOrderID'
	},
	{
		Header : 'SKU',
		Footer : 'SKU',
		accessor: 'productSKU'
	},
	{
		Header : 'Name',
		Footer : 'Name',
		accessor: 'productName'
	},
	{
		Header : 'Total',
		Footer : 'Total',
		accessor: 'orderCost'
	},
	{
		Header : 'Balance',
		Footer : 'Blalance',
		accessor: 'orderBalance',
	},
	{
		Header : 'Status',
		Footer : 'Status',
		accessor: 'orderPaymentStatus'
	},
]

export const GROUPED_COLUMNS = [
	{
		Header : 'Id',
		Footer : 'Id',
		accessor: 'id'
	},
	{
		Header : 'Name',
		Footer : 'Name',
		columns: [
			{
				Header : 'First Name',
				Footer : 'First Name',
				accessor: 'first_name'
			},
			{
				Header : 'Last Name',
				Footer : 'Last Name',
				accessor: 'last_name'
			},
		]
	},
	{
		Header: 'Info',
		Footer: 'Info',
		columns: [
			{
				Header : 'Date of  Birth',
				Footer : 'Date of  Birth',
				accessor: 'date_of_birth'
			},
			{
				Header : 'Country',
				Footer : 'Country',
				accessor: 'country',
			},
			{
				Header : 'Phone',
				Footer : 'Phone',
				accessor: 'phone'
			},
		]
	},
]