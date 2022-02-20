import { Layout, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { FC } from 'react'
import BasketCost from '../components/BasketCost';
import BasketHeader from '../components/BasketHeader';
import BasketList from '../components/BasketList';

const Basket: FC = () => {

	return (
		<Layout>
			<Row justify='center' align='middle' className='h100'>
				<Content className='basket-card-wrapper'>

					<BasketHeader />
					<BasketList />
					<BasketCost />

				</Content>
			</Row>
		</Layout>
	)
}

export default Basket;