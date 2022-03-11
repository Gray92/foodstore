export interface IFoods {
	_id: string;
	type: string;
	name: string;
	img: string;
	desqription: string;
	price: number;
}

export interface IFood{
	totalDocs: number,
	docs: IFoods[]
}