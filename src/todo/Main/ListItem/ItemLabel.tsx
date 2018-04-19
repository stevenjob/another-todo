import styled from 'styled-components';

const ItemLabel = styled.label.attrs<{ isDone?: boolean }>({
  style: (props: any) => ({
    color: props.theme.primary
  })
})`
  white-space: pre-line;
  word-break: break-all;
  padding: 1.6rem 6rem 1.6rem 1.6rem;
  margin-left: 4.5rem;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
  text-decoration: ${(props: any) => (props.isDone ? 'line-through' : 'none')};
`;

export default ItemLabel;
