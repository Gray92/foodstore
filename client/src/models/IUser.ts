
export interface IBasket{
	_id: string;
	type: string;
	name: string;
	img: string;
	desqription: string;
	price: number;
}


export interface IUser{
	id: string;
	email: string;
	password: string;
	role: string;
	basket: IBasket[]
}