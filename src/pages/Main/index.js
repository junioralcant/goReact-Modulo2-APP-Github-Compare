import React, { Component } from 'react';

import { Container, Form } from './style';

import api from '../../services/api';

import CompareList from '../../Components/CompareList/index';

import logo from '../../assets/logo.png';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositores: [],
  };

  handleAddReapisitory = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositores: [...this.state.repositores, response.data],
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />

        <Form onSubmit={this.handleAddReapisitory}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Ok</button>
        </Form>

        <CompareList repositores={this.state.repositores} />
      </Container>
    );
  }
}
