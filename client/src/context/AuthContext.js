// import { createContext, useState } from "react";

// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({});
//   const [logged, setLogged] = useState(false);

//   const updateAuth = (newAuth) => {
//     localStorage.setItem("REACT_TOKEN_AUTH_KEY", newAuth.access_token);
//     setLogged(true);
//     setAuth(newAuth);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ auth, setAuth: updateAuth, logged, setLogged }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;


