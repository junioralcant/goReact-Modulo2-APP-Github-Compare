import React from 'react';

import { Container, Form } from './style';

import CompareList from '../../Components/CompareList/index';

import logo from '../../assets/logo.png';

const Main = () => (
  <Container>
    <img src={logo} alt="GitHub Compare" />

    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">Ok</button>
    </Form>

    <CompareList />
  </Container>
);

export default Main;
