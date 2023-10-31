import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Input } from "@chakra-ui/react";

const Register: React.FC = () => {
	const navigate = useNavigate();
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			setError(true);
			return;
		}

		// код для регистрации

		// После успешной регистрации:
		navigate("/home");
	};

	return (
		<div className='register-page'>
			<form onSubmit={handleSubmit}>
				<h1>Регистрация</h1>
				<input type='text' placeholder='Ваше имя' required />
				<input type='email' placeholder='Электронная почта' required />
				<Input
					type='password'
					placeholder='Пароль'
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Input
					size='md'
					type='password'
					placeholder='Повторите пароль'
					required
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<label>
					<input type='checkbox' required />Я согласен на обработку персональных
					данных
				</label>
				<button type='submit'>Создать аккаунт</button>
			</form>
		</div>
	);
};

export default Register;
