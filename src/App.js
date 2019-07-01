import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';

// import styled from 'styled-components';

// STYLE COMPONENT LOCAL

// const Title = styled.h1`
//   color: #f00;
//   font-size: 32px;
// `;

const App = () => (
  // Style Component Global
  <Fragment>
    <GlobalStyle />
    <div className="App" />
  </Fragment>

  //   <div className="App">
  //     <Title>Hello World</Title>
  //   </div>
);

export default App;
