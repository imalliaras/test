import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ dispatch, id, description, createdAt, amount }) => {
    // console.log("id", id);
    // console.log("state", state);
    // console.log(description);
    // console.log(amount);
    return (
        <div>
            <h3>{description}</h3>
            <p>{createdAt} - {amount}</p>
            <button onClick={(event) => {
                // console.log("click");
                dispatch(removeExpense({id}));
            }}>Remove</button>
        </div>
    );
};

export default connect()(ExpenseListItem);