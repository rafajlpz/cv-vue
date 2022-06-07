import { defineStore } from "pinia";
import { auth } from "@/hook/firebase.config";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const useStoreUsers = defineStore("users", {
  state: () => {
    return {
      user: null,
    };
  },
  getters: {
    getEmailUser: (state) => {
      return state.user && state.user.email
        ? state.user.email
        : "No hay usuarios";
    },
  },
  actions: {
    async signIn({ email, password }) {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      this.user = userCredential.user;
      // response.value;
    },
    logged() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          this.user = user;
          // ...
        } else {
          // User is signed out
          // ...
          this.user = null;
        }
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
