"use client"
import { useEffect, useState } from "react"

export default function ProductsList (){

    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await fetch('https://dummyjson.com/products')
                let data = await res.json()
                setProduct(data.products)
            } catch (err) {
                console.error(`Error in fetching API data `, err)
            }
        }

        fetchData()
    }, [])

    return (
        <div>
            <h1>API example with useEffect and useState</h1>
            <h1>Products List : </h1>
            {product.map((item) => (
                <h4>{item.title}</h4>
            ))}
        </div>
        
    )
}