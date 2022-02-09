import { Layout, Menu } from 'antd';

import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: FC = () => {
	const auth = true

	const navigate = useNavigate()
	const goBack = () => navigate(-1)

	const goClouser = () => navigate('/basket')


	return (
		<Layout.Header>
			{auth
				?
				<Menu theme="dark" mode="horizontal" selectable={false}>
					<Menu.Item key="1" onClick={goBack}>Выйти</Menu.Item>
					<Menu.Item key="2" onClick={goClouser}>Корзина</Menu.Item>
				</Menu>
				:
				<Menu theme="dark" mode="horizontal" selectable={false}>
					<Menu.Item key="3" onClick={goBack}>Войти</Menu.Item>
				</Menu>
			}


		</Layout.Header>
	);
}

export default Navbar;