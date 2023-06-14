import React from 'react'
import CardProduct from '../components/organism/CardProduct'
import Header from '../components/organism/Header'
import Footer from '../components/organism/Footer'

const data = [{
    id: 1,
    image: "public/images/mobil.jpg",
    title: "BMW M3 A",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
}, {
    id: 2,
    image: "public/images/mobil.jpg",
    title: "BMW M3 B",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
}, {
    id: 3,
    image: "public/images/mobil.jpg",
    title: "BMW M3 C",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
}, {
    id: 4,
    image: "public/images/mobil.jpg",
    title: "BMW M3 C",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
}, {
    id: 5,
    image: "public/images/mobil.jpg",
    title: "BMW M3 C",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
}, {
    id: 6,
    image: "public/images/mobil.jpg",
    title: "BMW M3 C",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
}, {
    id: 7,
    image: "public/images/mobil.jpg",
    title: "BMW M3 C",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
}, {
    id: 8,
    image: "public/images/mobil.jpg",
    title: "BMW M3 C",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
}, {
    id: 9,
    image: "public/images/mobil.jpg",
    title: "BMW M3 C",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
}, {
    id: 10,
    image: "public/images/mobil.jpg",
    title: "BMW M3 C",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta doloribus enim non facilis laudantium! Quaerat, ab accusantium nemo repellendus libero beatae nostrum, cumque in temporibus at dolore sit earum."
},
]

export default function ProductPage() {
    return (
        <>
            <Header />
            <div className='grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                <CardProduct>
                    <CardProduct.Header image="public/images/mobil.jpg" />
                    <CardProduct.Body title="BMW M3">
                        Lorem ipsum dolor sit amet consectetur adipisicin g elit. Harum ullam dolorum officiis in corporis optio vitae numquam distinctio sequi fugit veniam excepturi ipsam nam est eaque, molestias nemo voluptatum assumenda.
                    </CardProduct.Body>
                    <CardProduct.Footer>Harga = 2 Milyar</CardProduct.Footer>
                </CardProduct>
                {data.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body title={product.title}>
                            {product.desc}
                        </CardProduct.Body>
                        <CardProduct.Footer>Harga = 2 Milyar</CardProduct.Footer>
                    </CardProduct>
                ))}
            </div>
            <Footer />
        </>
    )
}