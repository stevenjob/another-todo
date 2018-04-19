import * as React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import styled, { ThemeProvider } from 'styled-components';
import TodoThemeModel from './TodoThemeModel';
import { lighten } from 'polished';

const TodoWrapper = styled.div`
  background-color: ${(props: any) => props.theme.background};
  min-width: 55rem;
  margin: 0 auto;
  max-width: 70rem;
  border: 0.1rem solid ${(props: any) => lighten(0.3, props.theme.secondary)};
  position: relative;
`;

interface TodoProps {
  startTodoThemeChange: any;
  theme: TodoThemeModel;
}

class Todo extends React.Component<TodoProps, {}> {
  constructor(props: TodoProps) {
    super(props);
    props.startTodoThemeChange();
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <TodoWrapper>
          <Header />
          <Main />
          <Footer />
        </TodoWrapper>
      </ThemeProvider>
    );
  }
}

export default Todo;
