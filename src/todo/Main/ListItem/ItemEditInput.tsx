import TextInput from 'src/todo/TextInput';
import styled from 'styled-components';

const ItemEditInput = styled(TextInput)`
  color: ${props => props.theme.primary};
  padding-left: 6rem;
  height: 100%;
  font-size: 2.4rem;
  box-shadow: inset 0 -0.1rem 0.5rem 0 rgba(0, 0, 0, 0.2);
`;

export default ItemEditInput;
