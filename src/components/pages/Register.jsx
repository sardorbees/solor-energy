import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import logo from '../assets/img/logo/12.png';
import '../assets/css/Register.css'; // ✅ Подключение CSS

export default function Register() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const [showOld, setShowOld] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([k, v]) => v && formData.append(k, v));

    try {
      await API.post("api/accounts/register/", formData);
      alert("✅ Регистрация прошла успешно");
      window.dispatchEvent(new Event("authChanged"));
      navigate("/login");
    } catch (err) {
      alert("Ошибка регистрации");
    }
  };

  return (
    <>
      <div className="page-header parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-header-box">
                <br /><br /><br />
                <h1 className="text-anime">Регистрация</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} encType="multipart/form-data" autoComplete="off">
        <img src={logo} alt="logo" />
        <input
          name="first_name"
          type="name"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Эл. адрес"
          onChange={handleChange}
          required
        />
        <div className="password-container">
          <input
            name="password"
            type={showOld ? "text" : "password"}
            placeholder="Пароль"
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setShowOld(!showOld)}
            className="theme-togglee"
            aria-label="Показать или скрыть пароль"
          >
            {showOld ? "🙈" : "👁️"}
          </button>
        </div>
        <input
          name="username"
          type="name"
          placeholder="Имя пользователя"
          onChange={handleChange}
          required
        />
        <input
          name="last_name"
          type="name"
          placeholder="Фамилия"
          onChange={handleChange}
          required
        />
        <input
          name="phone_number"
          type="phone"
          placeholder="Телефон"
          onChange={handleChange}
          required
        />
        <input
          name="image"
          type="file"
          onChange={handleChange}
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
}
