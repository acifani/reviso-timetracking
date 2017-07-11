import React from 'react';
import FilterableEntryList from '../components/FilterableEntryList';

const ENTRIES = [
  {id: 1, customer: 'customer1', hourly_rate: 10, length: 60},
  {id: 2, customer: 'customer2', hourly_rate: 15, length: 120},
  {id: 3, customer: 'customer3', hourly_rate: 10, length: 30},
];

const Manage = () => (
    <div>
      <h1>Manage</h1>
      <FilterableEntryList entries={ENTRIES}/>
    </div>
);

export default Manage;
