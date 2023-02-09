import { useState } from "react";
import oval from '../../assets/images/Oval.png'
const Products = [
    {
        id:1,
        product_img:oval,
        name_info: 'Lavash mini',
        name: 'Lavash',
        price: 18000 ,
        info:'Kichkina lavash, bla bla',
    },
    {
        id:2,
        product_img:oval,
        name_info: 'Chizburger Max',
        name: 'Burger',
        price: 23000 ,
        info:'Kichkina lavash, bla bla',
    },
    {
        id:3,
        product_img:oval,
        name_info: 'Lavash Max',
        name: 'Lavash',
        price: 8000 ,
        info:'Kichkina lavash, bla bla',
    },
    {
        id:4,
        product_img:oval,
        name_info: 'Lavash S Sirom',
        name: 'Lavash',
        price: 21000 ,
        info:'Kichkina lavash, bla bla',
    },
    {
        id:5,
        product_img:oval,
        name_info: 'Burger mini',
        name: 'Burger',
        price: 11000 ,
        info:'Kichkina lavash, bla bla',
    },
]

export default Products