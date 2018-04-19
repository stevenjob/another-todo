import styled from 'styled-components';
import Item from './Item';

const DeleteButton = styled.button`
  display: none;
  position: absolute;
  top: 0;
  right: 1rem;
  bottom: 0;
  width: 4rem;
  height: 4rem;
  margin: auto 0;
  font-size: 3rem;
  color: #cc9a9a;
  margin-bottom: 1.1rem;
  padding: 0;
  border: 0;
  outline: 0;
  background: none;
  appearance: none;

  &:after {
    content: '×';
  }

  ${Item}:hover & {
    display: block;
  }
`;

export default DeleteButton;
