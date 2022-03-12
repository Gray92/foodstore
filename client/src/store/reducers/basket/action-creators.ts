import axios from "axios";
import { AppDispatch } from "../..";
import { IFoods } from "../../../models/IFood";
import {
	AddBasketAction,
	BasketActionEnum,
	SetErrorBasketAction,
	SetIsLoadingBasketAction
}
	from "./types";


export const BasketActionCreators = {
	setBasketFood: (payload: IFoods[]): AddBasketAction => ({ type: BasketActionEnum.ADD_BASKET_FOOD, payload: payload }),
	setIsLoading: (payload: boolean): SetIsLoadingBasketAction => ({ type: BasketActionEnum.SET_BASKET_IS_LOADING, payload: payload }),
	setError: (payload: string): SetErrorBasketAction => ({ type: BasketActionEnum.SET_BASKET_ERROR , payload: payload }),

	plusFood: (userId: string, foodId: string) => async (dispatch: AppDispatch) => {
		try{
			dispatch(BasketActionCreators.setIsLoading(true));
			const response = await axios.post('http://localhost:8080/api/basket', { userId: userId, id: foodId });
			dispatch(BasketActionCreators.setBasketFood(response.data.basket))
			dispatch(BasketActionCreators.setIsLoading(false));
		}catch (e:any){
			dispatch(BasketActionCreators.setError(e.response.data.message))
			dispatch(BasketActionCreators.setIsLoading(false));
		}
	},

	deleteFood: (userId: string, foodId: string) => async(dispatch: AppDispatch) => {
		try{
			dispatch(BasketActionCreators.setIsLoading(true));
			const response = await axios.put('http://localhost:8080/api/basket', { userId: userId, id: foodId });
			dispatch(BasketActionCreators.setBasketFood(response.data.basket))
			dispatch(BasketActionCreators.setIsLoading(false));
		} catch (e:any){
			dispatch(BasketActionCreators.setError(e.response.data.message))
			dispatch(BasketActionCreators.setIsLoading(false));
		}

	}
}
