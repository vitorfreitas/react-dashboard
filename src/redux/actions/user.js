export const setUserToken = token => ({
  type: 'SET_TOKEN',
  payload: { token }
});

export const signOut = () => ({
  type: 'SIGN_OUT'
});
