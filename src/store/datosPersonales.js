import { defineStore } from "pinia";
import { db } from "../hook/firebase.config";
import { collection, query, getDocs } from "firebase/firestore";


export const useStoreDatosPersonales = defineStore("datosPersonales", {
  state: () => {
    return {
      curriculum: ['fdfdf'],
      nombre: "",
    };
  },
  actions: {
    /**
     * Funcion que coge datos de firestone
     */
    async setDatosCurriculum() {
      const curriculumRef = collection(db, "curriculum");
      const consulta = query(curriculumRef);
      const resultadoConsulta = await getDocs(consulta);
      this.curriculum = [];
      resultadoConsulta.forEach((fila) => {
        this.curriculum.push(fila.data());
        console.log(fila.data(),'Id--->',fila.id)
      });
    },
  },
  getters: {
    getNombreCompleto(state) {
      return `${state.curriculum.titulo[0]} ${state.curriculum.titulo[1]}`;
    },
    getDiaMesAnho(state) {
      if (
        !state.useStoreDatosPersonales.nacimiento ||
        typeof state.datosPersonales.nacimiento.toDate !== "function"
      )
        return "";

      const date = new Date(state.datosPersonales.nacimiento.toDate());
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    },
  },
});


// {{(store.curriculum[0] && store.curriculum[0].titulo)?store.curriculum[0].titulo:''}}