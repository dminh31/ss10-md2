import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Category() {
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
                    name: "ip1",
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
    return (
        <div>Category
            {category.map((item)=>(
                <li>
                    <Link to={`/category/${item.id}`}>{item.name}</Link>
                </li>
            ))}
            <Outlet></Outlet>
        </div>
    )
}
