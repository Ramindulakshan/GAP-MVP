import { createContext, useContext, useReducer } from 'react';

const AuthStateContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.payload.token);
      return { ...state, token: action.payload.token };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return { ...state, token: null };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const initialState = { token: localStorage.getItem('token') || null };
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthStateContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
