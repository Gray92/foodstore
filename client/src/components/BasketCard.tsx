import { Button, Card, Layout, Row } from "antd";
import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

export interface BasketCardProps {
	foodId: string,
	name: string,
	price: number,
	postFoodId: (id:string, foodId:string) => void
}

const BasketCard = ({ foodId, name, price, postFoodId }: BasketCardProps) => {
	
	const { id } = useTypedSelector(state => state.auth.user)



	return (
		<Layout>
			<Card className='basket_card'>
				<Row justify="space-between" align="middle" >
					<div>{name}</div>
					<div className="basket_card__block">
						<Button  onClick={() =>postFoodId(id, foodId)}>x</Button>
						<div className="basket_card__block__element">{price}$</div>
					</div>
				</Row>
			</Card>
		</Layout >
	)
}

export default BasketCard;