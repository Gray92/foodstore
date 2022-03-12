import { IFoods } from "../../../models/IFood";


export interface BasketState {
	basket: IFoods[];
	isLoading: boolean;
	error: string;
}


export enum BasketActionEnum {
	ADD_BASKET_FOOD = "ADD_BASKET_FOOD",
	DELETE_BASKET_FOOD = "DELETE_BASKET_FOOD",
	CLEAR_BASKET = "DELETE_BASKET",
	SET_BASKET_ERROR = "SET_BASKET_ERROR",
	SET_BASKET_IS_LOADING = "SET_BASKET_IS_LOADING"
}


export interface AddBasketAction {
	type: BasketActionEnum.ADD_BASKET_FOOD;
	payload: IFoods[];
}

export interface deleteBasketAction {
	type: BasketActionEnum.DELETE_BASKET_FOOD;
	payload: string;
}

export interface clearBasketAction {
	type: BasketActionEnum.CLEAR_BASKET;
}

export interface SetErrorBasketAction {
	type: BasketActionEnum.SET_BASKET_ERROR;
	payload: string 
}

export interface SetIsLoadingBasketAction {
	type: BasketActionEnum.SET_BASKET_IS_LOADING;
	payload: boolean
}


export type BasketAction =
	AddBasketAction |
	deleteBasketAction |
	clearBasketAction |
	SetErrorBasketAction |
	SetIsLoadingBasketAction