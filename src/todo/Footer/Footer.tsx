import * as React from 'react';
import styled from 'styled-components';
import Count from './Count';
import Filters from './Filters';
import { lighten } from 'polished';

export interface FooterProps {
  activeCount: number;
}

const FooterWrapper = styled.footer.attrs<{}>({
  style: (props: any) => ({
    '--borderColor': lighten(0.3, props.theme.secondary)
  })
})`
  font-size: 1.4rem;
  color: #777;
  padding: 1rem 1.5rem;
  height: 4rem;
  text-align: center;
  border-top: 0.1rem solid var(--borderColor);
  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 5rem;
    overflow: hidden;
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2),
      0 0.8rem 0 -0.3rem var(--borderColor),
      0 0.9rem 0.1rem -0.3rem rgba(0, 0, 0, 0.2),
      0 1.6rem 0 -0.6rem var(--borderColor),
      0 1.7rem 0.2rem -0.6rem rgba(0, 0, 0, 0.2);
  }
`;

export default class Footer extends React.Component<FooterProps, any> {
  render() {
    return (
      <FooterWrapper>
        <Count activeCount={this.props.activeCount} />
        <Filters />
      </FooterWrapper>
    );
  }
}
