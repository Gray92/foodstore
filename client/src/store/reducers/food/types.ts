import { IFoods } from "../../../models/IFood";

export interface FoodState {
	food: IFoods[];
	error: string;
	isLoading: boolean;
	paginateCount: number;
	page: number,
	type: string
}

export enum FoodActionsEnum {
	SET_FOOD = "SET_FOOD",
	SET_ERROR = "SET_ERROR",
	SET_PAGINATE_COUNT = "SET_PAGINATE_COUNT",
	SET_IS_LOADING = "SET_IS_LOADING",
	SET_FOOD_PAGE = "SET_FOOD_PAGE",
	SET_FOOD_TYPE = "SET_FOOD_TYPE"
}

export interface SetFoodAction {
	type: FoodActionsEnum.SET_FOOD;
	payload: IFoods[]
}

export interface SetPaginateCountAction {
	type: FoodActionsEnum.SET_PAGINATE_COUNT;
	payload: number
}

export interface SetErrorAction {
	type: FoodActionsEnum.SET_ERROR;
	payload: string
}

export interface SetIsLoadingAction {
	type: FoodActionsEnum.SET_IS_LOADING;
	payload: boolean
}

export interface SetFoodPage {
	type: FoodActionsEnum.SET_FOOD_PAGE;
	payload: number
}

export interface SetFoodType {
	type: FoodActionsEnum.SET_FOOD_TYPE;
	payload: string
}

export type FoodAction =
	SetErrorAction |
	SetFoodAction |
	SetPaginateCountAction |
	SetIsLoadingAction |
	SetFoodPage |
	SetFoodType