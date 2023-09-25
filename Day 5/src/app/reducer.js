// userReducer.js
const initialState = {
    username: '', // Initial state for the user's username
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_NAME': // Update the action type to 'SET_USER_NAME'
        return {
          ...state,
          username: action.payload, // Store the username in the state
        };
      default:
        return state;
    }
    const initialState = {
      username: 'JohnDoe',
      email: 'johndoe@example.com',
      orders: 10,
      inventorySpace: 500,
      totalShipping: 1000,
      remainingShipping: 500,
    };
  };
  
  export default userReducer;