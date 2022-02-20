import { Layout, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import ShopList from '../components/ShopList';
import ShopPagination from '../components/ShopPagination';
import ShopTypeNavigation from '../components/ShopTypeNavigation';
import Spiner from '../components/Spin';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { FoodActionCreators } from '../store/reducers/food/action-creators';


const Shop: FC = () => {
	const dispatch = useDispatch()

	const { error, isLoading, page, type } = useTypedSelector(state => state.food)

	useEffect(() => {
		dispatch(FoodActionCreators.getFood(page, type))
	}, [page, type])

	if (error) {
		return (<h1>Произошла ошибка {error}</h1>)
	}

	return (
		<Layout>
			<Row justify='center' align='middle' className='h100'>
				<Content className='content'>
					{isLoading
						?
						<Spiner />
						:
						<>
							<ShopTypeNavigation />
							<ShopList />
							<ShopPagination />
						</>
					}
				</Content>
			</Row >
		</Layout >
	)
}

export default Shop;