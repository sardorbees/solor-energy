import React, { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import '../assets/css/all.min.css'
import '../assets/css/animate.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/custom.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/slicknav.min.css'
import '../assets/css/swiper-bundle.min.css'

import logo from '../assets/img/icon/telegram.png'

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({});
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("api/accounts/profile/")
      .then((res) => {
        setProfile(res.data);
        setForm(res.data);
      })
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (form.first_name) formData.append("first_name", form.first_name);
    if (form.last_name) formData.append("last_name", form.last_name);
    if (form.phone_number) formData.append("phone_number", form.phone_number);
    if (form.image instanceof File) formData.append("image", form.image);

    try {
      await API.put("api/accounts/edit-profile/", formData);
      alert("✅ Профиль успешно обновлён");
      setEditing(false);
      const updated = await API.get("api/accounts/edit-profile/");
      setProfile(updated.data);
    } catch (err) {
      console.error("Ошибка обновления:", err.response?.data);
      alert("Ошибка обновления профиля");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.dispatchEvent(new Event("authChanged"));
    navigate("/login");
  };

  if (!profile) return <p>Загрузка...</p>;

  return (
    <div style={{ maxWidth: '100%', }}>
      <h2>Ваш Профил</h2>
      <div class="page-header parallaxie">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="page-header-box">
                <br />
                <h1 class="text-anime">Изменить профиль</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {editing ? (
        <form onSubmit={handleSave} encType="multipart/form-data">
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3" className="ff">
                  <h6 class="mb-0">Полное имя</h6>
                  <h6>{profile.first_name}</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    name="first_name"
                    placeholder="Имя"
                    value={form.first_name || ""}
                    onChange={handleChange}
                    style={{ border: '1px solid black', width: '135%' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" required
                  />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3" className="ff">
                  <h6 class="mb-0">Электронная почта</h6>
                  <h6>{profile.email}</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    name="last_name"
                    placeholder="Фамилия"
                    value={form.last_name || ""}
                    onChange={handleChange}
                    style={{ border: '1px solid black', width: '135%' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" required
                  />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3" className="ff">
                  <h6 class="mb-0">Телефон номер</h6>
                  <h6>{profile.phone_number}</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    name="phone_number"
                    placeholder="Телефон"
                    value={form.phone_number || ""}
                    onChange={handleChange}
                    style={{ border: '1px solid black', width: '135%' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" required
                  />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3" className="ff">
                  <h6 class="mb-0">Ваша фото</h6>
                  {profile.image && (
                    <img
                      src={profile.image}
                      alt="avatar"
                      width={150}
                      height={150}
                      class="rounded-circle"
                      style={{ borderRadius: "50%" }}
                    />
                  )}
                </div>
                <div class="col-sm-9 text-secondary" style={{ marginTop: '55px', width: '135%' }}>
                  <input name="image" type="file" onChange={handleChange} style={{ border: '1px solid black' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-12">
                  <button type="submit" class="btn-default">💾 Сохранить</button>
                  <br /><br />
                  <button type="button" onClick={() => setEditing(false)} class="btn-default">
                    ❌ Отменить
                  </button>
                  <br /><br /><br />
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <>
          <div class="main-body">
            <nav aria-label="breadcrumb" class="main-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/" style={{ color: 'var(--text-color)' }}>Основный</a></li>
                <li class="breadcrumb-item"><a style={{ color: 'var(--text-color)' }}>Вашь Профиль</a></li>
                <li class="breadcrumb-item active" aria-current="page" style={{ color: 'var(--text-color)' }}>{profile.first_name}</li>
                <li class="breadcrumb-item active" aria-current="page" style={{ color: 'var(--text-color)' }}><a style={{ color: 'var(--text-color)' }}>Для заказов</a></li>
                <li class="breadcrumb-item active" aria-current="page" style={{ color: 'var(--text-color)' }}><a style={{ color: 'var(--text-color)' }}>Все Заказы</a></li>
                <li class="breadcrumb-item active" aria-current="page" style={{ color: 'var(--text-color)' }}><a href="/comment" style={{ color: 'var(--text-color)' }}>Написать комментария</a></li>
              </ol>
            </nav>
            <div class="row gutters-sm">
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      {profile.image && (
                        <img
                          src={profile.image}
                          alt="avatar"
                          width={130}
                          height={130}
                          class="rounded-circle"
                          style={{ borderRadius: "50%" }}
                        />
                      )}
                      <div class="mt-3">
                        <h4>{profile.first_name}</h4>
                        <p class="text-secondary mb-1">{profile.email}</p>
                        <p class="text-muted font-size-sm">{profile.phone_number}</p>
                        <div className="g">
                          <a href="https://www.instagram.com/solarenerjiproject?igsh=bmozcmUxNGMyMHRp"><button class="btn btn-outline-primary" style={{ fontSize: '14px' }}>Подписатся наш Инстаграмм</button></a>
                          <a href="https://t.me/Enerjiprojectadmin" ><button class="btn btn-outline-primary" style={{ fontSize: '15px' }}>Написать с телеграмм</button></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mt-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Наш Веб-сайт</h6>
                      <a href="" class="text-secondary">http://enery-project.uz</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Инстаграм</h6>
                      <a href="https://www.instagram.com/solarenerjiproject?igsh=bmozcmUxNGMyMHRp" class="text-secondary">Enerjiprojectadmin</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0"><img src={logo} alt="" width={30} />Телеграмм</h6>
                      <a href="https://t.me/Enerjiprojectadmin" class="text-secondary">Enerjiprojectadmin</a>
                    </li>
                  </ul>
                </div>
                <br /><br />
                <button onClick={handleLogout} class="btn-default">🚪 Выйти из аккаунта</button>
              </div>
              <div class="col-md-8">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Полное имя</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {profile.first_name}
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Электронная почта</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {profile.email}
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Телефон номер</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        Телефон: {profile.phone_number}
                      </div>
                    </div>
                    <hr />
                    <button onClick={() => navigate("/change-password")} class="btn-default">🔑 Сменить пароль</button>
                    <br /><br /><br />
                    <button onClick={() => setEditing(true)} class="btn-default">✏️ Изменить профиль</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}