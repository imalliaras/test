import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const demoState = {
    expenses: [{
        id: 'id of the expense',
        description: 'description of the expense',
        note: 'a note about the expense',
        amount: 25000,
        createdAt: 0
    }],
    filters: {
        text: 'filter by text',
        sortBy: 'sort by date or amount',
        startDate: undefined,
        endDate: undefined
    }
};

// ADD_EXPENSE Action

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt
    }
});

// REMOVE_EXPENSE Action

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE Action

const editExpense = (id, updates) => ({  
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER Action

const setTextFilter = (update = '') => ({  
    type: 'SET_TEXT_FILTER',
    update
});

// SORT_BY_AMOUNT Action

const sortByAmount = () => ({  
    type: 'SORT_BY_AMOUNT'
});

// SORT_BY_DATE Action

const sortByDate = () => ({  
    type: 'SORT_BY_DATE'
});

// SET_START_DATE Action

const setStartDate = (startDate = undefined) => ({  
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE Action

const setEndDate = (endDate = undefined) => ({  
    type: 'SET_END_DATE',
    endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, 
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'createdAt',
    startDate: undefined,
    endDate: undefined
};
    
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...state, text: action.update};
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'};
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'};
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate};
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate};
        default:
            return state;
    }
};

// Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    // console.log("expenses", expenses);
    // console.log("filters", filters);
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
            return -1;
        }
        if (a[sortBy] < b[sortBy]) {
            return 1;
        }
        return 0;
    });

};

// Create Store

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

// Watch for Store changes

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// Add some expenses

const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    note: 'Rent for September',
    amount: 250,
    createdAt: 25
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'colgirls',
    amount: 500,
    createdAt: 15
}));

// const expenseThree = store.dispatch(addExpense());

// Remove an expense

// store.dispatch(removeExpense({id: expenseThree.expense.id}));

// Edit an expense

// store.dispatch(editExpense(expenseTwo.expense.id, { description: 'colgirls!!!'}));

// Set a text filter

// store.dispatch(setTextFilter('en'));

// store.dispatch(setTextFilter());

// Set sort by amount

// store.dispatch(sortByAmount());

// Set sort by date

// store.dispatch(sortByDate());

// Set start date filter

// store.dispatch(setStartDate(16));

// store.dispatch(setStartDate());

// Set end date filter

// store.dispatch(setEndDate(24));

// store.dispatch(setEndDate());
