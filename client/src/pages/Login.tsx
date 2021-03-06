import { Row, Button, Form, Input} from 'antd';
import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { rules } from '../utils/rules';


const Login: FC = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	const navigate = useNavigate()
	const goRegistration = () => navigate('/registration')

	const clickButtonHandler = (e:React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		dispatch(AuthActionCreators.login(email, password))
	}

	return (
		<div>
			<Row justify='center' align='middle' className='h100'>
				<Form>
					<Form.Item
						label="Email"
						name="email"
						rules={[rules.required('Пожалуйста, введите ваш Email')]}
					>
						<Input value={email} onChange={(e) => {setEmail(e.target.value) }} />
					</Form.Item>

					<Form.Item
						label="Пароль"
						name="password"
						rules={[rules.required('Пожалуйста, введите ваш пароль')]}
					>
						<Input.Password value={password} onChange={(e) => {setPassword(e.target.value)}} />
					</Form.Item>

					<Form.Item >
						<Button type="primary" htmlType="submit" onClick={(e) => clickButtonHandler(e)}>
							Войти
						</Button>
						<Button type="link" htmlType="button" onClick={() => goRegistration()} >
							Зарегистрироваться
						</Button>
					</Form.Item>
				</Form>
			</Row>

		</div>
	)
}

export default Login;