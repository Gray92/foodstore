import Layout, { Content, Footer } from 'antd/lib/layout/layout';
import React, { FC, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import './App.css';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import { AuthActionCreators } from './store/reducers/auth/action-creators';



const App: FC = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(AuthActionCreators.auth())
	}, [])

	return (
		<Provider store={store}>
			<Layout >
				<Navbar />
				<Content>
					<AppRouter />
				</Content>
				<Footer className="footer">
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		</Provider >
	);
}

export default App;
