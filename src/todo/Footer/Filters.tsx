import * as React from 'react';
import { TodoFilterTypes } from '../store/filter';
import styled from 'styled-components';
import Filter from './FilterContainer';

export interface FiltersProps {}

const FiltersList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
`;

export default class Filters extends React.Component<FiltersProps, any> {
  render() {
    return (
      <FiltersList>
        {Object.keys(TodoFilterTypes).map(key => {
          return <Filter key={key} filter={TodoFilterTypes[key]} />;
        })}
      </FiltersList>
    );
  }
}
