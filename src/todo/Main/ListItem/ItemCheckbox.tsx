import styled from 'styled-components';

const ItemCheckbox = styled.input.attrs({
  type: 'checkbox'
})`
  outline: none;
  height: 4rem;
  text-align: center;
  width: 4rem;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  appearance: none;
  &:after {
    content: ${(props: any) => {
      return props.checked
        ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');`
        : `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');`;
    }};
  }
`;

export default ItemCheckbox;
