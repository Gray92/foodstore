import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Basket from '../pages/Basket';
import Login from '../pages/Login';
import Shop from '../pages/Shop';


const AppRouter: FC = () => {
	const auth = true

	return (
		auth
			?
			<Routes>
				<Route path="/shop" element={<Shop />} />
				<Route path="/basket" element={<Basket />} />
				<Route path="*" element={<Navigate to="/shop" replace />} />
			</Routes>
			:
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<Navigate to="/login" replace />} />
			</Routes>

	);
};

export default AppRouter;