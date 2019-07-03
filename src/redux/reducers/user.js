const INITIAL_STATE = {
  token: ''
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload.token };
    case 'SIGN_OUT':
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default userReducer;
