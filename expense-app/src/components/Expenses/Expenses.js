import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = ({ items }) => {
  const [filterYear, setFilterYear] = useState('2020');

  const changeFilterYearHandler = (filterYear) => {
    setFilterYear(filterYear);
  };

  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear().toString() === filterYear
  );
  
  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => {
      return (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}></ExpenseItem>
      );
    })
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selectedFilterYear={filterYear}
        onChangeFilterYear={changeFilterYearHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
