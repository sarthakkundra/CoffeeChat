import React, { createContext, useContext, useState } from "react";
import firebase from "firebase";
import "firebase/app";
import app from "../../firebaseConfig";

interface AuthContext {
  isAuthenticated: boolean;
  isLoading: boolean;
  firebaseApp?: firebase.app.App;
  user?: any;
}

const AuthContext = React.createContext<AuthContext>({
  isAuthenticated: false,
  isLoading: true,
  firebaseApp: app,
});

const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [firebaseApp, setFirebaseApp] = useState(app);
  const [user, setUser] = useState<firebase.User | null>();

  useState(() => {
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        setAuthenticated(true);
      } else {
        setUser(null);
        setAuthenticated(false);
      }
      setLoading(false);
    });
  });

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        firebaseApp,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useLoginWithGoogle = () => {
  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  const logout = () => {
    firebase.auth().signOut();
  };

  return { login, logout };
};

export const useAuth = () => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);
  return { isAuthenticated, isLoading };
};

export default AuthProvider;
