
import React, { createContext, useState, useContext, useEffect } from "react";

// Create AuthContext
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // Initialize authUser from localStorage
  const initialAuthUser = localStorage.getItem("users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null // Use null instead of undefined
  );

  // Sync state with localStorage whenever authUser changes
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("users", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("users"); // Clean up when user logs out
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for using AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};




// import React, {createContext , useState ,useContext} from 'react'


// export const AuthContext = React.createContext();

// export default function AuthProvider({children}) { 
//  const initailAuthUser = localStorage.getItem("users")
// const [authUser, setAuthUser] = useState(initailAuthUser
//     ? JSON.parse(initailAuthUser): undefined
// )
//   return(
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//         {children}
//     </AuthContext.Provider>
//   ) 

// }
// export const useAuth =()=>useContext(AuthContext);