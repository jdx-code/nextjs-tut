'use client' 
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {

  const router = useRouter();

  const [name, setName] = useState("Jyotirmoy")

  // Example showing a function without any parameter
  const fruit = () => {
    alert('apple')
  }

  // Example showing a function with a parameter
  const color = (item) => {
    alert(item)
  }

  // Example showing the use of states
  const changeName = (item) => {
    setName(item)
  }

  return (
    <main className={styles.main}>
      
      <HelloComponent />      
      <HelloComponent name="Jyotirmoy"/>

      <button onClick={()=>alert("Hello..")}> Click me </button>      

      <button onClick={fruit}> Click fruit </button>      

      <button onClick={() => color('blue')}> Click color </button>      

      <p> Name : {name} </p>
      <button onClick={() => changeName('JD')}> Change name </button>   

      {/* Linking in Next JS */}   
      <h3>Linking in Next JS</h3>
      <Link href="/about">About Link</Link>

      {/* Navigating in NextJS */}
      <h3>Navigating in Next JS</h3>
      <button onClick={()=>router.push('/about')}>About button</button>
    </main>
  )
}

const HelloComponent = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}