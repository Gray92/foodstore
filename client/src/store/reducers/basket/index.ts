import { BasketAction, BasketActionEnum, BasketState } from "./types";


const initialState: BasketState = {
	basket: [],
	isLoading: false,
	error: ''
}


export default function basketReducer(state = initialState, action: BasketAction): BasketState {
	switch (action.type) {
		case BasketActionEnum.ADD_BASKET_FOOD:
			return { ...state, basket: [ ...action.payload] }
		case BasketActionEnum.DELETE_BASKET_FOOD:
			return { ...state, basket: [...state.basket.filter(item => item._id !== action.payload)] }
		case BasketActionEnum.CLEAR_BASKET:
			return { ...state, basket: [] }
		case BasketActionEnum.SET_BASKET_ERROR:
			return { ...state, isLoading: false, error: action.payload }
		case BasketActionEnum.SET_BASKET_IS_LOADING:
			return { ...state, isLoading: action.payload }
		default:
			return state;
	}
}
