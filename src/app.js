import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
    description: 'Water bill',
    note: 'for September',
    amount: 25,
    createdAt: 5
}));
store.dispatch(addExpense({
    description: 'Gas bill',
    note: 'for September',
    amount: 100,
    createdAt: 9
}));
// store.dispatch(setTextFilter("gas"));

// setTimeout(() => {
//     store.dispatch(setTextFilter("water"));
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
