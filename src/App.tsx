import * as React from 'react';
import Todo from './todo/TodoContainer';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  margin: 13rem 0 4rem 0;
  position: relative;
`;

const Title = styled.h1`
  position: absolute;
  top: -17.5rem;
  width: 100%;
  font-size: 10rem;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  text-rendering: optimizeLegibility;
`;

class App extends React.Component {
  public render() {
    return (
      <Container>
        <Title>Todo list</Title>
        <Todo />
      </Container>
    );
  }
}

export default App;
