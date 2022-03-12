import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IFoods } from "../models/IFood";
import { BasketActionCreators } from "../store/reducers/basket/action-creators";
import BasketCard from "./BasketCard";


const BasketList: FC = () => {

	const dispatch = useDispatch()
	const {basket} = useTypedSelector(state => state.basket)

	

	const getFoodId = (id: string, foodId: string) => {
		dispatch(BasketActionCreators.deleteFood(id, foodId))
	}


	return (
		<div className="basket_list">
			{basket.length === 0
				?
				<h3>Корзина пуста</h3>
				:
				basket.map((b: IFoods) => <BasketCard
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