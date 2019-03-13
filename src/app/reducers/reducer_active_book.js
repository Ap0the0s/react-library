export default function (state = null, action) {
    if (action.type === 'BOOKS_SELECTED') {
        return action.payload;
    }
    return state;
}