import React, { useState } from 'react'
import CardProduct from '../components/organism/CardProduct'

const data = [{
  id: 1,
  image: "images/mobil.jpg",
  title: "BMW M3 A",
  name:"BMW M3 A",
  price:5000000,
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
}, {
  id: 2,
  image: "/images/mobil.jpg",
  title: "BMW M3 B",
  name:"BMW M3 B",
  price:5000000,
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
}, {
  id: 3,
  image: "/images/mobil.jpg",
  title: "BMW M3 C",
  name:"BMW M3 C",
  price:5000000,
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
},
]

export default function ProductPage() {
  // state/UseState = data/penyimpanan/memori yang dipake buat menghandle/menangani komponen yang berubah-ubah
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleToCart = (id) => {
    // setCart([
    //   ...cart,
    //   {
    //     id:id,
    //     dty:1,
    //   },
    // ]);

    // kalau ada id yang sama maka akan menambahkan qty +1
    if (cart.find((item) => item.id === id)) {
      // dy akan mapping dan membongkar itemnya
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      // kalo data nya cuma satu maka akan di set satu
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const email=localStorage.getItem("email");

  return (
    <>
      <div className="flex justify-between items-center bg-gray-800 text-white font-semibold px-4 py-4">
        <h4 className="text-xl">Hi, {email.split("@gmail.com")}</h4>
        <div className='flex justify-center items-center min-h-screen gap-6'>
        {data.map((data) => (
          <CardProduct key={data.id}>
            <CardProduct.Header image={data.image} />
            <CardProduct.Body title={data.name}>{data.desc}</CardProduct.Body>
            <CardProduct.Footer price={data.price} id={data.id} handleToCart={handleToCart} />
          </CardProduct>
        ))}
        <table className="border px-2 py-4 rounded-lg table-auto border-separate border-spacing-x-5">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item)=>{
              // mencari id dlm var data, kalo id yg di data sama dengan id yang ada di cart maka ambil produknya
              const datas=data.find((data)=>data.id === item.id);
              return(
              <tr key={item.id}>
                <td className='text-center'>{datas.name}</td>
                <td>{datas.price.toLocaleString("id-ID",{style:"currency", currency:"IDR"})}</td>
                <td className='text-center'>{item.qty}</td>
                <td>{(item.qty*datas.price).toLocaleString("id-ID",{style:"currency", currency:"IDR"})}</td>
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    </>
  )
}

