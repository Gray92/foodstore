import Layout, { Content } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';


const App: FC = () => {
	return (
		<Provider store={store}>
			<Layout>
				<Navbar />
				<Content>
					<AppRouter />
				</Content>
			</Layout>
		</Provider >
	);
}

export default App;
