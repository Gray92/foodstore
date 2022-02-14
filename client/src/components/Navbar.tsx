import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Row } from 'antd';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Navbar: FC = () => {
	
	const { isAuth } = useTypedSelector(state => state.auth)

	const navigate = useNavigate()
	const goBack = () => navigate(-1)

	const goClouser = () => navigate('/basket')


	return (
		<Layout.Header>

			{isAuth
				?
				<Row justify='start'>
					<div className="logo" style={{ color: 'white' }}>Никнейм</div>
					<Menu theme="dark" mode="horizontal" selectable={false}>
						<Menu.Item key="1" onClick={goBack}>Выйти</Menu.Item>
						<Menu.Item key="2" onClick={goClouser}>Корзина</Menu.Item>
					</Menu>
				</Row>
				:
				<>
					<Menu theme="dark" mode="horizontal" selectable={false}>
						<Menu.Item key="3">Войти</Menu.Item>
						<div key="34">     </div>
					</Menu>
				</>
			}

		</Layout.Header >
	);
}

export default Navbar;