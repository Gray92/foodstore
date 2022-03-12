import axios from "axios";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import { BasketActionCreators } from "../basket/action-creators";
import {
	AuthActionsEnum,
	SetAuthAction,
	SetErrorAction,
	SetIsLoadingAction,
	SetUserAction
} from "./types";

export const AuthActionCreators = {
	setUser: (user: IUser): SetUserAction => ({ type: AuthActionsEnum.SET_USER, payload: user }),
	setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionsEnum.SET_AUTH, payload: auth }),
	setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionsEnum.SET_IS_LOADING, payload: payload }),
	setError: (payload: string): SetErrorAction => ({ type: AuthActionsEnum.SET_ERROR, payload: payload }),

	registration: (email: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreators.setIsLoading(true));
			const response = await axios.post('http://localhost:8080/api/auth/registration', { email, password })
			dispatch(AuthActionCreators.setIsLoading(false));
			alert(response.data.message)
		} catch (e: any) {
			dispatch(AuthActionCreators.setError(e.response.data.message))
		}
	},

	login: (email: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreators.setIsLoading(true));
			const response = await axios.post('http://localhost:8080/api/auth/login', { email, password })
			dispatch(AuthActionCreators.setIsAuth(true))
			dispatch(AuthActionCreators.setUser(response.data.user))
			localStorage.setItem('token', response.data.token)
			dispatch(AuthActionCreators.setIsLoading(false))
		} catch (e: any) {
			dispatch(AuthActionCreators.setError(e.response.data.message))
		}
	},

	logout: () => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreators.setIsLoading(true));
			dispatch(AuthActionCreators.setIsAuth(false))
			dispatch(AuthActionCreators.setUser({} as IUser))
			localStorage.removeItem('token')
			dispatch(AuthActionCreators.setIsLoading(false));
		} catch (e: any) {
			dispatch(AuthActionCreators.setError(e.response.data.message))
		}
	},

	auth: () => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreators.setIsLoading(true));
			const response = await axios.get('http://localhost:8080/api/auth/auth',
				{ headers: { Authorization: `Bearer ${localStorage.token}` } }
			)
			dispatch(AuthActionCreators.setUser(response.data.user))
			dispatch(BasketActionCreators.setBasketFood(response.data.user.basket))
			dispatch(AuthActionCreators.setIsAuth(true))
			localStorage.setItem('token', response.data.token)
			dispatch(AuthActionCreators.setIsLoading(false));
		} catch (e: any) {
			dispatch(AuthActionCreators.setError(e.response.data.message))
			localStorage.removeItem('token');
		}
	}

	
}