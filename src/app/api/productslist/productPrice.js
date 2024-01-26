export default function ProductPrice (props) {
    return (
        <button onClick={()=> alert(props.price)}>Check Price</button>
    )
}