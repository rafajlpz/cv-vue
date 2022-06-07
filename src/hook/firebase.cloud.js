import { storage } from "@/hook/firebase.config";
import { ref, getDownloadURL } from "firebase/storage";

export const getURL = async (ruta = "contenido/alpaquita.jpg") => {
  
    const pathReference = ref(storage, ruta);
    const url = await getDownloadURL(pathReference);
    return url;
  
};
