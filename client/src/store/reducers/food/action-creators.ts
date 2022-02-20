import axios from "axios";
import { AppDispatch } from "../..";
import { IFood } from "../../../models/IFood";
import { FoodActionsEnum, SetErrorAction, SetFoodAction, SetIsLoadingAction, SetFoodPage, SetFoodType } from "./types";


export const FoodActionCreators = {
	setFood: (food: IFood[]): SetFoodAction => ({ type: FoodActionsEnum.SET_FOOD, payload: food }),
	setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: FoodActionsEnum.SET_IS_LOADING, payload: payload }),
	setError: (payload: string): SetErrorAction => ({ type: FoodActionsEnum.SET_ERROR, payload: payload }),
	setPage: (payload: number): SetFoodPage => ({type:FoodActionsEnum.SET_FOOD_PAGE, payload: payload}),
	setTypeFood: (payload: string): SetFoodType => ({type:FoodActionsEnum.SET_FOOD_TYPE, payload: payload}),

	getFood: (page: number = 1, type: string = '') => async (dispatch: AppDispatch) => {
		dispatch(FoodActionCreators.setIsLoading(true))
		const response = await axios.get<IFood[]>(`http://localhost:8080/api/food`, {
			params:{
				page: page,
				limit: 10,
				type: type
			}
		})
		dispatch(FoodActionCreators.setFood(response.data))
		dispatch(FoodActionCreators.setIsLoading(false))
	},
}
