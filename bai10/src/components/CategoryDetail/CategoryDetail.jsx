import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryDetail() {
   
    const [category, setCategory] = useState([
        {
            id: 111,
            name: "iphone",
            product: [
                {
                    id: Math.floor(Math.random() * 9999999),
                    name: "ip1",
                    price: 5000,
                },
                {
                    id: Math.floor(Math.random() * 9999999),
                    name: "ip10",
                    price: 6000,
                },
            ]
        },
        {
            id: 222,
            name: "bakery",
            product: [
                {
                    id: Math.floor(Math.random() * 9999999),
                    name: "cakes",
                    price: 7000,
                },
                {
                    id: Math.floor(Math.random() * 9999999),
                    name: "donut",
                    price: 8000,
                },
            ]
        },
        {
            id: 333,
            name: "alcohol",
            product: [
                {
                    id: Math.floor(Math.random() * 9999999),
                    name: "tao meo",
                    price: 7000,
                },
                {
                    id: Math.floor(Math.random() * 9999999),
                    name: "3 so kick",
                    price: 8000,
                },
            ]
        },

    ])
    const [product, setProduct] = useState([])
    const {categoryId} = useParams()
    console.log(categoryId);
    useEffect(() => {
        let resultProduct = category.find((item) => {
            return item.id == categoryId
        })
        setProduct(resultProduct.product)
    }, [categoryId])
    return (
        <>
            <div>CategoryDetail</div>
            {product.map((item)=>(
                <li key={item.id}>
                    name:{item.name}
                    price:{item.price}

                </li>
            ))}
        </>

    )
}
