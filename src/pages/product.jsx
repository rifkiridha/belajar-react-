import React, { useEffect, useState } from 'react'
import CardProduct from '../components/organism/CardProduct'
import { getProduct } from '../services/product.service';
import Button from '../components/atoms/Button';
import { getUsername} from '../services/authservices';
import { useLogin } from '../hooks/useLogin';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';


// const data = [{
//   id: 1,
//   image: "images/mobil.jpg",
//   title: "BMW M3 A",
//   name:"BMW M3 A",
//   price:5000000,
//   desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
// }, {
//   id: 2,
//   image: "/images/mobil.jpg",
//   title: "BMW M3 B",
//   name:"BMW M3 B",
//   price:5000000,
//   desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
// }, {
//   id: 3,
//   image: "/images/mobil.jpg",
//   title: "BMW M3 C",
//   name:"BMW M3 C",
//   price:5000000,
//   desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
// },
// ]

const email = localStorage.getItem("email");

export default function ProductPage() {
  // state = data/penyimpanan private yang dipake buat menghandle komponen2 yg berubah2
  // cara menggunakan state
  // const [cart, setCart] = useState([]);
  
  const cart = useSelector((state)=>state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState([]);
  const username = useLogin();

  
  // dipindahkan ke useLogin
  // useEffect(()=>{
  //   const token = localStorage.getItem("token");
  //   // cek token, klo gaaada diarahin ke login

  // if (token) {
  //   setUsername(getUsername(token));
  // } else{
  //   window.location.href="/login"
  // }
  // },[])

const dispatch = useDispatch()

  const handleCart = (event) => {
    event.preventDefault();
    console.log("hapus cart");
    // setCart([]);
    dispatch(clearCart())
    setTotalPrice([]);
    alert("Berhasil dihapus");
  };
  
  
  
  // componentDidMount useEffect -> hook untuk manipulasi komponen

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []) 

  //dependencies array (array kosong) = untuk menghentikan looping (warning)

  // state/UseState = data/penyimpanan/memori yang dipake buat menghandle/menangani komponen yang berubah-ubah
  // const [cart, setCart] = useState([
  //   {
  //     id: 1,
  //     qty: 1,
  //   },
  // ]);

  // componentDidUpdate
  useEffect(() => {
    if (data.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = data.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      // opsional ubah data JSON ke string karna local storage cuma bisa nyimpan data string
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart, data]) //cart sebagai dependencies array yg mna untuk perubahan state


  const handleLogout = () => {
    // localStorage.removeItem("email");
    // localStorage.removeItem("password");
    
    // localStorage.removeItem("token");
    localStorage.clear();
    // setCart([]);
    
    window.location.href = "/login";
  };

  // const handleToCart = (id) => {

  //   //<<ini tidak dipakai
  //   // setCart([
  //   //   ...cart,
  //   //   {
  //   //     id:id,
  //   //     dty:1,
  //   //   },
  //   // ]);
  //   // >>

  //   // kalau ada id yang sama maka akan menambahkan qty +1
  //   if (cart.find((item) => item.id === id)) {
  //     // dy akan mapping dan membongkar itemnya
  //     setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
  //   } else {
  //     // kalo data nya cuma satu maka akan di set satu
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };


  // get data  using useEffect

  useEffect(() => {
    getProduct((data) => {
      console.log(data);
      setData(data);
    })
  })

  return (
    <>
      <div className="flex justify-between items-center bg-gray-800 text-white font-semibold px-4 py-4">
        <h4 className="text-xl">Hi, {username}</h4>
          <Button color="bg-red-500" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex bg-gray-800 text-white font-semibold px-4 py-4">
        <div className='w-4/6 flex flex-wrap justify-center items-center min-h-screen gap-6'>
          {data.length > 0 && data.map((data) => (
            <CardProduct key={data.id}>
              <CardProduct.Header image={data.image} id={data.id} />
              <CardProduct.Body title={data.title}>{data.description}</CardProduct.Body>
              {/* <CardProduct.Footer price={data.price} id={data.id} handleToCart={handleToCart} /> */}
              <CardProduct.Footer price={data.price} id={data.id} />
            </CardProduct>

          ))}
        </div>

        <div className='w-2/6 py-8 '>
          <h1 className='text-2xl font-bold text-blue-500'>Cart</h1>
          <form action="" onSubmit={handleCart}>
            <Button color="bg-blue-500">Delete Cart</Button>
          </form>

          <table className="border px-2 py-4 rounded-lg table-auto border-separate border-spacing-x-5 bg-white text-black">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 && cart.map((item) => {
                // mencari id dlm var data, kalo id yg di data sama dengan id yang ada di cart maka ambil produknya
                const datas = data.find((data) => data.id === item.id);
                // convert USD ke rupiah
                // datas.price*=15000;
                return (
                  <tr key={item.id}>
                    <td className='text-center'>{datas.title}</td>
                    <td>{datas.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                    <td className='text-center'>{item.qty}</td>
                    <td>{(item.qty * datas.price).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                  </tr>
                );
              })}
              <tr className='font-bold'>
                <td colSpan={3}>Total Price</td>
                <td>{totalPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

