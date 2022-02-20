import { Layout, Card, Col, Button } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { BasketAction } from '../actions';
import { useTypedSelector } from '../hooks/useTypedSelector';


interface ShopCardProps {
	foodId: string,
	type: string,
	name: string,
	desqription: string,
	price: number,
	img?: string
}

const ShopCard = ({ foodId, name, desqription, price, img }: ShopCardProps) => {
	

	const { id } = useTypedSelector(state => state.auth.user)

	const addFood = () => {
		BasketAction.plusFood(id, foodId)
	}

	return (
		<Layout>
			<Col span={8}>
				<Card
					style={{ width: '300px' }}
					className="card"
					cover={
						<img
							alt="example"
							src={img}
						/>
					}
					actions={[
						<div>{price}$</div>,
						<Button
							onClick={() => addFood()}
							type="primary"
						>
							В корзину
						</Button>,
					]}
				>
					<Meta
						title={name}
						description={desqription}
					/>
				</Card>
			</Col>
		</Layout>
	)
}

export default ShopCard;




export interface ShopItemProps<T> {
	_id: string,
	type: string,
	name: string,
	desqription: string,
	price: string,
	img?: string
}