import { Injectable, inject } from '@angular/core';
import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storage = inject(Storage)

  constructor() { }

  async guardarFoto(dataUrl:any,ruta:string){
    let hora = new Date().getTime();//obtengo hora actual
    let ubicacion = "/"+ruta+"/"+ hora;//le digo la ubicacion de la foto en el firebaseStorage
    const imgRef = ref(this.storage, ubicacion)
    
    return await uploadBytes(imgRef,dataUrl).then(async()=>{
      return await getDownloadURL(imgRef)
        .then( async (imgUrl) => {
          return imgUrl;
       });
    })
  }
}
