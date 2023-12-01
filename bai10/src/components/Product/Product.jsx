import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
  console.log("1111",useParams())
  const {idProduct}=useParams()
  console.log(idProduct);
  return (
    <div>Product</div>
  )
}
