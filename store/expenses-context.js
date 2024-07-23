import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 99.99,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e2',
    description: 'Food',
    amount: 55.99,
    date: new Date('2022-04-01'),
  },
  {
    id: 'e3',
    description: 'Dating',
    amount: 12.99,
    date: new Date('2023-12-21'),
  },
  {
    id: 'e4',
    description: 'Some of my needs',
    amount: 100.99,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e5',
    description: 'Some',
    amount: 18.99,
    date: new Date('2022-02-01'),
  },
  {
    id: 'e6',
    description: 'Some',
    amount: 18.99,
    date: new Date('2022-02-01'),
  },
  {
    id: 'e7',
    description: 'Some',
    amount: 18.99,
    date: new Date('2022-02-01'),
  },
  {
    id: 'e8',
    description: 'Some',
    amount: 18.99,
    date: new Date('2022-02-01'),
  },
  {
    id: 'e9',
    description: 'Some',
    amount: 45.123,
    date: new Date('2022-02-01'),
  },
  {
    id: 'e10',
    description: 'Some',
    amount: 18.99,
    date: new Date('2022-02-01'),
  },
  {
    id: 'e11',
    description: 'Some',
    amount: 18.99,
    date: new Date('2024-07-20'),
  },
  {
    id: 'e12',
    description: 'Some',
    amount: 18.99,
    date: new Date('2024-07-21'),
  },
  {
    id: 'e13',
    description: 'jULY',
    amount: 18.99,
    date: new Date('2024-07-23'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (expenseData) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, expenseData) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      if (updateableExpenseIndex === -1) {
        return state; // No expense found to update
      }
      const updatableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
