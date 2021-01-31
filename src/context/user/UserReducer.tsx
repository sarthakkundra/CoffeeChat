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
        const data = snapshot.data();
        if (data) {
          setUserDetails(snapshot.data() as User);
        } else {
          collection.doc(user.uid).set({
            firstName: user.displayName?.split(" ")[0],
            lastName: user.displayName?.split(" ")[1],
            image: user.photoURL,
          });
        }
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

  const getUser = async (id: string) => {
    const db = firebase.firestore();
    const collection = db.collection("users");
    const userDetails = collection.doc(id);
    const userData = await userDetails.get();
    return userData.data();
  };

  return { user, updateUser, getUser };
};

export default UserProvider;
