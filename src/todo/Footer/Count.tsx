import * as React from 'react';
import styled from 'styled-components';

export interface CountProps {
  activeCount: number;
}

const CountWrapper = styled.div`
  float: left;
  text-align: left;
`;

export default class Count extends React.Component<CountProps, any> {
  render() {
    const { activeCount } = this.props;
    return (
      <CountWrapper>
        {`${activeCount} item${activeCount === 1 ? '' : 's'} left`}
      </CountWrapper>
    );
  }
}
