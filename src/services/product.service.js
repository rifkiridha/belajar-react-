
// mengimport modul axios untuk manipulasi API
import axios from "axios";

// bikin funstion get/fetch yang akan di export/panggil/pake

export const getProduct = (callback) => {
    axios
    .get("https://fakestoreapi.com/products") //pakai method get buat ngambil data di API
    .then((res) => {  
        //mengirimkan response data jika sukses
        console.log("res : ",res);
        callback(res.data);
    })
    .catch((err)=>{  
        //nampilin error kalau tidak benar
        console.log(err);
    });
}