import { Spin } from "antd";
import React from "react";

const Spiner = () => {
	return (
		<div className='h100'>
			<div className='spiner'>
				<Spin size="large" />
			</div>
		</div>

	)
}

export default Spiner;