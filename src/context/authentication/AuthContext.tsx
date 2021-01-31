import React, { createContext, useContext, useState } from "react";
import firebase from "firebase";
import "firebase/app";
import app from "../../firebaseConfig";

interface AuthContext {
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  firebaseApp?: firebase.app.App;
  user?: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const AuthContext = React.createContext<AuthContext>({
  isAuthenticated: false,
  isLoading: true,
  setAuthenticated: () => {},
  firebaseApp: app,
  setUser: () => {},
});

const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [firebaseApp, setFirebaseApp] = useState(app);
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        setAuthenticated,
        firebaseApp,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useLoginWithGoogle = () => {
  const context = useContext(AuthContext);
  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        context.setUser(result.user);
        context.setAuthenticated(true);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  return { login };
};

export default AuthProvider;
