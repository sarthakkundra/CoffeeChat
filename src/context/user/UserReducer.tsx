import React, { useContext, useEffect, useState } from "react";
import { User } from "../../pages/profile";
import { useAuth } from "../authentication/AuthContext";
import firebase from "firebase";
import "firebase/firestore";

export interface UserContext {
  user: User | undefined;
}

const UserContext = React.createContext<UserContext>({
  user: undefined,
});

const UserProvider = ({ children }: any) => {
  const { user } = useAuth();
  const [userDetails, setUserDetails] = useState<User>();

  useEffect(() => {
    if (user) {
      const db = firebase.firestore();
      const collection = db.collection("users");
      const userDetails = collection.doc(user.uid);
      userDetails.onSnapshot((snapshot) => {
        setUserDetails(snapshot.data() as User);
      });
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user: userDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  const { user: authUser } = useAuth();

  const updateUser = (userObject: Partial<User>) => {
    const db = firebase.firestore();
    const collection = db.collection("users");
    console.log(authUser);
    const userDetails = collection.doc(authUser?.uid);
    userDetails.update(userObject);
  };

  return { user, updateUser };
};

export default UserProvider;
