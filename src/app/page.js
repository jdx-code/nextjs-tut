'use client' 
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './page.module.css'
import custom from './custom.module.css'
import other from './other.module.css'
import conditionalstyle from './conditionalstyle.module.css'

export default function Home() {

  const router = useRouter();

  const [name, setName] = useState("Jyotirmoy")

  const [myColor, setMyColor] = useState("blue")

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

      {/* Example of Nested routes */}
      <h3>Example of Nested routes using Link</h3>
      <Link href="/about/aboutStudent">About Student page link</Link>
      <Link href="/about/aboutTeacher">About Teacher page link</Link>
      
      <h3>Example of Nested routes using navigation</h3>
      <button onClick={()=>router.push('/about/aboutStudent')}> About Student page button</button>
      <button onClick={()=>router.push('/about/aboutTeacher')}> About Teacher page button</button>

      {/* To see examples of layouts and conditional layouts */}
      <button onClick={()=>router.push('/login')}> For Layout Example Click here (1)</button>
      <button onClick={()=>router.push('/about')}> For Layout Example Click here (2)</button>

      {/* To see examples of dynamic routing */}
      <button onClick={()=>router.push('/studentlist')}> For Dynamic Routing Example Click here </button>

      {/* To see examples of segments */}
      <button onClick={()=>router.push('/study')}> For Segments Example Click here </button>

      {/* API Example */}
      <Link href="/api/productslist">API Example 1</Link>

      {/* API Example calling API from server component */}
      <Link href="/api/productslistserver">API Example 2 (Server-side component)</Link>

      {/* CSS Modules Examples */}
      <h1 className={custom.main}>Implemented modular CSS. Imported custom from custom.module.css</h1>

      <h2 className={other.main}>Implemented modular CSS. Imported custom from other.module.css</h2>

      <h3 className={ myColor=="blue" ? conditionalstyle.blue : conditionalstyle.violet }>Implemented modular CSS. Imported custom from other.module.css</h3>      

      <button onClick={() => setMyColor("violet")}>Update color</button>

      <h1 style={{ backgroundColor : myColor=='blue' ? 'blue' : 'violet' }}>Using style attribute</h1>

      <h2 id={custom.gray}> Using ID </h2>

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