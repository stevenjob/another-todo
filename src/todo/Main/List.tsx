import * as React from 'react';
import ListItem from './ListItem';
import Todo from '../TodoModel';
import styled from 'styled-components';

export interface ListProps {
  todos: Todo[];
  actions: any;
}

const ListStyle = styled.ul`
  font-size: 2.4rem;
  border-bottom: 0.1rem solid #ededed;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default class List extends React.Component<ListProps, any> {
  renderTodo = (todo: Todo, index: number) => {
    return (
      <ListItem
        key={todo.id}
        index={index}
        todo={todo}
        {...this.props.actions}
      />
    );
  };

  render() {
    return <ListStyle>{this.props.todos.map(this.renderTodo)}</ListStyle>;
  }
}
