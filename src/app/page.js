import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <HelloComponent />      
      <HelloComponent name="Jyotirmoy"/>      
      
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