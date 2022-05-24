import { defineStore } from "pinia";
import { db } from "../hook/firebase.config";
import { collection, query, getDocs } from "firebase/firestore";

export const useStoreDatosPersonales = defineStore(
"datosPersonales",
{
    state:()=>{
        return{
            curriculum:[],
            nombre:""
        };
    }
    ,
    actions:{
        /**
         * Funcion que coge datos de firestone
         */
        async setDatosCurriculum() {              
            const curriculumRef = collection(db, "curriculum");
            const consulta = query(curriculumRef);
            const resultadoConsulta = await getDocs(consulta);
            this.curriculum = [];
            resultadoConsulta.forEach(
                (fila) => {
                this.curriculum.push(fila.data())
            });
        }
    }
});



