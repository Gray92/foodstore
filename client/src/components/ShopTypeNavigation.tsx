import { Button, PageHeader, Row } from "antd";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { FoodActionCreators } from "../store/reducers/food/action-creators";
import { shopButton } from "../utils/shopButtons";

const ShopTypeNavigation: FC = () => {
	const { type } = useTypedSelector(state => state.food)
	
	const dispatch = useDispatch()

	return (
		<Row justify='center' align='middle'>
			<PageHeader extra={
				shopButton.map(
					(button) => type === button.type
						?
						<Button
							type="primary"
							key={button.key}
							onClick={() => dispatch(FoodActionCreators.setTypeFood(button.type))}
						>
							{button.value}
						</Button>
						:
						<Button
							key={button.key}
							onClick={() => dispatch(FoodActionCreators.setTypeFood(button.type))}
						>
							{button.value}
						</Button>
				)
			}
			/>
		</Row>
	)
}

export default ShopTypeNavigation;