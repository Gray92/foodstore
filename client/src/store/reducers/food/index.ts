import { FoodAction, FoodActionsEnum, FoodState } from "./types";


const initialState: FoodState = {
	food: [],
	paginateCount: 0,
	error: '',
	isLoading: false,
	page: 1,
	type: ''
}

export default function foodReducer(state = initialState, action: FoodAction): FoodState {
	switch (action.type) {
		case FoodActionsEnum.SET_FOOD:
			return { ...state, food: action.payload }
		case FoodActionsEnum.SET_PAGINATE_COUNT:
			return { ...state, paginateCount: action.payload }
		case FoodActionsEnum.SET_ERROR:
			return { ...state, isLoading: false, error: action.payload }
		case FoodActionsEnum.SET_IS_LOADING:
			return { ...state, isLoading: action.payload }
		case FoodActionsEnum.SET_FOOD_PAGE:
			return { ...state, page: action.payload }
		case FoodActionsEnum.SET_FOOD_TYPE:
			return { ...state, type: action.payload, page: 1 }
		default:
			return state
	}
}