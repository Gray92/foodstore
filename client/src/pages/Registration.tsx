import { Row, Button, Form, Input } from 'antd';
import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { rules } from '../utils/rules';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useDispatch } from 'react-redux';


const Registration: FC = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	const navigate = useNavigate()
	const goLogin = () => navigate('/login')


	const clickButtonHandler = (e:React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		dispatch(AuthActionCreators.registration(email, password))
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
						<Input value={email} onChange={(e) => {setEmail(e.target.value)}} />
					</Form.Item>

					<Form.Item
						label="Пароль"
						name="password"
						rules={[rules.required('Пожалуйста, введите ваш пароль')]}
					>
						<Input.Password value={password} onChange={(e) => {setPassword(e.target.value)}} />
					</Form.Item>

					<Form.Item >
						<Button type="primary" htmlType="submit" onClick={(e) => clickButtonHandler(e) }>
							Создать
						</Button>
						<Button type="link" htmlType="button" onClick={() => goLogin()}  >
							Войти
						</Button>
					</Form.Item>
				</Form>
			</Row>

		</div>
	)
}

export default Registration;