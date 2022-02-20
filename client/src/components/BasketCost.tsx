import { Button, Row } from "antd";
import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IFood } from "../models/IFood";

const BasketCost: FC = () => {

	const { basket } = useTypedSelector(state => state.auth.user)
	

	return (
		<Row justify='end' align='middle' className='price_section' >
			<Row justify='center' align='middle' className='price_section__panel'>
				<div className='price_section__panel__cost'>Итог:
					{basket.map((a:IFood) => a.price).reduce((s, c) => s + c, 0)}$
				</div>
				<Button type="primary" disabled>Купить</Button>
			</Row>
		</Row>
	)
}

export default BasketCost;