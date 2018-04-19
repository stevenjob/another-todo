import * as React from 'react';
import Todo from 'src/todo/TodoModel';
import ItemCheckbox from './ItemCheckbox';
import Item from './Item';
import ItemLabel from './ItemLabel';
import ItemEditInput from './ItemEditInput';

export interface ListItemProps {
  todo: Todo;
  updateTodo: (todo: Todo) => any;
  deleteTodo: (id: string) => any;
  index: number;
}

export interface ListItemState {
  isEditing: boolean;
}

class ListItem extends React.PureComponent<ListItemProps, ListItemState> {
  state = { isEditing: false };

  handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { todo, updateTodo } = this.props;
    updateTodo({ ...todo, isDone: event.target.checked });
  };

  handleDoubleClick = () => {
    this.setState({ isEditing: true });
  };

  handleTextChange = (text: string) => {
    const { todo, updateTodo } = this.props;
    updateTodo({ ...todo, text });
    this.setState({ isEditing: false });
  };

  render() {
    const { text, isDone, id } = this.props.todo;
    return (
      <Item>
        {this.state.isEditing ? (
          <ItemEditInput
            placeholder=""
            onSave={this.handleTextChange}
            text={text}
          />
        ) : (
          <>
            <ItemCheckbox
              data-id={id}
              checked={Boolean(isDone)}
              onChange={this.handleCheckboxChange}
            />
            <ItemLabel onDoubleClick={this.handleDoubleClick} isDone={isDone}>
              {text}
            </ItemLabel>
          </>
        )}
      </Item>
    );
  }
}

export default ListItem;
