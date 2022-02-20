import { Pagination, Row } from "antd";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { FoodActionCreators } from "../store/reducers/food/action-creators";


const ShopPagination: FC = () => {
	const dispatch = useDispatch()

	const { page } = useTypedSelector(state => state.food)

	const onChange = (page: number) => {
		dispatch(FoodActionCreators.setPage(page))
	}

	return (
		<Row justify='center' align='middle' className="pagination">
			<Pagination defaultCurrent={1} onChange={onChange} current={page} total={30} />
		</Row>
	)
}

export default ShopPagination;