// import { useContext } from "react";
// import AuthContext from "../context/AuthContext";

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export default useAuth;

import React from "react";
import { createAuthProvider } from "react-token-auth";

export const { useAuth, authFetch, login, logout } = createAuthProvider({
  accessTokenKey: "access_token",
  onUpdateToken: (token) =>
    fetch("/auth/refresh", {
      method: "POST",
      body: token.refresh_token,
    }).then((r) => r.json()),
});

// import { createAuthProvider } from "react-token-auth";

// export const { useAuth, authFetch, login, logout } = createAuthProvider({
//   accessTokenKey: "access_token",
//   onUpdateToken: (token) => {

//     return fetch("/auth/refresh", {
//       method: "POST",
//       body: token.refresh_token,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           return response.json();
//         } else {
//           return Promise.reject("Unable to refresh token.");
//         }
//       })
//       .then((json) => {
//         localStorage.setItem("access_token", json.access_token);
//         return json.access_token;
//       });
//   },
// });

// export const { useAuth, authFetch, login, logout } = createAuthProvider({
//   accessTokenKey: "access_token",
//   onUpdateToken: (token) =>
//     fetch("/auth/refresh", {
//       method: "POST",
//       body: token.refresh_token,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then((r) => r.json()),
// });

// import { createAuthProvider } from "react-token-auth";

// const { useAuth, authFetch, login, logout } = createAuthProvider({
//   accessTokenKey: "access_token",
//   onUpdateToken: (token) =>
//     fetch("/refresh_token", {
//       method: "POST",
//       body: JSON.stringify({ token }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then((r) => r.json()),
// });
