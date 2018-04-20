import styled from 'styled-components';

const Item = styled.li.attrs({
  style: (props: any) => ({
    borderColor: props.theme.lightSecondary
  })
})`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  border-style: solid;
  border-width: 0;
  border-bottom-width: 0.1rem;
`;

export default Item;
