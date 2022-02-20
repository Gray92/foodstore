import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Row } from 'antd';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useDispatch } from 'react-redux';

const Navbar: FC = () => {
	const dispatch = useDispatch()

	const { isAuth, user } = useTypedSelector(state => state.auth)

	const navigate = useNavigate()
	//const goBack = () => navigate(-1)

	const goClouser = () => navigate('/basket')

	const logout = () => {
		dispatch(AuthActionCreators.logout())
	}


	return (
		<Layout.Header>

			{isAuth
				&&
				<Row justify='start'>
					<div className="logo" style={{ color: 'white' }}>{user.email}</div>
					<Menu theme="dark" mode="horizontal" selectable={false}>
						<div className='panel'>
							<Menu.Item key="1" onClick={() => logout()}>Выйти</Menu.Item>
							<Menu.Item key="2" onClick={goClouser}>Корзина</Menu.Item>
						</div>

					</Menu>
				</Row>
			}

		</Layout.Header >
	);
}

export default Navbar;