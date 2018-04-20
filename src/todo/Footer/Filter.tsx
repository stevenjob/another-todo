import * as React from 'react';
import styled from 'styled-components';
export interface FilterProps {
  selected: boolean;
  setFilter: (filter: string) => void;
  filter: string;
}

const FilterItem = styled.li`
  display: inline;
`;

const FilterLink = styled.a.attrs<{
  selected: boolean;
}>({
  style: (props: any) => ({
    borderColor: props.selected ? props.theme.secondary : 'transparent'
  })
})`
  margin: 0.3rem;
  padding: 0.3rem 0.7rem;
  text-decoration: none;
  border-width: 0.1rem;
  border-style: solid;
  border-radius: 0.3rem;
  cursor: default;
`;

export default class Filter extends React.Component<FilterProps, any> {
  handleClick = () => {
    this.props.setFilter(this.props.filter);
  };

  render() {
    return (
      <FilterItem>
        <FilterLink selected={this.props.selected} onClick={this.handleClick}>
          {this.props.filter}
        </FilterLink>
      </FilterItem>
    );
  }
}
