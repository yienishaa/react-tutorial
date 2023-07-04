//reducer is a func that accepts the state and action. based on action type then we do some logic
export default (posts = [], action) =>{
    switch (action.type)
    {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}