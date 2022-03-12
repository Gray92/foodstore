import { Layout, Card, Col, Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { BasketActionCreators } from '../store/reducers/basket/action-creators';


interface ShopCardProps {
	foodId: string,
	type: string,
	name: string,
	desqription: string,
	price: number,
	img?: string
}

const ShopCard = ({ foodId, name, desqription, price, img }: ShopCardProps) => {
	const dispatch = useDispatch()

	const { id } = useTypedSelector(state => state.auth.user)

	const addFood = () => {
		dispatch(BasketActionCreators.plusFood(id, foodId))
	}

	return (
		<Layout>
			<Col span={8}>
				<Card
					className="card"
					cover={
						<img
							alt="example"
							src={`http://localhost:8080/${img}`}
						/>
					}
				>
					<div className='card__title'>{name}</div>
					<div>
						<div className='card__desq'>
							{desqription}
						</div>
						<div className='card__bottom'>
							<div className='card__bottom__price'>{price}$</div>
							<Button
								onClick={() => addFood()}
								type="primary"
							>
								В корзину
							</Button>
						</div>
					</div>

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