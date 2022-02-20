import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Basket from '../pages/Basket';
import Shop from '../pages/Shop';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Login from '../pages/Login';
import Registration from '../pages/Registration';

const AppRouter: FC = () => {
	const { isAuth } = useTypedSelector(state => state.auth)



	return (
			isAuth
				?
				<Routes>
					<Route path="/shop" element={<Shop />} />
					<Route path="/basket" element={<Basket />} />
					<Route path="*" element={<Navigate to="/shop" replace />} />
				</Routes>
				:
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/registration" element={<Registration />} />
					<Route path="*" element={<Navigate to="/login" replace />} />
				</Routes>

	);
};

export default AppRouter;