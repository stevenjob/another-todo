import * as React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import styled, { ThemeProvider } from 'styled-components';
import TodoThemeModel from './TodoThemeModel';

const TodoWrapper = styled.div.attrs<{}>({
  style: (props: any) => ({
    backgroundColor: props.theme.background,
    borderColor: props.theme.lightSecondary
  })
})`
  min-width: 55rem;
  margin: 0 auto;
  max-width: 70rem;
  border-style: solid;
  border-radius: 0.1rem;
  position: relative;
`;

interface TodoProps {
  startTodoThemeChange: any;
  theme: TodoThemeModel;
}

class Todo extends React.PureComponent<TodoProps, {}> {
  constructor(props: TodoProps) {
    super(props);
    props.startTodoThemeChange();
  }

  render() {
    console.log('TODO');
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
