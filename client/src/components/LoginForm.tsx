import { Button, Form, Input } from 'antd';
import React, { FC, useState } from 'react';

import { rules } from '../utils/rules';

const LoginForm: FC = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	return (
		<Form>
			<Form.Item
				label="Email"
				name="email"
				rules={[rules.required('Пожалуйста, введите ваш Email')]}
			>
				<Input value={email} onChange={(e) => { }} />
			</Form.Item>

			<Form.Item
				label="Пароль"
				name="password"
				rules={[rules.required('Пожалуйста, введите ваш пароль')]}
			>
				<Input.Password value={password} onChange={(e) => { }} />
			</Form.Item>

			<Form.Item >
				<Button type="primary" htmlType="submit">
					Войти
				</Button>
				<Button type="link" htmlType="button" >
					Зарегистрироваться
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;