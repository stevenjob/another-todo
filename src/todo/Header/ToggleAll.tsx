import * as React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

export interface ToggleAllProps {
  checked: boolean;
  onChange: () => void;
}

const ToggleInput = styled.input.attrs({
  type: 'checkbox',
  style: (props: any) => ({
    color: props.checked
      ? props.theme.primary
      : lighten(0.6, props.theme.primary)
  })
})`
  text-align: center;
  border: none;
  width: 4rem;
  appearance: none;
  margin: 0;
  transform: rotate(90deg);
  display: flex;
  flex-direction: column;
  outline: none;
  &:before {
    content: '❯';
    font-size: 2.2rem;
    justify-self: center;
    align-self: center;
    width: 100%;
    height: 100%;
    padding-top: 1rem;
  }
`;

class ToggleAll extends React.Component<ToggleAllProps, any> {
  render() {
    return (
      <ToggleInput
        onChange={this.props.onChange}
        checked={this.props.checked}
      />
    );
  }
}

export default ToggleAll;
