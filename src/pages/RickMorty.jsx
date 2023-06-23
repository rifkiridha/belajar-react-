import React, { useEffect, useState } from 'react'
import { getChara } from '../services/chara.services';
import Button from '../components/atoms/Button';
import CardProduct from '../components/organism/CardProduct';
import { getRickMorty } from '../services/rick.services';
import CardChara from '../components/organism/CardCharacter';



export default function RickMortyPage() {
  // state = data/penyimpanan private yang dipake buat menghandle komponen2 yg berubah2

  const [data, setData] = useState([]);


  // componentDidUpdate


  const handleLogout = () => {
    localStorage.clear();

    window.location.href = "/login";
  };

  // get data  using useEffect

  useEffect(() => {
    getRickMorty((data) => {
      console.log(data);
      setData(data.results);
    })
  })

  return (
    <>
      <div className="flex bg-gray-800 text-white font-semibold px-4 py-4">
        <div className='w-full flex flex-wrap justify-center text-center items-center min-h-screen gap-6'>
          {data.length > 0 && data.map((data) => (
            // <CardProduct key={data.id}>
            //   <CardProduct.Header image={data.image} id={data.id} />
            //   <CardProduct.Body title={data.name}>{data.gender}</CardProduct.Body>
            // </CardProduct>
            <CardChara key={data.id}>
            <CardChara.Header image={data.image} id={data.id} />
            <CardChara.Body title={data.name}>
              Gender : {data.gender}
              <br/>
              Status : {data.status}
              <br/>
              Species : {data.species}
              <br/>
          
            </CardChara.Body>
          </CardChara>

          ))}
        </div>
      </div>
    </>
  )
}

