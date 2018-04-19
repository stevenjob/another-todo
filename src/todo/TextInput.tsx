import * as React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

export interface TextInputProps {
  placeholder: string;
  onSave: (text: string) => any;
  isNewTodo?: boolean;
  text?: string;
  className?: string;
}

export interface TextInputState {
  text: string;
}

const StyledInput = styled.input.attrs<{ '--placeholderColor'?: string }>({
  type: 'text',
  style: (props: any) => ({
    '--placeholderColor': lighten(0.6, props.theme.primary),
    color: props.theme.primary
  })
})`
  padding: 1.6rem;
  border: none;
  background-color: rgba(0, 0, 0, 0.003);
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 2.4rem;
  line-height: 1.4rem;
  outline: none;
  ::placeholder {
    color: var(--placeholderColor);
    font-style: italic;
  }
  font-smoothing: antialiased;
`;

class TextInput extends React.Component<TextInputProps, TextInputState> {
  constructor(props: TextInputProps) {
    super(props);
    this.state = {
      text: props.text || ''
    };
  }

  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value.trim();

    if (event.which === 13) {
      this.props.onSave(text);
      if (this.props.isNewTodo) {
        this.setState({ text: '' });
      }
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: event.target.value });
  };

  handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!this.props.isNewTodo) {
      this.props.onSave(event.target.value);
    }
  };

  render() {
    return (
      <StyledInput
        className={this.props.className}
        placeholder={this.props.placeholder}
        autoFocus
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default TextInput;
