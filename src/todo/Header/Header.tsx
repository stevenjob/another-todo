import * as React from 'react';
import HeaderInput from './HeaderInput';
import ToggleAll from './ToggleAll';
import styled from 'styled-components';

export interface HeaderProps {
  onSave: (text: string) => any;
  allDone: boolean;
  toggleTodosIsDone: (set: boolean) => any;
}

const HeaderWrapper = styled.header`
  display: flex;
  height: 6rem;
`;

const placeholder = 'What should be done?';

class Header extends React.Component<HeaderProps, {}> {
  handleCheckboxChange = () => {
    const { toggleTodosIsDone, allDone } = this.props;
    toggleTodosIsDone(!allDone);
  };

  render() {
    const { onSave, allDone } = this.props;
    return (
      <HeaderWrapper>
        <ToggleAll checked={allDone} onChange={this.handleCheckboxChange} />
        <HeaderInput placeholder={placeholder} onSave={onSave} isNewTodo />
      </HeaderWrapper>
    );
  }
}

export default Header;
