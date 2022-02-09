import Layout, { Content } from 'antd/lib/layout/layout';
import React, {FC} from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import './App.css';

const App: FC = () => {
  return (
    <Layout>
		<Navbar />
		<Content>
			<AppRouter />
		</Content>
    </Layout>
  );
}

export default App;
