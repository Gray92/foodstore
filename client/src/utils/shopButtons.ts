interface IShopButtons {
	key: string,
	value: string,
	type: string
}

export const shopButton: IShopButtons[] = [
	{ key: '1', value: "Все", type: '' },
	{ key: '2', value: "Роллы", type: 'roll' },
	{ key: '3', value: "Пицца", type: 'pizza' },
	{ key: '4', value: "Фастфуд", type: 'fastfood' }
]