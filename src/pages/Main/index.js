import React, { Component } from 'react';

import moment from 'moment';

import { Container, Form } from './style';

import api from '../../services/api';

import CompareList from '../../Components/CompareList/index';

import logo from '../../assets/logo.png';

export default class Main extends Component {
  state = {
    loading: false, // variável para mostrar o símbolo de loading
    repositoryError: false,
    repositoryInput: '',
    repositores: [],
  };

  handleAddReapisitory = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      // formatando o campo de data
      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositores: [...this.state.repositores, repository],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
      console.log(err);
    }finally{
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />


        <Form withError={this.state.repositoryError} onSubmit={this.handleAddReapisitory}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">{this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'Ok'}</button>
        </Form>

        <CompareList repositores={this.state.repositores} />
      </Container>
    );
  }
}
