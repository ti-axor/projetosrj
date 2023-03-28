/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Button, Navbar, OverlayTrigger } from 'react-bootstrap';
import PropTypes from 'prop-types';
import logo from '../assets/download.jpg';
import Tooltip from '../components/Tooltip';
import NavigationBar from '../components/NavigationBar';

export default function Home(props) {
  const [user] = useState({ name: '', username: '' });
  const { children } = props;
  const { name, username } = user;

  const navbarName = () => {
    if (name && name !== '') {
      return `Olá, ${name}`;
    }
    return 'Acessar plataforma';
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <img src={logo} alt="logo axor" width="50px" style={{ borderRadius: '50%', paddingLeft: '10px' }} />
        <a style={{ padding: '0 20px 0 20px' }} className="navbar-brand" href="/">{navbarName()}</a>
        <NavigationBar />
        <OverlayTrigger placement="auto" overlay={Tooltip(name, username)}>
          <Button style={{ position: 'absolute', right: '20px' }} variant="info">
            Settings
          </Button>
        </OverlayTrigger>
      </Navbar>
      <br />
      <h5><center id="title">Comunicação interna Axor</center></h5>
      <br />
      {children}
      <br />
    </div>
  );
}

Home.propTypes = {
  children: PropTypes.node,
}.isRequired;
