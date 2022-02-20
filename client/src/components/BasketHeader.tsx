import { Button, PageHeader, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const BasketHeader = () =>{
	const navigate = useNavigate()

	return(
		<Row justify='start' align='middle'>
		<PageHeader extra={
			<Button
				type='primary'
				onClick={()=>navigate(-1)}
			>
				Назад
			</Button>
		} />

	</Row>
	)
}

export default BasketHeader;
