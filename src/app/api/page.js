import Link from "next/link";

export default function Api () {
    return (
        <div>
            <h1>API example with useEffect and useState</h1>
            <Link href="/api/productslist">Click to see all products</Link>
        </div>        
    )
}