import React, { FC, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Basket from '../pages/Basket';
import Shop from '../pages/Shop';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';

const AppRouter: FC = () => {
	const { isAuth } = useTypedSelector(state => state.auth)

	useEffect(()=>{
		AuthActionCreators.auth()
	},[])

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