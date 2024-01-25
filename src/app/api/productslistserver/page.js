const fetchData = async() => {
    let res = await fetch("https://dummyjson.com/products")
    let data = await res.json()
    return data.products
}

export default async function ProductsListServer () {

    let products = await fetchData();
    console.log(products)

    return(
        <div>
            <h2>Products list (Calling API from server side component)</h2>
            {products.map((item) => (
                <h4>{item.title}</h4>
            ))}
        </div>
    )
}