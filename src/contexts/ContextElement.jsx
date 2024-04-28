import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const Mycontext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const ContextElement = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const registerWithEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, [user]);

  const deafultPhoto =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1Ze6aTqHKH2T34PZCskvgsTZaN9TGbgpZbZimtF4n4GMcF6lTBsr4vokS40pkKk25v0&usqp=CAU";

  const contexts = {
    theme,
    setTheme,
    registerWithEmailPass,
    logInWithEmailPass,
    loading,
    setLoading,
    logInWithGoogle,
    logInWithGithub,
    updateUserProfile,
    logOut,
    user,
    deafultPhoto
  };
  return <Mycontext.Provider value={contexts}>{children}</Mycontext.Provider>;
};

export default ContextElement;
