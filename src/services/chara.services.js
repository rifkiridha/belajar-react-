
// mengimport modul axios untuk manipulasi API
import axios from "axios";

// bikin funstion get/fetch yang akan di export/panggil/pake

export const getChara = (callback) => {
    axios
    .get("https://api.disneyapi.dev/character") //pakai method get buat ngambil data di API
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

export const getDetailChara = (id, callback) => {
    axios
    .get(`https://api.disneyapi.dev/character/${id}`)
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