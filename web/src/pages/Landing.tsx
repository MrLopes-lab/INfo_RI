import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';

import '../styles/pages/landing.css';

import logoImg from '../images/Logo.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <div className="logo">
          <img src={logoImg} alt="Pinheiro de Queiroz" />
        </div>

        <div className="main-text-grid">
          <main>
            <h1>Informatização do Registro de Imoveis</h1>
          </main>
        </div>

        <div className="location-grid">
          <div className="location-text">
            <strong>Conceição do Araguaia</strong>
            <span>Pará</span>
          </div>
          <div className="location-icon">
            <FiMapPin color="#ffffff" size={56} />
          </div>
        </div>

        <div className="user-form-grid">
          <form className="user-form">
            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
              // value={}
              // onChange={event => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="name">Senha</label>
              <input
                id="password"
                type="password"
              // value={}
              // onChange={event => setName(event.target.value)}
              />
            </div>
          </form>
        </div>

        <div className="enter-app-grid">
          <Link to="/app" className="enter-app">
            <FiArrowRight color="#5C8599" size={36}  />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;