import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import { useState,useEffect } from "react";

const DetailProductPage = () => {
    const {id} = useParams();
    const [product, setProduct] = useState();

    useEffect(()=>{
    getDetailProduct(id,(data)=>{
        setProduct(data);
    });
},[id]);
console.log(product);
return(
    <div>
        <div>Detail product : {id}</div>
    </div>
);
}

export default DetailProductPage