import { defineStore } from "pinia";
import { auth } from "@/hook/firebase.config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const useStoreUsers = defineStore("users", {
  state: () => {
    return {
      user: null,
    };
  },
  getters:{
    getEmailUser: (state) =>{
      return state.user && state.user.email ? state.user.email : "No hay nada";
    }
  }
  ,
  actions: {
    signIn({ email, password }) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          this.user = userCredential.user;
          // ...
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    },
    logout() {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.user = null;
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
  },
});
