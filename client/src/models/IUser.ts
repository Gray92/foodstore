import { IFoods } from "./IFood";

export interface IUser{
	id: string;
	email: string;
	password: string;
	role: string;
	basket: IFoods[]
}