import styled from 'styled-components';
import TextInput from 'src/todo/TextInput';

const HeaderInput = styled(TextInput).attrs<{ color?: string }>({
  style: (props: any) => ({
    color: props.theme.primary
  })
})`
  line-height: 1.4rem;
  margin-left: 0.5rem;
`;

export default HeaderInput;
