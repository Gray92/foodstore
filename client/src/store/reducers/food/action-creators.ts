import axios from "axios";
import { AppDispatch } from "../..";
import { IFood, IFoods } from "../../../models/IFood";
import { FoodActionsEnum, SetErrorAction, SetFoodAction, SetIsLoadingAction, SetFoodPage, SetFoodType, SetPaginateCountAction } from "./types";


export const FoodActionCreators = {
	setFood: (food: IFoods[]): SetFoodAction => ({ type: FoodActionsEnum.SET_FOOD, payload: food }),
	setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: FoodActionsEnum.SET_IS_LOADING, payload: payload }),
	setError: (payload: string): SetErrorAction => ({ type: FoodActionsEnum.SET_ERROR, payload: payload }),
	setPage: (payload: number): SetFoodPage => ({type:FoodActionsEnum.SET_FOOD_PAGE, payload: payload}),
	setTypeFood: (payload: string): SetFoodType => ({type:FoodActionsEnum.SET_FOOD_TYPE, payload: payload}),
	setPaginateCount: (payload: number): SetPaginateCountAction => ({type:FoodActionsEnum.SET_PAGINATE_COUNT, payload: payload}),

	getFood: (page: number = 1, type: string = '') => async (dispatch: AppDispatch) => {
		dispatch(FoodActionCreators.setIsLoading(true))
		const response = await axios.get<IFood>(`http://localhost:8080/api/food`, {
			params:{
				page: page,
				limit: 10,
				type: type
			}
		})
		const {totalDocs, docs} = response.data
		console.log(response.data)
		dispatch(FoodActionCreators.setPaginateCount(totalDocs))
		dispatch(FoodActionCreators.setFood(docs))
		dispatch(FoodActionCreators.setIsLoading(false))
	}
}
