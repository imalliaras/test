// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
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