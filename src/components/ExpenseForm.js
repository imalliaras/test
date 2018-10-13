import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: ''
    };
    onDescriptionChange = (event) => {
        const description = event.target.value;
        this.setState(() => ({description}));
    };
    onNoteChange= (event) => {
        const note = event.target.value;
        this.setState(() => ({note}));
    };
    onAmountChange = (event) => {
        const amount = event.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }

    };
    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.description} placeholder="Description" onChange={this.onDescriptionChange} autoFocus></input>
                    <input type="text" value={this.state.amount} onChange={this.onAmountChange} placeholder="Amount"></input>
                    <textarea value={this.state.note} onChange={this.onNoteChange} placeholder="Add a note for your expense"></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );     
    }
} 