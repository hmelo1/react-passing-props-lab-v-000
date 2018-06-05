import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ filters, updateFilterCallback, currentFilter, fruit }) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={updateFilterCallback} />
      <FilteredFruitList
        filter={currentFilter} />
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: null,
  currentFilter: null,
  updateFilterCallback: function() {}
}

export default FruitBasket;
