import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Temporary storage of users
  const [users, setUsers] = useState([
    // Pre-created default user if needed
    // { email: "admin@example.com", password: "admin123" }
  ]);

  const registerUser = (email, password) => {
    // check if user exists
    const exists = users.find((u) => u.email === email);
    if (exists) return false;
    setUsers([...users, { email, password }]);
    return true;
  };

  const loginUser = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    return user ? true : false;
  };

  return (
    <AuthContext.Provider value={{ users, registerUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
