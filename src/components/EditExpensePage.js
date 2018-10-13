import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <p>This is EditExpensePage with id of {props.match.params.id}</p>
    );
};

export default EditExpensePage;