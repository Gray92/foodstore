import { Row } from "antd";
import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ShopCard from "./ShopCard";

const ShopList: FC = () => {
	
	const { food } = useTypedSelector(state => state.food)

	return (
		<div className="site-card-wrapper">
			<Row gutter={16}>
				{food.map(f => <ShopCard
					key={f._id}
					foodId={f._id}
					type={f.type}
					name={f.name}
					desqription={f.desqription}
					img={f.img}
					price={f.price}
				/>)}
			</Row>
		</div>
	)
}

export default ShopList;