import { defineStore } from "pinia";
import { db } from "../hook/firebase.config";
import { collection, query, getDocs } from "firebase/firestore";
import { ref } from "vue";



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
            let curriculumRef = collection(db, "curriculum");
            let consulta = query(curriculumRef);
            let resultadoConsulta = await getDocs(consulta);
            this.curriculum = [];
            resultadoConsulta.forEach(
                (fila) => {
                this.curriculum.push(fila.data())
            });
        }
    }
});



