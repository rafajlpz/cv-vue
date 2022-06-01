import { defineStore } from "pinia";
import { auth } from "@/hook/firebase.config";

export const useStore = defineStore("users", {
  state: () => {
    return {
      user: null,
    };
  },
});
