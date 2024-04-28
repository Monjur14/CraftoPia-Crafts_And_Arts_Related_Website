import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/Firebase.init"

export const AuthContext = createContext(null)

const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null)

    //social auth provider
    const googleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signin user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)        
    }

    //google signin
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //Github SignIn
    const githubLogin = () => {
        return signInWithPopup(auth, GithubProvider)
    }

    //Logout
    const logout = () => {
        setUser(null)
        signOut(auth)
    }

    //Update profile
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
    }, [])

    const allValues = { createUser, signInUser, googleLogin, githubLogin, logout, user, updateUserProfile }
  return (
    <AuthContext.Provider value={allValues}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default FirebaseProvider
