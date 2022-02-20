import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BasketAction } from "../actions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IBasket } from "../models/IUser";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import BasketCard from "./BasketCard";


const BasketList: FC = () => {
	const dispatch = useDispatch()

	const { basket } = useTypedSelector(state => state.auth.user)

	useEffect(() => {
		dispatch(AuthActionCreators.auth())
	},[])

	const getFoodId = (id: string, foodId: string) => {
		BasketAction.deleteFood(id, foodId)
		dispatch(AuthActionCreators.auth())
	}

	return (
		<div className="basket_list">
			{basket.length === 0
				?
				<h3>Корзина пуста</h3>
				:
				basket.map((b: IBasket) => <BasketCard
					key={b._id}
					foodId={b._id}
					name={b.name}
					price={b.price}
					postFoodId={getFoodId} />)
			}
		</div>
	)

}

export default BasketList;