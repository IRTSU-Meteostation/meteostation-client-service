import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      // код для авторизации

      // После успешной авторизации:
      navigate('/home');
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h1>Авторизация</h1>
        <input type="email" placeholder="Электронная почта" required />
        <input type="password" placeholder="Пароль" required />
        <a className="forgot-password" href="#">Забыли пароль?</a>
        <button type="submit">Войти</button>
        <a className="register-link" href="#">Зарегистрироваться</a>
      </form>

    </div>
  );
};

 
